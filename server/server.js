const express = require('express');
const bodyParser = require('body-parser');
// const mongo = require('mongo');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, ()=>{
  console.log(`express is running on ${port}`);
})
