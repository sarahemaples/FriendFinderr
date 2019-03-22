var friends = require("../data/friends")

module.exports = function(app){

    // basic route that sends uuser first to the home page
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // POST routes /api/friends that will handle incoming survey results
    // this will also be uused to handle the compatibility logic
    app.post("/api/friends", function(req, res){
        // we need to take in req.body.scores and match it to the scores of 
        // everyone in our friendsDB
        var userScores = req.body.scores;
        var match = friends[0];
        var matchCompScore = 50;
        var scoreDiffs = [];
        var count = 0;
        console.log(userScores);
        console.log("-----------------------")

        // loop through friends and grab score arrays
        friends.forEach(function(f){
            scoreDiffs = [];
            count = 0;
            // loop through score arrrays and calculate differences then
            // append these diffs to our score difs arr
            f.scores.forEach(function(s){
                var thisDif = Math.abs(s-userScores[count]);
                count++;
                scoreDiffs.push(thisDif);
            });
            //after we have the scores for each question, we use reduce 
            // to get one single compatibility score
            var compScore = scoreDiffs.reduce(function (acc, curr) {
                return acc + curr;
            });
            // we compare this score to the current lowest score we have
            // if this score is lower we update our match accordingly
            if (compScore < matchCompScore){
                matchCompScore = compScore;
                match = f;
            }
            console.log(scoreDiffs);
            console.log("compatability: ", compScore);
            console.log("current match: ", match);
            console.log("-----------------------");
        });
        // console.log(scoreDiffs);
        friends.push(req.body);
        res.send(match);
    });
    
};