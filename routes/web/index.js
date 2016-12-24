var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    // 跳转到index页面,同时传递 option 为 {title: 'Express'}
    res.render('web/index', {title: 'Express', user: {id: 12, name: 'tj'}, email: 'tj@vision-media.ca'});
    // 直接向页面发送信息d with a
    // res.send('responresource');
});

module.exports = router;
