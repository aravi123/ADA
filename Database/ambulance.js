var mongoose = require('mongoose');

var ambulancSchema = new mongoose.Schema({

	id:{
		type:mongoose.Schema.ObjectId
	},
	name:{
		type:String,
		default:""
	},
	phoneno:{
		type:Number,
		default:""
	}

});

var ambulanceModel = mongoose.model("Ambulance",ambulancSchema);
module.exports = ambulanceModel;
module.exports.ambulancSchema = ambulancSchema;