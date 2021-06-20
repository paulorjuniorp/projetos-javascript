const express = require('express');
const nunjucks = require('nunjucks');
const videos = require('./data');

const app = express();

app.use(express.static("public"))

app.listen(3030, function(req, res){
    console.log("Roi, estou on ><");
});

app.set("view engine", "njk");

nunjucks.configure("views",{
    express: app
});

app.get('/', function(req,res){
    return res.render("index");
})

app.get('/videos', function(req, res){
    return res.render("videos", {items:videos});
});