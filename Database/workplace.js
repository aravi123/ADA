var mongoose = require('mongoose');

var workplaceSchema =  new mongoose.Schema({
	id:{
		type:mongoose.Schema.ObjectId
	},
	username:{
		type:String,
		default:""
	},
	workplacename:{
		type:String,
		default:""
	},
	lat:{
		type:String,
		default:""
	},
	long:{
		type:String,
		default:""
	},
	phoneno:{
		type:Number,
		default:""
	}
});

var workplaces = mongoose.model('workplace',workplaceSchema);
module.exports = workplaces;
module.exports.workplaceSchema = workplaceSchema;