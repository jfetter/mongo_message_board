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

//CODE PASTED FROM http://api.jquery.com/event.timestamp/
	function timeStamp (event) {
		var last, diff;
		$( "div" ).click(function( event ) {
  	if ( last ) {
    	diff = event.timeStamp - last;
    $( "div" ).append( "time since last event: " + diff + "<br>" );
  	} else {
    	$( "div" ).append( "Click again.<br>" );
 		 }
  	last = event.timeStamp;
});
	}