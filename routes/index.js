'use strict';


var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.redirect("/boards");
});

module.exports = router;