const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const { v4: uuidv4 } = require("uuid");
const Book = require("./book");
const UserModel = require("./user");
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
  var user = new UserModel({
    id: id,
    stage: [],
    quiz: [],
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

var router = require("./routes")(app, Book);

// API 라우팅 !!!
app.post("/api/insert", (req, res) => {
  var book = new Book({
    name: "NodeJS Tutorial",
    author: "velopert",
  });

  book.save(function (err, book) {
    if (err) return console.error(err);
  });

  res.send("hi");
});

app.get("/:stage/:quiz", function (req, res) {
  var user = req.cookies["user"];

  if (user) {
    console.log(user);
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
      return res.send("Cookie Setting");
    }
  }
});

var server = app.listen(port, function () {
  console.log("Express server has started on port " + port);
});
