var express = require('express');
var util = require('util');
var moment = require('moment');
var router = express.Router();
require('../core/CommonUtil');
require('../core/HttpWrapper');
require('../core/SqlClient');
require('../model/model');


router.get('/', function (req, res, next) {
    console.log(process.execPath);
    console.log(__dirname);
    console.log(process.cwd());

    res.redirect('index');
});

router.get('/index', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;

    if (website) {
        if (user) {
            res.render('cms/index', {user: user, website: website});
        } else {
            res.redirect('login');
        }
    } else {
        var sqlClient = new SqlClient();
        website = new Website();
        sqlClient.query(website, function (result) {
            if (result != null && result.length > 0) {
                website = result[0];
                res.cookie('website', website, {maxAge: 60 * 60 * 1000}); //24 * 60 * 60 * 1000
                console.log(website);
                if (user) {
                    res.render('cms/index', {user: user, website: website});
                } else {
                    res.redirect('login');
                }
                return;
            }
            res.redirect('logout');
        });
    }
});

router.get('/login', function (req, res, next) {
    res.render('cms/login', {username: ''});
});

router.get('/logout', function (req, res, next) {
    //清空user信息
    res.cookie('user', null, {maxAge: 0});
    res.cookie('website', null, {maxAge: 0});
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
            if (user.password != req.body.password) {
                res.render('cms/login', {status: 2, msg: '密码错误!', username: req.body.username});
                return;
            }
            if (user.lastlogintime) user.lastlogintime = moment(user.lastlogintime).format("YYYY年MM月DD日 HH:mm:ss");
            res.cookie('user', user, {maxAge: 60 * 60 * 1000}); //24 * 60 * 60 * 1000
            res.redirect('index');
            return;
        }
        res.render('cms/login', {status: 3, msg: '帐号不存在!', username: req.body.username});
    }, util.format(" where username='%s'", req.body.username));
});


// 用户中心
router.get('/user/center', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;
    if (!user) {
        res.redirect('../login');
        return;
    }
    res.render('cms/user/center', {user: user, website: website});
});
// 设置密码
router.get('/user/forget', function (req, res, next) {
    // var user = req.cookies.user;
    // if(!user) { res.redirect('../login'); return; }
    res.render('cms/user/forget');
});

// 企业基本信息
router.get('/company', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;
    if (!user) {
        res.redirect('login');
        return;
    }
    res.render('cms/company', {user: user, website: website});
});
// 企业联系方式
router.get('/contact', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;
    if (!user) {
        res.redirect('login');
        return;
    }
    res.render('cms/contact', {user: user, website: website});
});
// 通知公告
router.get('/notice', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;
    if (!user) {
        res.redirect('login');
        return;
    }
    res.render('cms/notice', {user: user, website: website});
});
// 新闻中心
router.get('/news', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;
    if (!user) {
        res.redirect('login');
        return;
    }
    res.render('cms/news', {user: user, website: website});
});
// 产品管理
router.get('/product', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;
    if (!user) {
        res.redirect('login');
        return;
    }
    res.render('cms/product', {user: user, website: website});
});
// 分类管理
router.get('/category', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;
    if (!user) {
        res.redirect('login');
        return;
    }
    res.render('cms/category', {user: user, website: website});
});
// 荣誉证书
router.get('/honor', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;
    if (!user) {
        res.redirect('login');
        return;
    }
    res.render('cms/honor', {user: user, website: website});
});
// 企业相册
router.get('/photo', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;
    if (!user) {
        res.redirect('login');
        return;
    }
    res.render('cms/photo', {user: user, website: website});
});
// 评论留言
router.get('/comment', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;
    if (!user) {
        res.redirect('login');
        return;
    }
    res.render('cms/comment', {user: user, website: website});
});
// 网站信息
router.get('/website', function (req, res, next) {
    var user = req.cookies.user;
    var website = req.cookies.website;
    if (!user) {
        res.redirect('login');
        return;
    }
    res.render('cms/website', {user: user, website: website});
});


module.exports = router;