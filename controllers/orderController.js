
const db = require('../dbconnection');
var Q = require('q');
exports.updateOrder = async(req,res,next)=>{
    const io = req.app.get("socketio");
    // const id = req.params.id;
    // const done_on = req.body.done_on;
    // const doQuery1 = () =>{
    //     var defered = Q.defer();
   const id = req.params.id;
       
           await db.query(`update control_doe set done_on=? where id_task=?`,
           [req.body.done_on, id],(err,results,fields)=>{
                if(err) {
                    res.json(
                        err
                    )
                }else{
                   res.end("ok")
                        // console.log(result)
 
                //    io.emit("UpdateOrder", (result)=>{
                //     db.query(`select * from control_doe WHERE id_task=${req.params.id};`,(result)=>{
                //         console.log(result)
                //     })
                //    });
                }
                
            })
            await db.query(`select * from control_doe WHERE id_task=${id};`,(result)=>{
                console.log(id)
               console.log(result)
            })
            // db.query(`select * from control_doe WHERE id_task=${req.params.id};`)
            // io.emit('UpdateOrder', result)

          
    // }

    // const doQuery2 = () =>{
    //     var defered = Q.defer();
    //         db.query(`select * from control_doe WHERE id_task=${req.params.id};`,defered.makeNodeResolver())
    //         return defered.promise;
    // }
    
    // Q.all([doQuery1(),doQuery2()]).then(function(results){
        
    //     // Hint : your third query would go here
    //     // res.json(results.solution)
    //     res.send("ok")
    // });
   
//    Q.all([doQuery1(),doQuery2()]).then(function(results){
//     // res.send(JSON.stringify(results[0][0][0].solution+results[1][0][0].solution));
//     // Hint : your third query would go here
//     res.json(results)
   
// });



    // await db.query(`update control_doe set done_on=${done_on} where id_task=${id}`)
    // await db.query(`select * from control_doe WHERE id_task=${id};`,function(err,result,fields){
    //     if(err) throw err
    //     // io.emit("UpdateOrder", result);
        
    // })
   
   
}