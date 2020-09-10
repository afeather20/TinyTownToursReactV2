var express = require("express");
var router = express.Router();
var path = require('path');
router.get("/", function(req, res, next) {
    res.send('We are working well');
  
   
});
router.get("/newData", function(req, res, next) {
  console.log("LASKDNF");
  res.send('We are working out');

 
});

module.exports = router;
