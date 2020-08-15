var express = require('express');
const { body, validationResult } = require('express-validator');
var employeelist = require.main.require('./model/employee');
var router = express.Router();



router.get('/admin',function(req,res){
    res.render('admin');
});

router.get('/addemployee',function(req,res){
    res.render('addemployee');
});

router.post('/addemployee',[
	// username can not be empty
	body('username').notEmpty().isLength({ min: 8 }),
	// password should be at least 8 chars long
	body('employeepassword').notEmpty().isLength({ min: 8 }).matches(
		/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z\d@$.!%*#?&]/,
	  ), 
	body('employeephone').notEmpty().isDecimal().isLength({ min: 11 }).isLength({ max: 11 }),  
	body('employeegender').notEmpty(),  
	body('employeedesignation').notEmpty() 
  ], function(req, res){
	const errors = validationResult(req);
	if (!errors.isEmpty()) {
	  return res.status(400).json({ errors: errors.array() });
	}
    var user = {
		username: req.body.username,
		employeepassword: req.body.employeepassword,
		employeephone: req.body.employeephone,
		employeegender: req.body.employeegender,
		employeedesignation: req.body.employeedesignation,
    };
        employeelist.addemployee(user, function(status){

            if(status){
                res.render('admin');
            }else{
                res.send('not working');
            }
        });
});

module.exports = router;