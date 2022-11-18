
var express = require('express');  
var Product = require('./routes/productRoute');  
const app = require('express')();
var path = require('path');  
var morgan = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors'); 

const http = require('http');
const server = http.createServer(app);

app.use(cors());  
app.use(morgan('dev'));  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({  
    extended: false  
}));  
app.use(cookieParser());  
app.use(express.static(path.join(__dirname, 'public')));  

const io = require('socket.io')(server);
app.set("socketio", io);

app.get('/', function(req, res, next) {
    res.sendfile(__dirname+'/index.html');
 });
 app.use('/product', Product);  

server.listen(4000, () => console.log('Server running on port ....'));



// const express = require('express'); // using express
// const socketIO = require('socket.io');
// const http = require('http')
// const port = process.env.PORT||4000 // setting the port
// let app = express();
// let server = http.createServer(app)
// let io = socketIO(server)
 
// server.listen(port);