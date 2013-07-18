var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());
var buffer = new Buffer (256);
var indexcont = fs.readFileSync ('index.html');
var buffToText = buffer.toString ('utf-8');

app.get('/', function(request, response) {
response.send(buffToText);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
//console.log("Listening on " + port);
});
