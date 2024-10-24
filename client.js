const net = require('net');

const PORT = 8080;
const HOST = 'localhost';

const client = new net.Socket();

const filepath = "./test.txt";

client.setEncoding('utf8');

client.connect(PORT, HOST, ()=>{
  console.log(`Connected to server at ${HOST}:${PORT}`);

  client.write(filepath);
});

client.on('data',(data)=>{
  console.log(data);
});

