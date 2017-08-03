var path = require('path');
var express = require('express');
var app = express();
 
//put this in htmlRoutes
app.get('/', function (req, res) {
  res.sendFile(path.resolve('app/public/home.html'));
});
//put this in htmlRoutes
app.get('/survey', function (req, res) {
  res.sendFile(path.resolve('app/public/survey.html'));
});

//making a static filepath
//making /css a variable that actually holds a filepath to where I need
//make another one to link js 'app/routing'
app.use('/css', express.static(path.join(__dirname, 'app/public')));
 


app.listen(3000);