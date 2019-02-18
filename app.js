var express = require("express");
var app = express();
var ejs = require("ejs");

var request = require('request');





app.use(express.static("public"));
app.set("view engine", "ejs");


app.get("/", function(req, res){
    request('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=ee8e26bbb5104a35bf5681767993c098', function (error, response, body) {
    if(!error && response.statusCode==200){
    var parsedData = JSON.parse(body);
    var articles = parsedData["articles"];
    res.render("index.ejs", {articles : articles});
  }
});
});

app.get("/news/:id", function(req, res){

});

app.listen(3000, function(){
    console.log("Server is running at port 3000");
});
