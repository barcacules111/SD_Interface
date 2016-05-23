var express = require('express');
var app = express();
var path = require("path");

// app.use(express.static('./'));
app.use(express.static('assets'));
app.use(express.static('dirs'));

var dir = path.join(__dirname + '/');

app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

app.get('/', function(req, res) {
    res.sendFile(dir + 'index.html');
});

/* another route example
app.get('/users', function(req, res) {
    res.sendFile(dir + 'users.html');
});
*/

//WebSocket connection
WebSocket = require('ws');
ws = new WebSocket('ws://127.0.0.1:8080');

ws.on('open', function() {
    return console.log('Connected to main module');
});
