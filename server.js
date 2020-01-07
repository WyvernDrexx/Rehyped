require("dotenv").config();

const express = require('express');
const path = require('path');
const app = express();
let PORT = process.env.PORT || 3000;

if(process.env.NODE_ENV && process.env.NODE_ENV === "production"){
  PORT = 80;
}

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, _ => {
  console.log("React Server started on port: " + PORT);
});