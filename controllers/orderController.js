
const db = require('../dbconnection');
exports.updateOrder = async(req,res,next)=>{
    const io = req.app.get("socketio");
    const id = req.params.id;
    const done_on = req.body.done_on;

   
    await db.query(`update control_doe set done_on=${done_on} where id_task=${id}`)

    await db.query(`select * from control_doe WHERE id_task=${id};`,function(err,result,fields){
        if(err) throw err
        io.emit("UpdateOrder", result);
        
    })
   
   


   
   
}