let express = require('express');
let app = express();
let http = require('http');
let server = http.createServer(app);
let { Server } = require("socket.io");
let io = new Server(server);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('Пользователь подключен:');
    
    socket.on('hod',(x)=>{
        socket.broadcast.emit('hod', circle);
    });

    io.emit('game');
});

server.listen(3030,() => {
    console.log('listening on *:3030');
});

