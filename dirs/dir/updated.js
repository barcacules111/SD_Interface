var express = require('express');
var app = express();
var path = require("path");

app.use(express.static('assets'));

var dir = path.join(__dirname + '/');

app.listen(3000, function() {
    console.log('Example app listening on port 3000!');
});

app.get('/', function(req, res) {
    res.sendFile(dir + 'index.html');
});

//WebSocket connection
WebSocket = require('ws');
ws = new WebSocket('ws://127.0.0.1:8080');

ws.on('open', function() {
    // ws.send('something');
    return console.log('connected to main module');
});
