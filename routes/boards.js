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



// router.post("/edit", function(req, res){
// 	var post = req.params._id
// 	Board.findById(post, function(err, message){
// 		return res.render("/edit", post),
// 	})
// 	console.log("finishing edit")
// })

// router.put("/edit", function(req, res){ 
// 	console.log("I'm in put") 
// 	Board.findOne({_id: req.body.id}, function(err, user){
//     res.status(err ? 400 : 200).send(err || "message posted")
//     return res.render('/edit', {userName: userName, mesage: message, timeStamp: timeStamp});
// 	})
// })

module.exports = router;