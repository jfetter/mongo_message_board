"use strict";
var express = require('express');
var router = express.Router();


var Board = require("../models/board");


router.post("/delete", function(req, res){ 
	console.log("I'm in delete")
	Board.findByIdAndRemove(req.body._id, function(err, message) {
    res.status(err ? 400 : 200).send(404 || board);
	});
})

module.exports = router;