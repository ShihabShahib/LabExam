var express = require('express');
var EMP = require.main.require('./model/user');
var router = express.Router();


router.get('/emplist', function(req, res){
var user={};
	if(req.session.username != null){
		EMP.get(user,function(result){
		res.render('employeelist', {
		
			employee: result 
            });
		})
	}else{
			res.redirect('admin/admin');
	}
});



module.exports = router;