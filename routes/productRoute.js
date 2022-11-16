const express = require('express');  
const router = express.Router();  
const myskinre = require('../model/myskinre');  

router.get('/productListDone', function(req, res, next) {  
    myskinre.getAllOrderDone(function(err, rows) {  
            if (err) {  
                res.json(err);  
            } else {  
                res.json(rows);  
                console.log(rows)  
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