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

addUser = function (database, id, cb) {
  console.log("addUser 호출");
  var user = new userModel({
    id: id,
    stageClear: [false,false,false,false],
    stageVisit: [false,false,false,false],
    quiz: [1,2,3,4],
    prevGame:0,
  });
  user.save(function (err) {
    if (err) {
      cb(err, null);
      return;
    }
    console.log("사용자 데이터 추가");
    cb(null, user);
  });
};

updateStageInfo = function(database, stageInfo, cb){
  console.log("updateStageInfo",stageInfo);
  stageModel.find({name: stageInfo},function(err, stage){
    if(err) console.log(err);
    console.log(stage)
    console.log(typeof(stage[0].count));
    stage[0].count++;
    stage[0].save(function (err) {
      if (err) {
        cb(err, null);
        return;
      }
      cb(null, stage);
    });
  })
}

app.get("/api/setStageInfo",function(req,res){
  if(database){
    stageModel.insertMany({
      name:"stage1",
      count: 0,
      hint:['stage1 hint1','stage1 hint2','stage1 hint3','stage1 hint4'],
      answer:"Happy",
    });
    stageModel.insertMany({
      name:"stage2",
      count: 0,
      hint:['stage2 hint1','stage2 hint2','stage2 hint3','stage2 hint4'],
      answer:"Hello",
    });
    stageModel.insertMany({
      name:"stage3",
      count: 0,
      hint:['stage3 hint1','stage3 hint2','stage3 hint3','stage3 hint4'],
      answer:"Hint",
    });
    stageModel.insertMany({
      name:"stage4",
      count: 0,
      hint:['stage4 hint1','stage4 hint2','stage4 hint3','stage4 hint4'],
      answer:"Hi",
    });
    res.send("Set Stage Information");
  }
});

app.get("/:stage/:quiz/", function (req, res) {
  var user = req.cookies["user"];
  var stageInfo = req.params.stage;
  console.log(stageInfo);
  console.log(req.params.quiz);
  if (user) {
    console.log(user);
    updateStageInfo(database,stageInfo,function (err, result) {
      if (err) {
        throw err;
      }
      if (result) {
        console.log(`${stageInfo} Count 증가`);
      }
    });
    return res.send("Cookie has setted");
  } else {
    var uuid = uuidv4();
    if (database) {
      addUser(database, uuid, function (err, result) {
        if (err) {
          throw err;
        }
        if (result) {
          console.log("유저 추가 성공");
        }
      });
      res.cookie("user", uuid, { maxAge: 999999, httpOnly: true });
      updateStageInfo(database,stageInfo,function (err, result) {
        if (err) {
          throw err;
        }
        if (result) {
          console.log(`${stageInfo} Count 증가`);
        }
      })
      return res.send("Cookie Setting");
    }
  }
});
app.post('/:Stage/:Quiz',function(req, res){
  console.log(req.params)
  var stage;
  var quiz;

  if(req.params.Stage === 'Stage3' && req.params.Quiz === 'Quiz4'){
    stage = 'hi';
    quiz = 'E'
  }
  else{
    stage = 'hello';
    quiz = 'A'
  }
  res.send({quiz : quiz,stage:stage});
})


var server = app.listen(port, function () {
  console.log("Express server has started on port " + port);
});