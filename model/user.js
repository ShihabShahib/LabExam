var db = require('./db');

module.exports = {
	
	login: function(user, callback){
		var sql = "select * from user where username=? and password=?";
		db.getResults(sql, [user.username,user.password], function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
    },
    get: function(user, callback){
		var sql = "select * from employee";
		db.getResults(sql, user, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	}
}