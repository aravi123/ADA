var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');


var userData = require('../Database/user.js');

router.post('/signin', function(req, res) {
  //res.send('respond with a resource');
  userData.findOne({
  	email:req.body.email
  },function(err,sucess){
  	if (err) {
  		console.log("No email address found");
  		res.status(404).send("No email address found");
  	}
  	else{
  		if (req.body.password == sucess.password) {
  			res.status(200).send("Sucessfully logged in");
  		}
  		else{
  			res.status(400).send("Re-enter password");
  			console.log("Password no correct");
  		}
  	}
  });
});

module.exports = router;
