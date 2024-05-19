import { Server  }  from 'socket.io'
import { server } from './server.js'
// import { Server } from 'socket.io-client'
// import { SerialPort, ReadlineParser } from 'serialport'
// const SerialPort = require('serialport');
// const ReadlineParser = require('@serialport/parser-readline');

// const path = 'COM5'
// const baudRate = 9600
const io = new Server(server,{
  cors: {
    origin: '*',
  }
});

console.log(io)


// const port = new SerialPort({ path, baudRate });
// const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// let globalSocket
io.on('connection', (socket)=>{
  console.log("Un cliente se ha conectado")
  console.log(socket)
    // globalSocket = socket
})

// parser.on('data', (data) => {
//   console.log('Datos recibidos:', data + 'cm');
//   globalSocket.emit('data', data);
// });

// port.write('ROBOT PLEASE RESPOND\n', (err) => {
//   if (err) {
//     return console.log('Error al escribir en el puerto:', err.message);
//   }
//   console.log('Datos enviados al puerto');
// });


// import { SerialPort, ReadlineParser } from 'serialport'

// const path = 'COM5'
// const baudRate = 9600
// const port = new SerialPort({ path, baudRate })
// const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }));

// parser.on('data', (data) => {
//     console.log('Datos recibidos:', data + 'cm');
//   });
  
//   port.write('ROBOT PLEASE RESPOND\n', (err) => {
//     if (err) {
//       return console.log('Error al escribir en el puerto:', err.message);
//     }
//     console.log('Datos enviados al puerto');
//   });

// port.write('ROBOT PLEASE RESPOND\n')