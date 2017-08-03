function friend(name, photo, score) {
    this.name = name;
    this.photo = photo;
    this.score = score ;
}

console.log("connected");

$("#submit").on("click", function(){
    
    var nameObj= $("#nameInput").val().trim();
    var photoObj = $("#photoInput").val().trim();
    var scoreArray =[];
    
    for (var i = 0; i < 10; i++){
        
        scoreArray.push($(".form-control :selected").eq(i).text());
    }
   
    
    
    console.log(nameObj + " " + photoObj + " " + scoreArray);
    
    var friendInfo = new friend(nameObj, photoObj, scoreArray);
    
    console.log(friendInfo);
    
    var newDiff = 0;
    var leastDiff = 4234234324;
    var matchedFriend;
    
    for (var i = 0; i < friendArray.length; i++){
        
        newDiff = compare(friendInfo, friendArray[i]);
        
        if (newDiff < leastDiff) {
            
            leastDiff = newDiff;
            matchedFriend = friendArray[i];
        }
        
    }
    console.log(matchedFriend);
    $("#friend").append(matchedFriend.name + "<img src='" + matchedFriend.photo + "'>");
    
    $("#myModal").modal("show");
    
});



//push friends into this array to compare later
var friendArray = [];
//pushing it into the array
friendArray.push(new friend(
    "Stephen", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Stephen_Fry_June_2016.jpg/220px-Stephen_Fry_June_2016.jpg",
    [1,3,2,5,1,4,1,2,3,5]));

friendArray.push(new friend(
    "Sydney", 
    "http://www.abc.net.au/news/image/4690658-3x2-700x467.jpg",
    [2,2,1,3,5,4,4,2,1,5]));

friendArray.push(new friend(
    "Jeremy", 
    "https://yt3.ggpht.com/-jYjrveTOTTw/AAAAAAAAAAI/AAAAAAAAAAA/xMz4PtmTsgs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg",
    [5,3,1,4,2,5,5,4,5,1]));

friendArray.push(new friend(
    "Veronica", "https://pbs.twimg.com/profile_images/703292703740727297/OCMNE0J7.jpg",
    [4,4,5,4,5,4,5,4,5,5]));

friendArray.push(new friend(
    "Landen", "http://www.bakerbotts.com/~/media/images/people/l/landen-paul-b/landenpaul.jpg",
    [1,2,1,2,1,2,1,2,1,2]));

function compare(newFriend, otherFriend) {
    var total= 0;
    
    for (var i = 0; i < 10; i++){
        
        var diff= Math.abs(newFriend.score[i] - otherFriend.score[i]);
    
    
        total = (total+diff);
        
        
    }
    return(total);
}


//find the friend with the lowest total and display their info in an alert





 
console.log("still connected");

