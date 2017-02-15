var express = require('express');
var router = express.Router();

var userModel = require('../Database/user.js');

router.post('/signup',function (req,res) {
	var newUser = new userModel(req.body);
	console.log(newUser);
	newUser.save(function(err,docs){
		if (err) {
			console.log("error in creating user");
			res.status(400).send("error in creating user");
		}
		else{
			console.log("sucessfully created user");
			res.status(200).send("sucessfully created user");
		}
	});
});


module.exports = router;
