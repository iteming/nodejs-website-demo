var express = require('express');
var router = express.Router();
require('../core/HttpWrapper');
require('../core/SqlClient');
require('../model/model');

//GET
router.get('/message/', function (req, rep, next) {
    reqParam = HttpWrapper.wrapReqParams(req);
    var sqlClient = new SqlClient();
    var account = new Account();
    sqlClient.query(account, function (result) {
        //查询
        if (result != null && result.length > 0) {
            account = result[0];//获取唯一一个公众号信息
            rep.send(echostr);
            rep.send('error');
        }
    });
});
module.exports = router;