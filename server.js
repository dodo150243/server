var express = require('express')
var cors = require('cors')
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'myskinre'
});
 
connection.connect();

var app = express()
app.use(cors())
app.use(express.json())

app.get('/productListDone', function(req, res, next){
    connection.query(`SELECT id_order , COUNT(done_on) AS items FROM control_doe WHERE id_task & done_on IS NOT NULL GROUP BY id_order;`,function (error,results, fields){
        if(error) throw error;
        res.json(results)
    })
})

app.listen(5000, function () {
  console.log('CORS-enabled web server listening on port 5000')
})