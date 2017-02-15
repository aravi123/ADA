var mongoose = require('mongoose');
var getDbConnection =  function () {
	var db = mongoose.connect('mongodb://localhost:27017/hackathon');
	return checkMongooseConnection(db);
}
function checkMongooseConnection(db) {
	mongoose.connection.on('open',function(ref){
		console.log("Connected to Mongodb");
		return db;
	});
	mongoose.connection.on('error',function(err){
		console.log("Cannot connect to mongodb");
		console.log(err);
	});
}
module.exports.getDbConnection = getDbConnection;