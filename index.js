var express = require('express');
var socket = require('socket.io');
var app = express();

var server = app.listen(4000, function () {
    console.log('listening for requests on port 4000');
});

app.use(express.static('public'));
var io = socket(server);
io.on('connection', (socket) => {
    console.log(socket.id)
    socket.on('chat', function (data) {
        const nsp = io.of('/my-namespace');
        nsp.on('connection', function (socket) {
            console.log('someone connected');
        });
        nsp.emit('hi', 'everyone!');

        io.sockets.emit('chat', data);
    });
    socket.on('typing', function (data) {
        socket.broadcast.emit('typing', data);
    });

});
