const express = require('express');
const cors = require('cors');
const app = express();
const http = require('http');
const server = http.createServer(app);
//const { Server } = require("socket.io");
//const io = new Server(server);
const io = require("socket.io")(server);

app.use(cors());
app.options('*', cors());

io.on('connection', (socket) => {
    console.log('connection');
    socket.on('newbid', (msgInfo) => {
       // console.log(msgInfo);
    let obj = null;
    try {
        obj = JSON.parse(msgInfo);
    } catch (e) {
        obj = msgInfo;
    }


         console.log(obj);
        console.log("channel="+obj.channel);
         var channel = obj.channel;
         socket.broadcast.emit(channel.toString(), msgInfo);
        // console.log(channel);
        // socket.broadcast.emit(msgInfo.postId, msgInfo);
        // socket.to(msgInfo['reciver'].toString()).emit('sendChatToClient', ms>
        // socket.broadcast.to(msgInfo['reciver'].toString()).emit('sendChatToC>
    });

    socket.on('disconnect', (socket) => { 
        console.log('Disconnect');
        console.log(socket);
    });
});

server.listen(5000, () => {
    console.log('Server is running');
});

// const express = require('express');
// const cors = require('cors');
// const app = express();
// const http = require('http');
// const server = http.createServer(app);



// const io = require("socket.io")(server);


// //app.use(cors());
// //app.options('*', cors());


// io.on('connection', function(socket) {


//     socket.on('newbid', function(data) {
//         //   var channel = msgInfo['channel'];
//         //   socket.broadcast.emit('newbid', msgInfo);
//         console.log('Data from Php', data, JSON.parse(data));
//     });
// });

// server.listen(5000, () => {
//     console.log('Server is running');
// });