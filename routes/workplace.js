var mongoose =  require('mongoose');
var express = require('express');

var router = express.Router();
var workplace = require('../Database/workplace.js');

router.post('/workplace',function (req,res) {

	console.log(req.body);
	var newWorkPlace = new workplace(req.body);
	newWorkPlace.save(function(err,docs){
		if (err) {
			console.log("error in saving Database");
		}
		else{
			console.log("Sucessfuly created Workplace");
			res.send("Sucessfuly created Workplace");
		}
	});

});

module.exports = router;
