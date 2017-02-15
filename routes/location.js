var express = require('express');
var router = express.Router();

var db = require('../Database/accidentlocation.js');

router.get('/location',function (req,res) {
	db.find(function(err,docs){
		//res.send(docs);
		console.log(docs);
		res.send(docs);

	});
});

module.exports = router;