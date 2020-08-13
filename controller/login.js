const express = require('express');
var USER = require.main.require('./model/user');
const { body, validationResult, Result } = require('express-validator');
var router = express.Router();

router.use(express.json());


router.get('/',function(req,res){
    res.render('login');
});


router.post('/', [
    // username must be an email
    body('username').isLength({ min: 8 }),
    // password must be at least 5 chars long
    body('password').isLength({ min: 5 })
  ],function(req, res){ 
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    var user = {
		username: req.body.username,
		password: req.body.password
	};

	USER.login(user, function(result){
		if(result!=""){
			req.session.username = user.username;
			res.redirect('/admin/admin');
		}else{
			res.send('invalid username/password');
		}
	});
});

module.exports =router;