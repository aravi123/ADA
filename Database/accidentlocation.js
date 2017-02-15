var mongoose = require('mongoose');

var locationSchema = new mongoose.Schema({
	id:{
		type:mongoose.Schema.ObjectId
	},
	lat:{
		type:Number
	},
	long:{
		type:Number
	}
});

var accidentLocation = mongoose.model('accidentLocation',locationSchema);
module.exports = accidentLocation;
module.exports.locationSchema = locationSchema;