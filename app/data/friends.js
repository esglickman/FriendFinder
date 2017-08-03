var path = require('path');

var express = require('express');
var app = express();
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000);
// make on click fnc for submit button to get all the scores and create a object

function friend(name, photo, score) {
    this.name = name;
    this.phote = photo;
    this.score = [1,2,3,4,5,6,7,8,9,10] ;
}

var friendInfo = new friend(//put the values in here
)
//
//$("#submit").on(click, function(){
//    
//    var nameObj= $("#nameInput").val().trim();
//    var photoObj = $("#photoInput").val().trim();
//   // var scoreObj = $("")
//    
//    
//    console.log(nameObj + " " + photoObj);
//});
