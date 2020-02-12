// const play = require('./play');

let connection;

const setUpInput = function(conn) {
    connection = conn;
    const stdin = process.stdin;
    stdin.setRawMode(true);
    stdin.setEncoding('utf8');
    stdin.resume();
    stdin.on('data', handleUserInput);
    return stdin;
  };

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit(console.log('Snake game is over'));
    }
    if (key === "w") {
        connection.write("Move: up");
    } if (key === "s") {
        connection.write("Move: down");
    } if (key === "a") {
        connection.write("Move: left");
    }  if (key === "d") {
        connection.write("Move: right");
    }
  };
  
 
  module.exports = {setUpInput};


