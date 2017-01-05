var express = require('express');
var util = require('util');
var router = express.Router();
require('../core/CommonUtil');
require('../core/HttpWrapper');
require('../core/SqlClient');
require('../model/model');

/* GET home page. */
router.get('/', function (req, res, next) {
    var website = req.session.website;
    if (website) {
        res.render('web/index', {status: 1, msg: '', website: website});
        return;
    }

    var sqlClient = new SqlClient();
    website = new Website();
    sqlClient.query(website, function (result) {
        if (result != null && result.length > 0) {
            website = result[0];
            req.session.website = website;
            console.log(website);
            res.render('web/index', {status: 1, msg: 'welcome!', website: website});
            return;
        }
        res.render('web/index', {status: 2, msg: 'not found web information!', website: null});
    });
});
// 增加网站访问量
router.get('/website/views', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    var sqlClient = new SqlClient();
    var entity = new Website();
    entity.id = website.id;
    entity.views = website.views+1;
    sqlClient.update(entity, function (result) {
        if (result != null && result > 0) {
            res.json({status: 1, msg: 'success!'});
            website.views = website.views+1;
            return;
        }
        res.json({status: 2, msg: 'add views failed!'});
    });
});

router.get('/company', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    res.render('web/company', {website: website});
});
router.get('/contact', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    res.render('web/contact', {website: website});
});


router.get('/product/list/:categroyid', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    console.log(req.params.categroyid);
    res.render('web/product', {website: website});
});
router.get('/product/:id', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    // console.log(req.params.id);
    res.render('web/product_details', {website: website});
});


router.get('/honor/list', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    res.render('web/honor', {website: website});
});
router.get('/honor/:id', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    // console.log(req.params.id);
    res.render('web/honor_details', {website: website});
});


router.get('/photo/list', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    res.render('web/photo', {website: website});
});
router.get('/photo/:id', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    // console.log(req.params.id);
    res.render('web/photo_details', {website: website});
});


router.get('/news/list', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    res.render('web/news', {website: website});
});
router.get('/news/:id', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    // console.log(req.params.id);
    res.render('web/news_details', {website: website});
});

// sider - notice
router.get('/sider_notice', function (req, res, next) {
    var notice = req.session.notice;
    if (notice) {
        res.json({status: 1, msg: '', data: notice});
        return;
    }

    var whereSql = util.format(" where settop = 1 ");
    var limitSql = util.format(" order by createtime desc Limit 0,1 ");

    var sqlClient = new SqlClient();
    var notice = new Notice();
    sqlClient.query(notice, function (result) {
        if (result != null && result.length > 0) {
            notice = result[0];
            console.log("###  notice query !");
            req.session.notice = notice;
            res.json({status: 1, msg: 'success!', data: notice});
            return;
        }
        res.json({status: 2, msg: 'sider_notice failed!'});
    }, whereSql, limitSql);
});
// sider - news list
router.get('/sider_news', function (req, res, next) {
    var newslist = req.session.newslist;
    if (newslist) {
        res.json({status: 1, msg: '', data: newslist});
        return;
    }

    var whereSql = util.format(" where settop = 1 ");
    var limitSql = util.format(" order by settop desc,createtime desc Limit 0,5 ");

    var sqlClient = new SqlClient();
    var news = new News();
    sqlClient.query(news, function (result) {
        if (result != null && result.length > 0) {
            result.forEach(function (item) {
                item.createtime = CommonUtil.toDateString(item.createtime);
            });

            console.log("###  newslist query !");
            req.session.newslist = result;
            res.json({status: 1, msg: 'success!', data: result});
            return;
        }
        res.json({status: 2, msg: 'sider_news failed!'});
    }, whereSql, limitSql);
});
// sider - category list
router.get('/sider_category', function (req, res, next) {
    var categorylist = req.session.categorylist;
    if (categorylist) {
        res.json({status: 1, msg: '', data: categorylist});
        return;
    }

    var limitSql = util.format(" order by id Limit 0,5 ");
    var sqlClient = new SqlClient();
    var category = new Category();
    sqlClient.query(category, function (result) {
        if (result != null && result.length > 0) {

            console.log("###  categorylist query !");
            req.session.categorylist = result;
            res.json({status: 1, msg: 'success!', data: result});
            return;
        }
        res.json({status: 2, msg: 'sider_category failed!'});
    }, null, limitSql);
});
// sider - contact
router.get('/sider_contact', function (req, res, next) {
    var contact = req.session.contact;
    if (contact) {
        res.json({status: 1, msg: '', data: contact});
        return;
    }

    var limitSql = util.format(" order by id Limit 0,1 ");
    var sqlClient = new SqlClient();
    var contact = new Contact();
    sqlClient.query(contact, function (result) {
        if (result != null && result.length > 0) {
            contact = result[0];
            console.log("###  contact query !");
            req.session.contact = contact;
            res.json({status: 1, msg: 'success!', data: contact});
            return;
        }
        res.json({status: 2, msg: 'sider_contact failed!'});
    }, null, limitSql);
});

// index - company
router.get('/index_company', function (req, res, next) {
    var company = req.session.company;
    if (company) {
        res.json({status: 1, msg: '', data: company});
        return;
    }

    var limitSql = util.format(" order by id Limit 0,1 ");

    var sqlClient = new SqlClient();
    var company = new Company();
    sqlClient.query(company, function (result) {
        if (result != null && result.length > 0) {
            company = result[0];
            console.log("###  company query !");
            req.session.company = company;
            res.json({status: 1, msg: 'success!', data: company});
            return;
        }
        res.json({status: 2, msg: 'index_company failed!'});
    }, null, limitSql);
});


module.exports = router;
