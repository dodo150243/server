
// const app = require('express')();
// const http = require('http').Server(app);
// const io = require('socket.io')(http);



// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'myskinre'
// });
 
// connection.connect();


// app.get('/', function(req, res, next) {
//    res.sendfile('index.html');
// });

// app.get('/productListDone', function(req, res, next){
//     connection.query(`SELECT id_order , COUNT(done_on) AS items FROM control_doe WHERE id_task & done_on IS NOT NULL GROUP BY id_order;`,function (error,results, fields){
//         if(error) throw error;
//         res.json(results)
//     })
// })

// //Whenever someone connects this gets executed
// io.on('connection', function(socket) {
//    console.log('A user connected');
   
//    socket.on('CH01', function (from, msg) {
//     console.log('MSG', from, ' saying ', msg);
//   });

//    //Whenever someone disconnects this piece of code executed
//   //  socket.on('disconnect', function () {
//   //     console.log('A user disconnected');
//   //  });
// });


// http.listen(3000, function() {
//    console.log('listening ...');
// });
var express = require('express');  
var Product = require('./routes/productRoute');  
const app = require('express')();
var path = require('path');  
var morgan = require('morgan');
// var session = require('express-session');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');  
const http = require('http');
const server = http.createServer(app);

// view engine setup  
app.set('views', path.join(__dirname, 'views'));  
app.set('view engine', 'jade');  
// uncomment after placing your favicon in /public  
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));  
app.use(cors());  
app.use(morgan('dev'));  
app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({  
    extended: false  
}));  
app.use(cookieParser());  
app.use(express.static(path.join(__dirname, 'public')));  


const io = require('socket.io')(server);

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   user     : 'root',
//   password : '',
//   database : 'myskinre'
// });
 
// connection.connect();

// app.get('/productListDone', function(req, res, next){
//     connection.query(`SELECT id_order , COUNT(done_on) AS items FROM control_doe WHERE id_task & done_on IS NOT NULL GROUP BY id_order;`,function (error,results, fields){
//         if(error) throw error;
//         res.json(results)
//     })
// })

app.use('/product', Product);  
app.use(function(req, res, next) {  
   var err = new Error('Not Found');  
   err.status = 404;  
   next(err);  
});  


// io.on('connection', (socket) => {
//   console.log('New WS connection....');

//      socket.on('CH01', function (from, msg) {
//     console.log('MSG', from, ' saying ', msg);
//   });
// });

server.listen(4000, () => console.log('Server running on port ....'));

// module.exports = connection; 