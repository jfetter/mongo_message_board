"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var boardSchema = new Schema({
	userName: String, //{type: String, required: true, unique: true},
	timeStamp: Date,
	message: String
})

var Board = mongoose.model("Board", boardSchema);

module.exports = Board; 