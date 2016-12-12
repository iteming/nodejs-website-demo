var express = require('express');
var router = express.Router();
require('../core/CommonUtil');
require('../core/HttpWrapper');
require('../core/SqlClient');
require('../model/model');


router.get('/', function (req, res, next) {
    res.redirect('index');
});

router.get('/index', function (req, res, next) {
    var user = req.cookies.user;
    console.log('index start ↓');
    console.log(user);
    if(user){
        res.render('cms/index', {user: user});
    }else{
        res.redirect('login');
    }
});

router.get('/login', function (req, res, next) {
    res.render('cms/login',{username:''});
});

router.get('/logout', function (req, res, next) {
    console.log('logout start ↓');
    //清空user信息
    console.log(req.cookies);
    res.cookie('user', null, {maxAge: 0})
    res.redirect('login');
});


router.post('/login', function (req, res, next) {
    console.log(req.body.username);
    console.log(req.body.password);

    var sqlClient = new SqlClient();
    var user = new User();

    sqlClient.query(user, function (result) {
        if (result != null && result.length > 0) {
            user = result[0];
            console.log(user);
            if(user.password != req.body.password){
                res.render('cms/login', {status: 2,msg: '密码错误!', username:req.body.username});
            }
            // res.cookie('user', user, {maxAge: 24 * 60 * 60 * 1000});
            res.cookie('user', user, {maxAge: 60 * 1000});
            res.render('cms/index', {status: 1,msg: '登录成功!', user: user});
        }
        res.render('cms/login', {status: 3,msg: '帐号不存在!', username:req.body.username});
    }," where username='"+req.body.username+"' ");
});

module.exports = router;