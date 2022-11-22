
var express = require('express');  
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

// app.get('/', function(req, res, next) {
//     res.sendfile(__dirname+'/index.html');
//  });

//  app.get('/productDone', function(req, res, next) {
//     res.sendfile(__dirname+'/productDone.html');
//  });

//  app.get('/productNotDone', function(req, res, next) {
//     res.sendfile(__dirname+'/productNotDone.html');
//  });

app.use("/product", require('./routes/productRoute'))
app.use((err, req, res, next)=>{
   console.log(err.stack);
   console.log(err.name);
   console.log(err.code);

   res.status(500).json({
      message: "something went rely wrong"
   })
})

server.listen(4000, () => console.log('Server running on port ....'));

