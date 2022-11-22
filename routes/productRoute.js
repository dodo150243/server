const express = require('express');  
const router = express.Router();  
const myskinre = require('../model/myskinre');  
const orderController = require('../controllers/orderController')

router.route('/:id').patch(orderController.updateOrder)

router.get('/productListDone', function(req, res, next) {  
    
    myskinre.getAllOrderDone(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json({rows});  
                console.log(rows)  
            }  
        });  
          
});  

router.get('/productListNotDone', function(req, res, next) {  
    //  var io = req.app.get("socketio");
    // io.emit("message", "hi!");
    
    myskinre.getAllOrderNotDone(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json({rows});  
                console.log(rows)  
            }  
        });  
          
}); 

// router.put('/:id', function(req, res, next) { 
    
//     myskinre.updateTask(req.params.id, req.body, function(err, rows) {  
//         if (err) {  
//             res.json(err);  
//         } else {  
//             res.json({
//                 rows,
                
//             });
//         }  
//     });  
    
// });

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