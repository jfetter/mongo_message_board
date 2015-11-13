//route

"use strict";
var express = require('express');
var router = express.Router();


var Board = require("../models/board");

router.get("/", function(req, res){
	Board.find( {}, function(err, messages){
		if (err) return res.status(400).send(err);
		console.log(messages);
		res.render("./boards", {items: messages});
	})
})

 router.post("/", function(req, res){
 	var message = new Board(req.body)
 	console.log("message", message)
 	message.save(function(err, message){
 		res.status(err ? 400 : 200).send(err || "message posted");
 	})
 })

router.delete("/delete", function(req, res){ 
	console.log("I'm in delete")
	Board.remove({ timeStamp: "stamp"}, function(err, message) {
    res.status(err ? 400 : 200).send(err || "message posted");
	});
})

// router.put("/", function(req, res){ 
// 	console.log("I'm in delete")
// 	Board.remove({ _id: req.body.id }, function(err, message) {
//     res.status(err ? 400 : 200).send(err || "message posted");
// 	});
// })

module.exports = router;