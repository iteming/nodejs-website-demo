var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // 跳转到index页面,同时传递 option 为 {title: 'Express'}
    res.render('index', {title: 'Express', name: 'tj', email: 'tj@vision-media.ca' });
    // 直接向页面发送信息
    // res.send('respond with a resource');
});

module.exports = router;
