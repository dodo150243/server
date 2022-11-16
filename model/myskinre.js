const db = require('../dbconnection'); //reference of dbconnection.js  
const myskinre = {  
    getAllOrderDone: function(callback) {  
        return db.query(`SELECT id_order , COUNT(done_on) AS items FROM control_doe WHERE id_task & done_on IS NOT NULL GROUP BY id_order;`, callback);  
    },  
    getTaskById: function(id, callback) {  
        return db.query("select id_task, done_on from control_doe where id_task=?", [id], callback);  
    },  
    // addTask: function(Task, callback) {  
    //     return db.query("Insert into task values(?,?,?)", [Task.Id, Task.Title, Task.Status], callback);  
    // },  
    // deleteTask: function(id, callback) {  
    //     return db.query("delete from task where Id=?", [id], callback);  
    // },  
    updateTask: function(id, Task, callback) {  
        //  return db.query("update task set Title=?,Status=? where Id=?", [Task.Title, Task.Status, id], callback);
         return db.query("update control_doe set done_on=? where id_task=?", [Task.done_on, id], callback);  
       
    } 
};  
module.exports = myskinre;  