"use strict";

var mongoose = require("mongoose");

var Board = {};

var boardSchema = mongoose.Schema({
	userName: String,
	time: Number,
	message: String
})


// Board.create = function(cb){
// 	var post = new Board({	
// })
// }


Board.find = function(cb){
	if (err) return console.err(err);
	cb(console.log("look what I found..."))
}


var Board = mongoose.model("Board", boardSchema);

module.exports = Board; 