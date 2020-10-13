const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Book = require("./book");

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var schema = mongoose.Schema;
var db = mongoose.connection;
db.on('error', console.error);
db.once('open', function(){
    // CONNECTED TO MONGODB SERVER
    console.log("Connected to mongod server");
});

mongoose.connect(process.env.MONGODB_URI || `mongodb://localhost:27017/node-react-starter`);
var router = require('./routes')(app,Book)

// API 라우팅 !!!
app.post('/api/insert', (req, res) => {
    var book = new Book({
        name: "NodeJS Tutorial",
        author: "velopert"
    });

    book.save(function(err, book){
        if(err) return console.error(err);
    });
    // let sql = `insert into table1 (name) value ('${req.body.post}');`;
    // connection.query(sql, (err, rows) => {
    //     if(err){
    //         res.send('삽입이 실패했습니다.');
    //     } else {
    //         res.send('삽입이 완료 되었습니다.');
    //     }
    // })

    res.send("hi");
});

var server = app.listen(port, function(){
    console.log("Express server has started on port " + port)
});