var express = require('express');
var util = require('util');
var router = express.Router();
require('../core/CommonUtil');
require('../core/HttpWrapper');
require('../core/SqlClient');
require('../model/model');

/* GET home page. */
router.get('/', function (req, res, next) {
    // 跳转到index页面,同时传递 option 为 {title: 'Express'}
    res.render('web/index', {title: 'Express', user: {id: 12, name: 'tj'}, email: 'tj@vision-media.ca'});
    // 直接向页面发送信息d with a
    // res.send('responresource');
});


// 获取网站信息
router.get('/website', function (req, res, next) {
    var website = req.session.website;
    if (website) {
        res.json({status: 1, msg: '', data: website});
        return;
    }

    var sqlClient = new SqlClient();
    website = new Website();
    sqlClient.query(website, function (result) {
        if (result != null && result.length > 0) {
            website = result[0];
            req.session.website = website;
            res.json({status: 1, msg: 'welcome!', data: website});
            return;
        }
        res.json({status: 2, msg: 'not found web information!'});
    });
});

router.get('/company', function (req, res, next) {
    res.render('web/company', {});
});

router.get('/contact', function (req, res, next) {
    res.render('web/contact', {});
});

router.get('/product/list', function (req, res, next) {
    res.render('web/product', {});
});

router.get('/honor/list', function (req, res, next) {
    res.render('web/honor', {});
});

router.get('/photo/list', function (req, res, next) {
    res.render('web/photo', {});
});

router.get('/news/list', function (req, res, next) {
    res.render('web/news', {});
});

module.exports = router;
