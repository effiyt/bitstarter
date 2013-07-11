var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buf = new Buffer (16);
var buff = fs.readFileSync ("index.html");
var buffToText = buf.toString (buff);
app.get('/', function(request, response) {
  response.send(buffToText);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});

