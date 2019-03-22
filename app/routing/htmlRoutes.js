module.exports = function(app){

var path = require("path");

// basic route that sends uuser first to the home page
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// GET rout to /survey that displays survey page
app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// okay so the problem here is the path needs to be absolute or be given a ROOT (which yyou can look up) its not liking __dirname joining because you need to pop out of this folder and apparently if you do .. you get an errror so

};