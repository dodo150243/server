const express = require('express');  
const router = express.Router();  
const myskinre = require('../model/myskinre');  
// const socketIO = require('socket.io')
// const socket = socketIO()
const io = require("socket.io")();

router.get('/productListDone', function(req, res, next) { 
    
    myskinre.getAllOrderDone(function(err, rows) {  
        
            if (err) {  
                res.json(err);  
            }
            else {  
                 res.json(rows);  
                // res.json(socket);
                // console.log(rows) 
                
            }  
        });  
});  



router.put('/:id', function(req, res, next) {  
    myskinre.updateTask(req.params.id, req.body, function(err, rows) {  
        if (err) {  
            res.json(err);  
        } else {  
            res.json(rows);
            console.log({rows})  
        }  
    });  
    
        socket.emit("hello",);
      
   
});  


router.get('/:id?', function(req, res, next) {  
   
        myskinre.getTaskById(req.params.id, function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
            }  
        });  
    } );

module.exports = router;  