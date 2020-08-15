var db = require('./db');

module.exports = {

    /*addemployee: function(user, callback){
		var sql = "INSERT INTO `employee`(`emp_id`, `name`, `phone`, `gender`, `designation`) VALUES (?,?,?,?,?)";"INSERT INTO `user`(`name`, `password`, `type` ) VALUES (?,?,'2')";
		db.execute(sql, [user.employeeid,user.username,user.employeephone,user.employeegender,user.employeedesignation,user.username,user.employeepassword], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
    }*/
    addemployee: function(user, callback){
		var sql = "INSERT INTO `employee`( `name`, `phone`, `gender`, `designation`) VALUES (?,?,?,?)";

		db.execute(sql, [user.username,user.employeephone,user.employeegender,user.employeedesignation], function(status){
            
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
        
        var sql2 = "INSERT INTO `user`(`username`, `password`, `type` ) VALUES (?,?,'2')";;

		db.execute(sql2, [user.username,user.employeepassword], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	getemp: function(user, callback){
		var sql = "select * from employee WHERE name=?";
		db.getResults(sql, user, function(result){

			if(result.length > 0 ){
				callback(result);
			}else{
				callback([]);
			}
		})
	},
	update: function(user, callback){
		var sql = "UPDATE `employee` SET `name`=?,`phone`=?,`gender`=?,`designation`=? WHERE `name`=?";

		db.execute(sql, [user.username,user.employeephone,user.employeegender,user.employeedesignation,user.name], function(status){
            
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
        
        var sql2 = "UPDATE `user` SET `username`=? WHERE `username`=?";;

		db.execute(sql2, [user.username,user.name], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
	delete: function(user, callback){
		
        
        var sql2 = "DELETE FROM `user` WHERE `username`=?";;

		db.execute(sql2, [user], function(status){
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
		var sql = "DELETE FROM `employee` WHERE 'name'=?";

		db.execute(sql, [user], function(status){
            
			if(status){
				callback(true);
			}else{
				callback(false);
			}
		});
	},
    
	}