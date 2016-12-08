/**
 * Created by Administrator on 2016/12/8.
 */
var express = require('express');
var router = express.Router();
require('../core/CommonUtil');
require('../core/HttpWrapper');
require('../core/SqlClient');
require('../model/model');

//url token；目前只支持一个公众号；所以数据库中必须唯一
router.get('/urltoken', function(req, res, next) {
    var sqlClient = new SqlClient();
    var account = new Account();
    sqlClient.query(account,function(result){//查询
        if(result != null && result.length > 0){
            account = result[0];//获取唯一一个公众号信息
        }
        res.render('wxcms/urltoken', { cur_nav: 'urltoken',account:account});
    });
});

module.exports = router;