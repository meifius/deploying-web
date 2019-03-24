//Import packages
var express = require("express");
var app = express();

//ROUTES
app.get("/", function(req,res){
    res.send("Hiiiiiiiiiiiii !!!!");
});

//Listing
app.listen(process.env.PORT, process.env.IP, function(req,res){
    console.log("Running the server");
});