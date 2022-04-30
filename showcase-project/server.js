const { response } = require('express');
const express = require('express');
const routes = require('./routes');
const nunjucks = require('nunjucks');


const server = express();

server.use(express.static("public"));
server.use(routes);

server.set("view engine", "njk")


nunjucks.configure("views",{
    express:server
})

server.listen(3000, function(){
    console.log("O pai tá on!")
})
