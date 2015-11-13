//route

"use strict";
var express = require('express');
var router = express.Router();

var Board = require("../models/board");

router.get("/", function(req, res){
	Board.find(function(err, messages){
		if (err) return res.status(400).send(err);
		///DOUBLE CHECK THAT THE FILE IN VIEWS IS WHAT IS
		///BEING REFERENCED HERE
		res.render("./boards", {items: messages});
	})
})

// router.post("/", function(req, res))

// router.put

module.exports = router;