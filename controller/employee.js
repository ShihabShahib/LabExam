var express = require('express');
var EMP = require.main.require('./model/user');
var router = express.Router();
var user={};
router.get('/employee',function(req,res){
    res.render('employee');
});
router.get('/emplist', function(req, res){

	if(req.session.username != null){
		EMP.get(user,function(result){
			console.log("Radio gaga")
		res.render('employeelist', {
			employee: result 
			});
			console.log('radio what new');
		})
	}else{
			res.redirect('admin/admin');
	}
});



module.exports = router;