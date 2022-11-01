// we are installing nodejs http server
const server = require('http').createServer();
const io = require('socket.io')(server);

// this works when connected to the socket
io.on('connection', function(socket){
    
    console.log('connecting..');

    // we are listening to the new-post event, we will send data from the backend here
    socket.on('new-post', function(data){
        
        // If there is data, we send it to the client.
        io.emit('posts', data);
        
    });

    // This works when the socket connection ends
    socket.on('disconnect', function(){
        console.log('someone came and went');
    });
    
});

// we listen on port 5000
server.listen(5000);
