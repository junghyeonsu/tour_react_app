const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });

const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const request = require("request");
const { v4: uuidv4 } = require("uuid");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

const stageModel = require("./stage");
const userModel = require("./user");
const gameModel = require("./game");
const { findById } = require("./stage");
var database;

// database와 연결하는 코드 (현재는 local로 설정되어있다.)
function connectDB() {
  var databaseUrl =
    process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`;
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
  stageModel.find({}).exec()
    .then((stage) => {
      var keys = [];
      var stageClearMap = new Map();
      var gameList = [];

      var gameNumber = 10;
      for (var i = 0; i < stage.length; i++) {
        keys.push(stage[i].name);
      }
      for (var i = 0; i < keys.length; i++) {
        stageClearMap.set(keys[i], false);
      }
      for (var i = 0; i < gameNumber; i++) {
        gameList.push(i);
      }
      var user = new userModel({
        id: id,
        stageClear: stageClearMap,
        gameList: gameList,
        clearGame: [],
      });
      user.save(function (err) {
        if (err) {
          cb(err, null);
          return;
        }
        console.log("사용자 데이터 추가");
        cb(null, user);
      });
    })
    .catch((err) => {
      console.error(err);
    });
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
updateClearGame = function (database, userInfo, gameIndex, cb) {
  userModel.findOne({ id: userInfo }).exec()
    .then((user) => {
      if (user.clearGame.indexOf(gameIndex) == -1) {
        user.clearGame.push(gameIndex);
      }
      user.save(function (err) {
        if (err) {
          cb(err, null);
          return;
        }
        cb(null, user);
      });
    })
    .catch((err) => {
      console.log(err);
    });
};
//스테이지의 정답을 맞추었을때 호출할 예정
setClearStage = function (database, stageInfo, id, cb) {
  userModel.findOne({ id: id }, function (err, user) {
    if (err) console.log(err);
    user.stageClear.set(stageInfo, true);
    user.save(function (err) {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, user);
    });
  });
};

getHintAndAnswerAndGameList = function (database,stageInfo,quizInfo,userInfo,cb) {
  stageModel.findOne({ name: stageInfo }).exec()
    .then((stage) => {
      quizIdx = Number(quizInfo[4]);
      var hint = stage["hint"][quizIdx - 1];
      var answer = stage["answer"];
      userModel.findOne({ id: userInfo }).exec()
        .then((user) => {
          //gameIndex는 array
          cb(null, {
            gameList: user.gameList,
            clearGame: user.clearGame,
            hint: hint,
            answer: answer,
          });
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

// 데이터베이스에서 적은 사람들이 존재하는 Stage를 반환하는 함수
// 그리고 추가적으로 현재 스테이지의 Mission도 추가적으로 전송함
getLessPeopleStageAndMission = function (database, stageInfo, visited, cb) {
  stageModel.find({}).exec()
    .then((stage) => {
      var idx = -1;
      var minValue = Number.MAX_VALUE;
      var candidate = [];
      var mission = [];
      for (var i = 0; i < stage.length; i++) {
        if (!visited[stage[i].name]) {
          candidate.push(stage[i]);
        }
        if (stage[i].name == stageInfo) {
          mission = stage[i].mission;
          stage[i].count--;
          stage[i].save(function (err) {
            if (err) {
              console.log(err);
            }
          });
        }
      }
      for (var i = 0; i < candidate.length; i++) {
        if (candidate[i].count < minValue) {
          minValue = candidate[i].count;
          idx = i;
        }
      }
      if (candidate.length == 0) {
        cb(null, {
          mission: mission[0],
          stage: "더 이상 방문할 곳이 없습니다.",
        });
      } else {
        cb(null, {
          mission: mission[0],
          stage: `다음 방문지는 ${candidate[idx].name}입니다.`,
        });
      }  
      
    })
    .catch((err) => {
      console.log(err);
    });
};

getStageInfomation = function (database, cb) {
  stageModel.find({}).exec()
    .then((stage) => {
      var stageInfos = [];
      for (i = 0; i < stage.length; i++) {
        var stageInfo = {
          stage: stage[i].name,
          traffic: stage[i].count,
        };
        stageInfos.push(stageInfo);
      }
      console.log(stageInfos);
      cb(null, stageInfos);
    })
    .catch((err) => {
      console.log(err);
    });
};

getGame = function (database, gameIndex, cb) {
  gameModel.find({}).exec()
    .then((games) => {
      var i = gameIndex;
      cb(null, {
        title: games[i].title,
        text: games[i].text,
        image: games[i].image,
        video: games[i].video,
        answer: games[i].answer,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

getGameList= function (database, cb) {
  gameModel.find({}).exec()
    .then((games) => {
      var result = {};
      result["gameList"] = games;
      cb(null, result);
    })
    .catch((err) => {
      console.log(err);
    });
};
getStageList = function(database,cb){
  stageModel.find({}).exec()
   .then((stage) => {
    var result = {};
    result["stageList"] = stage;
     cb(null, result);
  })
  .catch((err) => {
    console.log(err);
  });
}

getStageList = function(database,cb){
  stageModel.find({}).exec()
   .then((stage) => {
    var result = {};
    result["stageList"] = stage;
     cb(null, result);
  })
  .catch((err) => {
    console.log(err);
  });
}

deleteGame = function (database,id, cb) {
  gameModel.findOneAndDelete({_id:id}).exec()
    .catch((err) => {
      console.log(err);
    });
};

deleteStage = function (database,id, cb) {
  stageModel.findOneAndDelete({_id:id}).exec()
    .catch((err) => {
      console.log(err);
    });
};

//나중에 Stage정보를 추가하거나 변경할 때 사용할 것임(Post)
app.post("/api/setStageInfo", function (req, res) {
  var stageName = req.body.stageName;
  var stageHint = req.body.stageHint.split(",");
  var stageMission = req.body.stageMission.split(",");
  var stageAnswer = req.body.stageAnswer;

  var newStage = new stageModel({
    name: stageName,
    count: 0,
    hint: stageHint,
    mission: stageMission,
    answer: stageAnswer,
  });
  newStage.save(function (err) {
    if (err) {
      console.error(err);
    }
  });
  console.log("success add stage");
  // if (database) {
  //   stageModel.insertMany([{
  //     name: "stage1",
  //     count: 0,
  //     hint: ["stage1 hint1", "stage1 hint2", "stage1 hint3", "stage1 hint4"],
  //     mission: ["stage1 Mission1", "stage1 Mission2", "stage1 Mission3"],
  //     answer: "Happy",
  //   },{
  //     name: "stage2",
  //     count: 0,
  //     hint: ["stage2 hint1", "stage2 hint2", "stage2 hint3", "stage2 hint4"],
  //     mission: ["stage2 Mission1", "stage2 Mission2", "stage2 Mission3"],
  //     answer: "Hello",
  //   },{
  //     name: "stage3",
  //     count: 0,
  //     hint: ["stage3 hint1", "stage3 hint2", "stage3 hint3", "stage3 hint4"],
  //     mission: ["stage3 Mission1", "stage3 Mission2", "stage3 Mission3"],
  //     answer: "Hint",
  //   },{
  //     name: "stage4",
  //     count: 0,
  //     hint: ["stage4 hint1", "stage4 hint2", "stage4 hint3", "stage4 hint4"],
  //     mission: ["stage4 Mission1", "stage4 Mission2", "stage4 Mission3"],
  //     answer: "Hi",
  //   }
  // ]);
  //   res.send("Set Stage Information");
  // }
});

app.get("/api/getStageInfo", function (req, res) {
  getStageInfomation(database, function (err, result) {
    if (err) throw err;
    if (result) res.send(result);
  });
});

app.use("/api/getImage", express.static(__dirname + "/upload"));
app.post("/api/setGameInfo", upload.single("image"), function (req, res) {
  var title = req.body.title;
  var image = "/api/getImage/" + req.file.filename;
  var video = req.body.video; //youtube link로 보내줘야함
  var text = req.body.text;
  var answer = req.body.answer;
  var game = new gameModel({title: title,image: image,video: video,text: text,answer: answer,});
  game.save(function (err) {
    if (err) {
      console.log("게임을 저장하지 못했습니다.");
      return;
    }
  });
  console.log("success add game");
});

app.post("/api/deleteGame", function (req, res) {
  var id = req.body.id;//
  deleteGame(database,id, function (err, result) {
    if (err) throw err;
    if (result) console.log(result);
  });
});

app.post("/api/deleteStage", function (req, res) {
  var id = req.body.id;
  deleteStage(database,id, function (err, result) {
    if (err) throw err;
    if (result) console.log(result);
  });
});
app.get("/api/getGameList", function (req, res) {
  getGameList(database, function (err, result) {
    if (err) throw err;
    if (result) res.send(result);
  });
});

app.get("/api/getStageList", function (req, res) {
  getStageList(database, function (err, result) {
    if (err) throw err;
    if (result) res.send(result);
  });
});

app.get("/:stage/:quiz/", function (req, res) {
  var userInfo = req.cookies["user"];
  var visited = req.cookies["visited"];
  var stageInfo = req.params.stage;
  var quizInfo = req.params.quiz;
  // console.log(stageInfo);
  // console.log(req.params.quiz);

  if(!visited){
    visited = {};
    res.cookie("visited", visited, { maxAge: 86400000, httpOnly: true });
  }

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
  getHintAndAnswerAndGameList(database,stageInfo,quizInfo,userInfo,
    function (err, result) {
      if (err) throw err;
      if (result) {
        if(visited["intro"]){
          result["intro"] = true;
          res.send(result);
        }else{
          result["intro"] = false;
          res.send(result);
        }
        // res.send(result);
        // return;
      }
    }
  );
});

//미션화면에서 가져다가 사용할 것임(다음 스테이지와 )
app.post("/mission", function (req, res) {
  const stageInfo = req.body.stage;
  console.log(stageInfo);
  var visited = req.cookies["visited"];
  var user = req.cookies["user"];

  setClearStage(database, stageInfo, user, function (err, result) {
    if (err) throw err;
    if (result) console.log(result);
  });
  getLessPeopleStageAndMission(database, stageInfo, visited, function (
    err,
    result
  ) {
    if (err) throw err;
    if (result) res.send(result);
  });
});
//게임을 하고나서 어떤 게임을 했는지를 받아야 한다.
app.post("/quiz", function (req, res) {
  var userInfo = req.cookies["user"];
  var gameIndex = req.body.GameIndex; //수정 필요함
  updateClearGame(database, userInfo, gameIndex, function (err, result) {
    if (err) throw err;
    if (result) res.send(result);
  });
});

app.get("/game", function (req, res) {
  var gameIndex = 0;
  getGame(database, gameIndex, function (err, result) {
    if (err) throw err;
    if (result) res.send(result);
  });
});

app.get("/intro", function (req, res) {
  var visited = req.cookies["visited"];
  if(!visited){
    visited = {};
  }
  visited["intro"] = true;
  res.cookie("visited", visited, { maxAge: 86400000, httpOnly: true });
  res.send({stage:null,quiz:null});
});

app.listen(port, function () {
  console.log("Express server has started on port " + port);
});