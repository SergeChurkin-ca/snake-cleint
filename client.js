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
            console.log('connected')
        });

        conn.on('connect', () => {
            conn.write("Name: SER");
        });

      
      return conn;
    } 


module.exports = {connect}


