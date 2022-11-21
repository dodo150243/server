const db = require('../dbconnection'); //reference of dbconnection.js  
const myskinre = {  
    getAllOrderDone: function(callback) {  
        return db.query(`SELECT id_order, COUNT(id_task) AS items FROM control_doe WHERE id_task GROUP BY id_order HAVING COUNT(id_task) = COUNT(done_on) ORDER BY done_on DESC;`, callback);  
    },  
    getAllOrderNotDone: function(callback) {  
        return db.query(`SELECT id_order,COUNT(id_task) AS items,COUNT(done_on) AS done, COUNT(id_task)-COUNT(done_on) as deficit from control_doe WHERE id_task GROUP BY id_order HAVING COUNT(id_task)-COUNT(done_on) ORDER BY done_on DESC;`, callback);  
    },  
    // getTaskById: function(id, callback) {  
    //     return db.query("select id_task, done_on from control_doe where id_task=?", [id], callback);  
    // },  
    // addTask: function(Task, callback) {  
    //     return db.query("Insert into task values(?,?,?)", [Task.Id, Task.Title, Task.Status], callback);  
    // },  
    // deleteTask: function(id, callback) {  
    //     return db.query("delete from task where Id=?", [id], callback);  
    // },  
    // updateTask: function(id,data, callback) {  
    //     //  return db.query("update task set Title=?,Status=? where Id=?", [Task.Title, Task.Status, id], callback);
    //     // var records = [id,done_on];
    //     // var sql = "update control_doe set done_on=? where id_task=?";
    //     return db.query("update control_doe set done_on=? where id_task=?", [data.done_on, id], callback);  
       
    //     // return db.query(sql, [done_on, id], callback); 
    // } 

    updateTask: function(id,data,callback) { 
      
        return db.query("update control_doe set done_on=? where id_task=?", [data.done_on, id], callback,console.log(data));  
        
  
    } 
    
};  
module.exports = myskinre;  