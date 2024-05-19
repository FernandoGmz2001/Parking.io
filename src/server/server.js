import express from 'express'
import { Server  }  from 'socket.io'
import { SerialPort, ReadlineParser } from 'serialport'
import  http  from 'http'
import cors from 'cors'

const app  = express()
app.use(cors())

const server = http.createServer(app)
const io = new Server(server,{
  cors: {
    origin: '*',
    methods: ['GET', 'POST']
  }
});

const path = 'COM5'
const baudRate = 9600
const serialPort = new SerialPort({ path, baudRate });
const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\r\n' }));

parser.on('data', (data) => {
    console.log(data);
    let receivedData = data
    let dataArray = receivedData.split(',')
    let delayVal = parseInt(dataArray[0])
    let distance = parseInt(dataArray[1])
    console.log("La distancia es : ", distance);
    console.log("El delay es de  : ", delayVal);
    // console.log('Datos recibidos:', data + 'cm');
    io.emit('data', delayVal);
    io.emit('distance', distance);
});

io.on('connection', (socket)=>{
    console.log("Un cliente se ha conectado a ", socket)
})

server.listen(3000,()=>{
    console.log(`Escuchando en el puerto 3000`)
})

export default app