const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");
const stageModel = require("./stage");
const userModel = require("./user");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

var database;

// database와 연결하는 코드 (현재는 local로 설정되어있다.)
function connectDB() {
  var databaseUrl = process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`;
  mongoose.connect(databaseUrl);
  database = mongoose.connection;
  database.on(
    "error",
    console.error.bind(console, "mongoose connection error")
  );
  database.on("open", function () {
    console.log("Connected to mongod server :" + databaseUrl);
  });
  database.on("disconnected", connectDB);
}
connectDB();

// user cookie가 없는 경우 user를 데이터베이스에 추가하는 함수
addUser = function (database, id, cb) {
  console.log("addUser 호출");
  //stage 정보를 받아서 json형식으로 저장하는 것이 어떨까?
  stageModel.find({}).exec()
  .then((stage)=>{
    var keys = []
    var stageClearMap = new Map();
    for(var i =0;i<stage.length;i++){
      keys.push(stage[i].name);
    }
    for(var i = 0;i<keys.length;i++){
      stageClearMap.set(keys[i],false);
    }
    var user = new userModel({
      id: id,
      stageClear: stageClearMap,
      stageVisit: stageClearMap,
      gameIndex: [1, 2, 3, 4],
      prevGame: 0,
    });
    user.save(function (err) {
      if (err) {
        cb(err, null);
        return;
      }
      console.log("사용자 데이터 추가");
      cb(null, user);
    });
  }).catch((err)=>{
    console.error(err);
  })
};

// 스테이지의 정보를 받아서 해당 스테이지에 해당하는 카운트 증가하는 함수
updateStageInfo = function (database, stageInfo, cb) {
  stageModel.findOne({ name: stageInfo }, function (err, stage) {
    if (err) console.log(err);
    console.log(stage);
    stage.count++;
    stage.save(function (err) {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, stage);
    });
  });
};

//스테이지의 정답을 맞추었을때 호출할 예정
setClearStage = function (database,stageInfo, id, cb) {
  userModel.findOne({ id: id }, function (err, user) {
    if (err) console.log(err);
    user.stageClear.set(stageInfo,true);
    // user.testSetting.set(stageInfo,true);
    user.save(function (err) {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, user);
    });
  });
};

getHintAndAnswerAndGameIndex = function (database, stageInfo, quizInfo,userInfo, cb) {
  stageModel.findOne({ name: stageInfo }).exec()
    .then((stage) => {
      quizIdx = Number(quizInfo[4]);
      var hint = stage["hint"][quizIdx - 1];
      var answer = stage["answer"];
      userModel.findOne({id:userInfo}).exec()
      .then((user)=>{
        cb(null,{gameIndex:user.gameIndex,hint: hint, answer: answer})
      })
    })
    .catch((err) => {
      console.log(err);
    });
};
//데이터베이스에서 적은 사람들이 존재하는 Stage를 반환하는 함수
getLessPeopleStage = function (database, stageInfo,visited, cb) {
  stageModel.find({}).exec()
    .then((stage) => {
      var idx = -1;
      var minValue = Number.MAX_VALUE;
      var candidate = [];
      for (var i = 0; i < stage.length; i++) {
        if (!visited[stage[i].name])
          candidate.push(stage[i]);
      }
      for(var i = 0;i<candidate.length;i++){
        if(candidate[i].count<minValue){
          minValue = candidate[i].count;
          idx = i;
        }
      }
      if(candidate.length == 0){
        cb(null,"더 이상 방문할 곳이 없습니다.");
      }else{
        cb(null, `다음 목적지는 ${candidate[idx].name}입니다.`);
      }
    })
    .catch((err) => {
      console.log(err);
    });
};
app.get("/api/setStageInfo", function (req, res) {
  if (database) {
    stageModel.insertMany({
      name: "stage1",
      count: 0,
      hint: ["stage1 hint1", "stage1 hint2", "stage1 hint3", "stage1 hint4"],
      answer: "Happy",
    });
    stageModel.insertMany({
      name: "stage2",
      count: 0,
      hint: ["stage2 hint1", "stage2 hint2", "stage2 hint3", "stage2 hint4"],
      answer: "Hello",
    });
    stageModel.insertMany({
      name: "stage3",
      count: 0,
      hint: ["stage3 hint1", "stage3 hint2", "stage3 hint3", "stage3 hint4"],
      answer: "Hint",
    });
    stageModel.insertMany({
      name: "stage4",
      count: 0,
      hint: ["stage4 hint1", "stage4 hint2", "stage4 hint3", "stage4 hint4"],
      answer: "Hi",
    });
    res.send("Set Stage Information");
  }
});

app.get("/:stage/:quiz/", function (req, res) {
  var userInfo = req.cookies["user"];
  var stageInfo = req.params.stage;
  var quizInfo = req.params.quiz;
  // console.log(stageInfo);
  // console.log(req.params.quiz);

  if (userInfo) {
    //이미 유저쿠키가 존재하는 경우
    var visited = req.cookies["visited"];

    if (!visited[stageInfo]) {
      visited[stageInfo] = true;
      console.log(visited[stageInfo]);
      res.cookie("visited", visited, { maxAge: 86400000, httpOnly: true });
      //stage의 카운트를 증가시켜주는 함수를 호출한다.
      updateStageInfo(database, stageInfo, function (err, result) {
        if (err) throw err;
        if (result) console.log(`${stageInfo} Count 증가`);
      });
    }
    // res.send("Cookie has setted");
  } else {
    // 유저 쿠키가 존재하지않았던 상황. 유저 쿠키를 생성한다.
    var uuid = uuidv4();
    userInfo = uuid;
    var visited = {
      stage1: false,
      stage2: false,
      stage3: false,
      stage4: false,
    };
    if (database) {
      // 데이터베이스에 유저의 정보를 추가해주는 부분
      addUser(database, uuid, function (err, result) {
        if (err) throw err;
        if (result) console.log("유저 추가 성공");
      });
      // 쿠키 생성
      res.cookie("user", uuid, { maxAge: 86400000, httpOnly: true });
      visited[stageInfo] = true;
      res.cookie("visited", visited, { maxAge: 86400000, httpOnly: true });

      //stage의 카운트를 증가시켜주는 함수를 호출한다.
      updateStageInfo(database, stageInfo, function (err, result) {
        if (err) throw err;
        if (result) console.log(`${stageInfo} Count 증가`);
      });
      // res.send("Cookie Setting");
    }
  }
  getHintAndAnswerAndGameIndex(database, stageInfo, quizInfo,userInfo, function (err, result) {
    if (err) throw err;    
    if (result) res.send(result);
  });
});

//TODO Post로 변경 필요함
app.get("/mission", function (req, res) {
  var stageInfo = "stage1"; //수정 필요
  var visited = req.cookies["visited"];
  var user = req.cookies["user"];
  console.log(user);
  setClearStage(database,stageInfo,user,function (err, result) {
    if (err) throw err;
    if (result) console.log(result);
  })
  getLessPeopleStage(database, stageInfo,visited, function (err, result) {
    if (err) throw err;
    if (result) res.send(result);
  });
});

app.get("/quiz",function(req,res){

})

app.listen(port, function () {
  console.log("Express server has started on port " + port);
});
