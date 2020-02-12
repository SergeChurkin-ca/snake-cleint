const { connect } = require('./client');
console.log('Connecting ...');
connect();



/*
THIS IS THE SERVER PART
  const net = require('net');

const server = net.createServer();

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
*/