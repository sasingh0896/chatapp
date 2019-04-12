var express = require('express');
var socket = require('socket.io');
var app = express();


app.use(express.static('public'));
var io = socket(server);
io.on('connection', (socket) => {
    socket.on('chat', function(data){
        io.sockets.emit('chat', data);
        //sockets.broadcast.emit('chat',data)
    });
    socket.on('typing', function(data){
        socket.broadcast.emit('typing', data);
    });

});
var server = app.listen(4000, function(){
    console.log('listening for requests on port 4000');
});