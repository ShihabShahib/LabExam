var express = require('express');
var router = express.Router();


router.get('/emplist', function(req, res){

	if(req.session.user != null){
		Emp.get(user,function(result){
		res.render('employee', {
		
			upload: result 
            });
		})
	}else{
			res.redirect('admin/admin');
	}
});

module.exports = router;