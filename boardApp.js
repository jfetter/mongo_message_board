"use strict";

var PORT = process.env.PORT || 3000;

var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');

var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/boardapp");

var app = express();


app.set('view engine','jade');

// GENERAL MIDDLEWARE
app.use(morgan('dev'));
app.use(bodyParser.urlencoded( {extended: true} ));
app.use(bodyParser.json());
app.use(express.static('public'));

// ROUTES
//redirects to boards
app.use('/', require('./routes'));
//channels all user info and messages to the same place
app.use('/boards', require('./routes/boards'));

// 404 HANDLER
app.use(function(req, res){
  res.status(404).render('404')
})

app.listen(PORT, function(){
  console.log('Listening on port ', PORT);
});
