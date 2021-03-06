// dependencies
var express = require("express");
var path = require("path");

// set up express app
var app = express();
var PORT = process.env.PORT || 3000;

// set up express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// pointers to our routing files
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app); 

// starts server to begin listening
app.listen(PORT, function(){
    console.log("App listening on PORT "+PORT);
});