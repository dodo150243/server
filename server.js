
var express = require('express');  
const app = require('express')();
var path = require('path');  
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors'); 
const { Server } = require('socket.io')

const { createServer } = require('http') 
// const http = require('http');
const httpServer = createServer(app);
const io = new Server(httpServer, {
   cors: true,
   origins: ['http://locahost:4000']
 })
app.set("socketio", io);

app.use(cors());  
app.use(morgan('dev'));  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({  
    extended: false  
}));  
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());  
app.use(express.static(path.join(__dirname, 'public')));  



app.get('/', function(req, res, next) {
    res.sendfile(__dirname+'/index.html');
 });

 app.get('/productDone', function(req, res, next) {
    res.sendfile(__dirname+'/productDone.html');
 });

 app.get('/productNotDone', function(req, res, next) {
    res.sendfile(__dirname+'/productNotDone.html');
 });

app.use("/product", require('./routes/productRoute'))
app.use((err, req, res, next)=>{
   console.log(err.stack);
   console.log(err.name);
   console.log(err.code);

   res.status(500).json({
      message: "something went rely wrong"
   })
})

io.on('connection', (socket) => {
   console.log('New client connected')
   socket.emit('FromAPI', 'Hello socket.io')
   socket.on('disconnect', () => {
     console.log('Client disconnected')
   })
 })

httpServer.listen(4000, () => console.log('Server running on port ....'));

// const express =require('express') 
// const { createServer } =require('http') 
// const { Server } =require('socket.io') 
// const cors =require('cors') 

// const app = express()
// const httpServer = createServer(app)

// const io = new Server(httpServer, {
//    cors: true,
//    origins: ['http://locahost:4000']
//  })


// app.use(cors())

// app.use("/product", require('./routes/productRoute'))

// // app.use('/apiLink/process', processes)

// io.on('connection', (socket) => {
//   console.log('New client connected')
//   socket.emit('FromAPI', 'Hello socket.io')
//   socket.on('disconnect', () => {
//     console.log('Client disconnected')
//   })
// })


// httpServer.listen(4000, () => console.log(`Socket.io test running on port 4000`))