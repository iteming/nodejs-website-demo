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
router.post('/views', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }

    switch(req.body.type){
        case "website":
            var entity = new Website();
            entity.id = website.id;
            entity.views = website.views+1;
            break;
        case "news":
            var entity = new News();
            entity.id = req.body.id;
            entity.views = parseInt(req.body.views)+1;
            break;
        case "honor":
            var entity = new Honor();
            entity.id = req.body.id;
            entity.views = parseInt(req.body.views)+1;
            break;
        case "photo":
            var entity = new Photo();
            entity.id = req.body.id;
            entity.views = parseInt(req.body.views)+1;
            break;
        case "product":
            var entity = new Product();
            entity.id = req.body.id;
            entity.views = parseInt(req.body.views)+1;
            break;
    }
    var sqlClient = new SqlClient();
    sqlClient.update(entity, function (result) {
        if (result != null && result > 0) {
            res.json({status: 1, msg: 'success!'});
            if(req.body.type=="website") website.views = website.views+1;
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

    var sqlClient = new SqlClient();
    var company = new Company();
    sqlClient.query(company, function (result) {
        if (result != null && result.length > 0) {
            company = result[0];
            if (company.regist_date) company.regist_date = CommonUtil.toDateString(company.regist_date);
            res.render('web/company', {website: website, company: company});
            return;
        }
        res.render('web/company', {website: website, company: company});
    });
});
router.get('/contact', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }

    var sqlClient = new SqlClient();
    var contact = new Contact();
    sqlClient.query(contact, function (result) {
        if (result != null && result.length > 0) {
            contact = result[0];
            res.render('web/contact', {website: website, contact: contact});
            return;
        }
        res.render('web/contact', {website: website, contact: contact});
    });
});


router.get('/product/list/:categoryid', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    res.render('web/product', {website: website, categoryid: req.params.categoryid});
});
// 获取产品列表
router.post('/product/list/query', function (req, res, next) {
    var selectWhat = " A.*,MAX(B.pic_url_loc) pic_url_loc  ";
    var join = " LEFT JOIN picture AS B ON B.key_id = A.id AND B.pic_type = 1 ";
    var whereSql = req.body.categoryid!= undefined && req.body.categoryid!= null && req.body.categoryid!= 0 ?
        util.format(" where A.category_id=%s ", req.body.categoryid) : "";
    var limitSql = util.format(" order by publish_date desc,A.name Limit %s,%s ", (req.body.page_index - 1) * req.body.page_size, req.body.page_size);

    var sqlClient = new SqlClient();
    var product = new Product();
    sqlClient.query(product, function (result) {
        var recordCount = result[0]["count"];
        if (recordCount == 0) {
            res.json({status: 3, msg: '暂无记录!', data: null, recordCount: 0});
            return;
        }
        sqlClient.query(product, function (result) {
            if (result != null && result.length > 0) {
                result.forEach(function (item) {
                    if (item.publish_date) item.publish_date = CommonUtil.toDateString(item.publish_date);
                    if (item.expiry_date) item.expiry_date = CommonUtil.toDateString(item.expiry_date);
                });
                res.json({status: 1, msg: '查询成功!', data: result, recordCount: recordCount});
            }
        }, whereSql, limitSql, false, selectWhat, join);
    }, whereSql, null, true, selectWhat, join);
});
// 获取产品分类列表
router.post('/category/list/query', function (req, res, next) {
    var limitSql = util.format(" order by id ");
    var sqlClient = new SqlClient();
    var category = new Category();
    sqlClient.query(category, function (result) {
        if (result != null && result.length > 0) {
            res.json({status: 1, msg: 'success!', data: result});
            return;
        }
        res.json({status: 2, msg: 'query category failed!'});
    }, null, limitSql);
});
router.get('/product/:id', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }

    var selectWhat = " A.*,B.name as category_name ";
    var join = " LEFT JOIN category AS B ON A.category_id = B.id ";
    var sqlClient = new SqlClient();
    var product = new Product();
    product.id = req.params.id;
    sqlClient.getById(product, function (result) {
        if (result != null) {
            if (result.publish_date) result.publish_date = CommonUtil.toDateString(result.publish_date);
            if (result.expiry_date) result.expiry_date = CommonUtil.toDateString(result.expiry_date);

            // 查询相册下的所有图片
            var whereSql = util.format(" where pic_type=%s and key_id=%s  ", 1, result.id);
            var picture = new Picture();
            sqlClient.query(picture, function (picret) {
                if (picret != null && picret.length > 0) {
                    console.log(picret);
                    res.render('web/product_details', {website: website, product: result, photolist: picret});
                    return;
                }
                res.render('web/product_details', {website: website, product: result, photolist: picret});
            }, whereSql);

            return;
        }
        res.render('web/product_details', {website: website, product: product});
    }, selectWhat, join);
});


router.get('/honor/list', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    res.render('web/honor', {website: website});
});
// 获取荣誉列表
router.post('/honor/list/query', function (req, res, next) {
    var selectWhat = " A.*,B.pic_url_loc ";
    var join = " LEFT JOIN picture AS B ON A.honor_main_id = B.id AND B.pic_type = 2 ";
    var limitSql = util.format(" order by publish_date desc,createtime desc Limit %s,%s ", (req.body.page_index - 1) * req.body.page_size, req.body.page_size);

    var sqlClient = new SqlClient();
    var honor = new Honor();
    sqlClient.query(honor, function (result) {
        var recordCount = result[0]["count"];
        if (recordCount == 0) {
            res.json({status: 3, msg: '暂无记录!', data: null, recordCount: 0});
            return;
        }
        sqlClient.query(honor, function (result) {
            if (result != null && result.length > 0) {
                result.forEach(function (item) {
                    if (item.publish_date) item.publish_date = CommonUtil.toDateString(item.publish_date);
                    if (item.expiry_date) item.expiry_date = CommonUtil.toDateString(item.expiry_date);
                    if (item.createtime) item.createtime = CommonUtil.toDateString(item.createtime);
                });
                res.json({status: 1, msg: '查询成功!', data: result, recordCount: recordCount});
            }
        }, null, limitSql, false, selectWhat, join);
    }, null, null, true, selectWhat, join);
});
router.get('/honor/:id', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    var selectWhat = " A.*,B.pic_url_loc ";
    var join = " LEFT JOIN picture AS B ON A.honor_main_id = B.id AND B.pic_type = 2 ";
    var sqlClient = new SqlClient();
    var honor = new Honor();
    honor.id = req.params.id;
    sqlClient.getById(honor, function (result) {
        if (result != null) {
            if (result.createtime) result.createtime = CommonUtil.toDateString(result.createtime);
            if (result.publish_date) result.publish_date = CommonUtil.toDateString(result.publish_date);
            if (result.expiry_date) result.expiry_date = CommonUtil.toDateString(result.expiry_date);
            res.render('web/honor_details', {website: website, honor: result});
            return;
        }
        res.render('web/honor_details', {website: website, honor: honor});
    }, selectWhat, join);
});


router.get('/photo/list', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    res.render('web/photo', {website: website});
});
// 获取相册列表
router.post('/photo/list/query', function (req, res, next) {
    var selectWhat = " A.*,B.pic_url_loc ";
    var join = " LEFT JOIN picture AS B ON A.photo_main_id = B.id AND B.pic_type = 3 ";
    var limitSql = util.format(" order by createtime desc Limit %s,%s ", (req.body.page_index - 1) * req.body.page_size, req.body.page_size);

    var sqlClient = new SqlClient();
    var photo = new Photo();
    sqlClient.query(photo, function (result) {
        var recordCount = result[0]["count"];
        if (recordCount == 0) {
            res.json({status: 3, msg: '暂无记录!', data: null, recordCount: 0});
            return;
        }
        sqlClient.query(photo, function (result) {
            if (result != null && result.length > 0) {
                result.forEach(function (item) {
                    item.createtime = CommonUtil.toDateString(item.createtime);
                });
                res.json({status: 1, msg: '查询成功!', data: result, recordCount: recordCount});
            }
        }, null, limitSql, false, selectWhat, join);
    }, null, null, true, selectWhat, join);
});
router.get('/photo/:id', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    var selectWhat = " A.*,B.pic_url_loc ";
    var join = " LEFT JOIN picture AS B ON A.photo_main_id = B.id AND B.pic_type = 3 ";
    var sqlClient = new SqlClient();
    var photo = new Photo();
    photo.id = req.params.id;
    sqlClient.getById(photo, function (result) {
        if (result != null) {
            if (result.createtime) result.createtime = CommonUtil.toDateString(result.createtime);

            // 查询相册下的所有图片
            var whereSql = util.format(" where pic_type=%s and key_id=%s  ", 3, result.id);
            var picture = new Picture();
            sqlClient.query(picture, function (picret) {
                if (picret != null && picret.length > 0) {
                    console.log(picret);
                    res.render('web/photo_details', {website: website, photo: result, photolist: picret});
                    return;
                }
                res.render('web/photo_details', {website: website, photo: result, photolist: picret});
            }, whereSql);

            return;
        }
        res.render('web/photo_details', {website: website, photo: photo});
    }, selectWhat, join);
});


router.get('/news/list', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    res.render('web/news', {website: website});
});
// 获取新闻列表
router.post('/news/list/query', function (req, res, next) {
    var limitSql = util.format(" order by settop desc,createtime desc Limit %s,%s ", (req.body.page_index - 1) * req.body.page_size, req.body.page_size);

    var sqlClient = new SqlClient();
    var news = new News();
    sqlClient.query(news, function (result) {
        var recordCount = result[0]["count"];
        if (recordCount == 0) {
            res.json({status: 3, msg: '暂无记录!', data: null, recordCount: 0});
            return;
        }
        sqlClient.query(news, function (result) {
            if (result != null && result.length > 0) {
                result.forEach(function (item) {
                    item.createtime = CommonUtil.toDateString(item.createtime);
                });
                res.json({status: 1, msg: '查询成功!', data: result, recordCount: recordCount});
            }
        }, null, limitSql);
    }, null, null, true);
});
router.get('/news/:id', function (req, res, next) {
    var website = req.session.website;
    if (!website) {
        res.redirect('/');
        return;
    }
    var sqlClient = new SqlClient();
    var news = new News();
    news.id = req.params.id;
    sqlClient.getById(news, function (result) {
        if (result != null) {
            if (result.createtime) result.createtime = CommonUtil.toDateString(result.createtime);
            res.render('web/news_details', {website: website, news: result});
            return;
        }
        res.render('web/news_details', {website: website, news: news});
    });
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
// index - product
router.get('/index_product', function (req, res, next) {
    var product = req.session.product;
    if (product) {
        res.json({status: 1, msg: '', data: product});
        return;
    }
    var selectWhat = " A.*,MAX(B.pic_url_loc) pic_url_loc ";
    var join = " LEFT JOIN picture AS B ON B.key_id = A.id AND B.pic_type = 1 ";
    var limitSql = util.format(" order by publish_date desc Limit 0,10 ");

    var sqlClient = new SqlClient();
    var product = new Product();
    sqlClient.query(product, function (result) {
        if (result != null && result.length > 0) {
            result.forEach(function (item) {
                item.publish_date = CommonUtil.toDateString(item.publish_date);
            });

            console.log("###  product query !");
            req.session.product = result;
            res.json({status: 1, msg: 'success!', data: result});
            return;
        }
        res.json({status: 2, msg: 'index_product failed!'});
    }, null, limitSql, null, selectWhat, join);
});
// index - photo
router.get('/index_photo', function (req, res, next) {
    var photo = req.session.photo;
    if (photo) {
        res.json({status: 1, msg: '', data: photo});
        return;
    }
    var selectWhat = " A.*,B.pic_url_loc ";
    var join = " LEFT JOIN picture AS B ON A.photo_main_id = B.id AND B.pic_type = 3 ";
    var limitSql = util.format(" order by createtime desc Limit 0,3 ");

    var sqlClient = new SqlClient();
    var photo = new Photo();
    sqlClient.query(photo, function (result) {
        if (result != null && result.length > 0) {
            result.forEach(function (item) {
                item.createtime = CommonUtil.toDateString(item.createtime);
            });

            console.log("###  photo query !");
            req.session.photo = result;
            res.json({status: 1, msg: 'success!', data: result});
            return;
        }
        res.json({status: 2, msg: 'index_product failed!'});
    }, null, limitSql, null, selectWhat, join);
});


module.exports = router;
