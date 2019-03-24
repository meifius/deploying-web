//Import packages
var express = require("express");
var app = express();

app.set("view engine","ejs");

//ROUTES
app.get("/", function(req,res){
    res.render("home");
});

app.get("/about", function(req,res){
    res.render("about");
});


//Listing
app.listen(process.env.PORT, process.env.IP, function(req,res){
    console.log("Running the server");
});