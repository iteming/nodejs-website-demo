var express = require('express');
var router = express.Router();
require('../core/CommonUtil');
require('../core/HttpWrapper');
require('../core/SqlClient');
require('../model/model');

router.get('/', function (req, res, next) {
    res.render('cms/index');
});

router.get('/login', function (req, res, next) {
    res.render('cms/login',{username:''});
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
            res.render('cms/index', {status: 1,msg: '登录成功!', user: user});
        }
        res.render('cms/login', {status: 3,msg: '帐号不存在!', username:req.body.username});
    }," where username='"+req.body.username+"' ");
});

module.exports = router;