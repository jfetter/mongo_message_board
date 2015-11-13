"use strict";
$(document).ready(init);

var message = {}
var selection = {}

function init () {
	console.log("I'm in it!")

	$("#post").on("click", postMessage);
	$(".trash").on("click", deleteMessage);
}

function postMessage(event){
	var time =  Date.now()
		message = {"userName": $("#user").val() , "message":$("#message").val(), "timeStamp": time}
	console.log(message)
	$.post("/boards", message)
		.done(function(data){
		 console.log("posted", data)
		// var $newPost = newPost(message)
		})
		.fail(function(err){
			console.error(err);
	})
			updatePage();
}

  function deleteMessage (event){
   // var postIndex = thisUl.prevAll().length;
   // selection.postIndex = postIndex
   // thisUl.remove(); 
debugger;
   var stamp = $(this).closest("ul:nth-child(2)").children("li:nth-child(3)").text();
  
   console.log("stamp", stamp)
 		  $.post('/boards/delete', stamp )
  .done(function(data){
  	  console.log("post was removed" , data)
  })
  .fail(function(err){
    console.error(err);
  })
  	updatePage();
}

function updatePage(event){
	var time =  Date.now();
		message = {"userName": $("#user").val() , "message":$("#message").val(), "timeStamp": time}
	console.log(message)
	$.get("/boards", message)
		.done(function(data){
		 console.log("posted", data)
		// var $newPost = newPost(message)
		})
		.fail(function(err){
			console.error(err);
	})
}
