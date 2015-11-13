"use strict";
$(document).ready(init);

var message {}
var selection {}

function init () {
	console.log("init")
	$("#post").on("click", postMessage)

}

function postMessage(){

}


$.post("/board", message)
	.done(function(data){
		// console.log("posted", data)
		// var $newPost = newPost(message)
	})
	.fail(function(err){
		console.error(err);
	})