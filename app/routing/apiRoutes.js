const friendsArray = require("../data/friends");


function apiRoutes(app) {

    app.get("/api/friends", function (req, res) {
        return res.json(friends);
    });



    app.post("/api/friends", function (req, res) {
        var newFriend = {
            name: req.body.name,
            photo: req.body.photo,
            scores: []
          };
          var scoresArray = [];
          for(var i=0; i < req.body.scores.length; i++){
            scoresArray.push( parseInt(req.body.scores[i]) )
          }
          newFriend.scores = scoresArray;
      
      
          var scoreCompare = [];
          for(var i=0; i < friendsArray.length; i++){
      
           
            var scoreDiff = 0;
            for(var j=0; j < newFriend.scores.length; j++){
             scoreDiff += Math.abs( newFriend.scores[j] - friendsArray[i].scores[j] );
            }
      
            scoreCompare.push(scoreDiff);
          }
      
          
          var bestMatch = 0; 
          for(var i=1; i < scoreCompare.length; i++){
            
          
            if(scoreCompare[i] <= scoreCompare[bestMatch]){
              bestMatch = i;
            }
      
          }
      
         
          var bestFriends = friends[bestMatch];
      
      
      
          res.json(bestFriends);
      
      
      
          friends.push(newFriend);
      
        });
      
      }

module.exports = apiRoutes;