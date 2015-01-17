var express = require('express');
var fs = require('fs');
var htmlfile = "index.html";
var path = require('path')

var app = express.createServer(express.logger());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(request, response) {
  var html = fs.readFileSync('index.html').toString();
  response.send(html);
});

app.get('/en', function(request, response) {
  var html = fs.readFileSync('english.html').toString();
  response.send(html);
});

app.get('/cn', function(request, response) {
  var html = fs.readFileSync('chinese.html').toString();
  response.send(html);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
