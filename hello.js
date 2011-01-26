var express = require('express');

var app = express.createServer();

app.get('/', function(req, res){
    res.send('Hello World! Welcome to Nodester! (via Express)');
});

app.listen(8142);
