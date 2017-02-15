var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

var db = require('../Database/ambulance.js');

router.get('/ambulance',function(req,res){

	db.find({},function(err,docs){
		
	});

});

module.exports = router;