 
var Product = require('./routes/productRoute');  
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

const cors = require('cors');
const { response } = require('express');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())


app.use('/product', Product);  
const socketIO = require('socket.io')

const server = app.listen(4000, ()=>{
    console.log('server is running...')
})
const io = socketIO(server)




