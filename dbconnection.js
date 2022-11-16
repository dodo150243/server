// Importing module

const mysql = require('mysql');  
const connection = mysql.createPool({  
    host: 'localhost',  
    user: 'root',  
    password: '',  
    database: 'myskinre'  
});  
module.exports = connection;  