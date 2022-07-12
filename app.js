const express = require("express");
const mongoose = require("mongoose");
const ejs =  require("ejs");

const app = express();
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));


mongoose.connect("mongodb+srv://Admin-janith:pJwACPwWsYaNORYp@cluster0.cl5pp.mongodb.net/itemDB");


app.get("/", function(req, res){
    res.render("home")
});

app.get("/about", function(req, res){
    res.render("about")
});

app.get("/contact", function(req, res){
    res.render("contact")
});

app.get("/services", function(req, res){
 res.render("service")
});

app.get("/:cname",function(req, res){
    res.render("items", ({title:req.params.cname}))
});

app.listen(3000, function(){
    console.log("sever successfully running on port 3000")
});