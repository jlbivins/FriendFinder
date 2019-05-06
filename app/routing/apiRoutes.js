var friends = require("../data/friends.js")


module.exports = function (app) {

  //get route for api/friends - friends already populated in array
    app.get('/api/friends', function(req,res){
        res.json(friends);
    })


    app.post('/api/friends', (req, res) => {
        console.log("from survey page", req.body)
        var newFriend = {
          name: req.body.name,
          photo: req.body.photo,
          scores: []
        };

        var scoresArray = [];
        for(var i=0; i < req.boy.scores.length; i++){
            scoresArray.push( parseInt(req.body.scores[i]))
        }
        newFriend.scores = scoresArray;
        var scoreComparisionArray = [];
        for(var i=0; i < friendsData.length; i++){
            var currentComparison = 0;
            for(var j=0; j < newFriend.scores.length; j++{
                currentComparison += Math.abs( newFriend.scores[j] - friendsData[i].sores[j] );
            }
            scoreComparisionArray.push(currentComparison);
        }

        var bestMatchPosition=0;
        for(var i=1; i < scoreComparisionArray.length; i++){
            if(scoreComparisionArray[i] <= scoreComparisionArray[bestMatchPosition]){
                bestMatchPosition = i;
            }
        }

        var bestFriendMatch = friendsData[bestMatchPosition];

        res.json(bestFriendMatch);

        friendsData.push(newFriend);
        // newFrined comes in
        // find match
        //var match;

        // add newFriend to friends array.

        //
        

        res.json(match);
    });

}

modeule.exports = apiRoutes;