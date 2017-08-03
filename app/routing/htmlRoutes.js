var path = require('path');
var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.sendfile(path.resolve('app/public/home.html'));
})
 
app.listen(3000);