const { connect } = require('./client');
const {setUpInput} = require('./input');
console.log('Connecting ...');


// connect();
setUpInput(connect());



/*
THIS IS THE SERVER PART PATTERN
  const net = require('net');

const server = net.createServer();

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
*/