const net = require('net');
const PORT = 8080;
const HOST = 'localhost';

const fs = require('fs');

const server = net.createServer((socket)=>{
  console.log("Client connected");

  socket.setEncoding('utf8');


  socket.on('data', (data)=>{
    fs.readFile(data, 'utf8', (err, d)=>{
      if (err) {
        console.log(`Error reading file: ${err}`);
        socket.write(`Error reading file: ${err}`);
      }
      socket.write(d);
      console.log(`File sent to client successfully`);
    });

  });
});

server.listen(PORT, HOST, ()=>{
  console.log(`Server listening on ${HOST}:${PORT}`);
});