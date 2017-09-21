var express = require('express');
var app = express();
var path = require('path');

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/bananas.html'));
})

app.listen(8000, function(){
  console.log("this machine is listening to port 8000")
})