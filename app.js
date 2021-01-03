
const express = require('express');


const app = express();



const server = app.listen(3004, function() {
    console.log('server running on port 3004');
});


const io = require('socket.io')(server);


io.on('connection', function(socket) {
    console.log(socket.id)
    socket.on('SEND_MESSAGE', function(data) {
        io.emit('MESSAGE', data)
    });
});