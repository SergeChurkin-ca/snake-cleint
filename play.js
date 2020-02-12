const { connect } = require('./client');
console.log('Connecting ...');

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (handleUserInput));
  return stdin;

}

const handleUserInput = function(key) {
  if (key === ('\u0003')) {
    process.exit(console.log('Snake game is over'));
  }
}

setupInput();

connect();



/*
THIS IS THE SERVER PART PATTERN
  const net = require('net');

const server = net.createServer();

server.listen(3000, () => {
  console.log('Server listening on port 3000!');
});
*/