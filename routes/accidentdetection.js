var express =require('express');
var router = express.Router();

var mongoose = require('mongoose');

var db = require('../Database/accidentlocation.js');

router.post('/accident',function(req,res){

	console.log(req.body);
	var location = new db(req.body);
	location.save(function(err,docs){
		if (err) {
			console.log("error");
		}
		else{
			//res.send(200).send("Accident location saved");
			console.log("sucessfullly Saved");
		}
	});

});

module.exports =router;