const express = require("express");
const router = express.Router();
const myskinre = require("../model/myskinre");
const orderController = require("../controllers/orderController");
const db = require("../dbconnection");
// router.route('/:id').put(orderController.updateOrder)

router.get("/productListDone", function (req, res, next) {
  myskinre.getAllOrderDone(function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.get("/productListNotDone", function (req, res, next) {
  myskinre.getAllOrderNotDone(function (err, result) {
    if (err) {
      res.json(err);
    } else {
      res.json(result);
    }
  });
});

router.put("/:id", function (req, res, next) {
  var io = req.app.get("socketio");
  myskinre.updateTask(req.params.id, req.body, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      db.query(
        `SELECT * FROM control_doe WHERE id_task=${req.params.id};`,
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            io.emit("UpdateOrder", result);
            res.json(result);
          }
        }
      );
    }
  });
});

router.get("/:id?", function (req, res, next) {
  myskinre.getTaskById(req.params.id, function (err, rows) {
    if (err) {
      res.json(err);
    } else {
      res.json(rows);
    }
  });
});

module.exports = router;
