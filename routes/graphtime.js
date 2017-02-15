var mongoose = require('mongoose');
var express = require('express');
var router = express.Router();

router.get('/graphtime',function (req,res) {
	var data = [];
	for (var i = 0;i<6;i++) {
		data[i] = Math.random()*100;
	}
	console.log(Math.random()*100);
	res.send(data);
	console.log("Response Send");

});

module.exports = router;