const net = require('net')
const connect = function() {
    const conn = net.createConnection({ 
        host: '172.46.0.236',
        port: 50541
      });
      conn.setEncoding('utf8'); // interpret data as text
      conn.on('data', (data) => {
        console.log('Server says: ', data);
        return conn
        });
    
        conn.on('connect', () => {
            console.log('Hello, playa! Now you are connected to our phantastik server')
        });

        conn.on('connect', () => { setTimeout(() => 
            conn.write("Name: SER"), 5000);
        });

        // conn.on('connect', () => {  setTimeout(() =>
        //     conn.write("Move: up"), 7000);
        // });

        // conn.on('connect', () => {  setTimeout(() =>
        //     conn.write("Move: up"), 8000);
        // });

        // conn.on('connect', () => {  setTimeout(() =>
        //     conn.write("Move: right"), 9000);
        // });

      return conn;
    } 


module.exports = {connect}


