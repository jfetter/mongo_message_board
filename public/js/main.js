"use strict";
$(document).ready(init);

var message = {}
var selection = {}

function init () {
	console.log("I'm in it!")

	$("#post").on("click", postMessage);
	$(".trash").on("click", deleteMessage);
	//$(".edit").on("click", editMessage);
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
}

  function deleteMessage (event){
   var id = $(this).data("id")
   console.log(id)
   debugger;
   var $stamp = $(this).parent().children("li:nth-child(3)").text()
   var id = {"_id": id}
   console.log("id", id)
 		  $.post('/delete', id )
  .done(function(data){
  	  console.log("post was removed" , data)
  })
  .fail(function(err){
    console.error(err);
  })
}

//   function editMessage (event){
//    var id = $(this).data("id")
//    console.log(id)
//    debugger;
//    var $stamp = $(this).parent().children("li:nth-child(3)").text()
//    var id = {"_id": id}
//    console.log("id", id)
//  		  $.post('/boards/delete', id )
//   .done(function(data){
//   	  console.log("post was removed" , data)
//   })
//   .fail(function(err){
//     console.error(err);
//   })
// }