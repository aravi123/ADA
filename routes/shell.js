var mongoose = require('mongoose');
var express = require('express');

var PythonShell = require('python-shell');
var fs = require('fs');
var router = express.Router();


router.post('/scriptMachineLearning',function(req,res){

	console.log(req.body);
	console.log("obj");
		// fs.writeFile('./s4.json',JSON.stringify(req.body),function(err){
		// 	if (err) {
		// 		console.log("Error in saving file");
		// 	}
		// 	else{
		// 		console.log("File Was Saved");
		// 	}
		// });
	var options = {
		args:[req.body.lat,req.body.long]
	};
	//PythonShell.send(req.body);
	PythonShell.run('getlatlong.py',options,function(err,results){
		if (err) {
			console.log("error in running machine learning script");
			console.log(err);
			res.send({"value":"0"});	
		}
		else{
			console.log(results);
			//if (results) {}
		}
	})

});


module.exports = router;
