"use strict";

var mongoose = require("mongoose");




var Board = mongoose.model("Board", boardSchema);

module.exports = Board; 