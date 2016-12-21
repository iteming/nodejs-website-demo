var express = require('express');
var util = require('util');
var moment = require('moment');
var fs = require('fs');
var formidable = require('formidable');
var router = express.Router();
require('../core/CommonUtil');
require('../core/HttpWrapper');
require('../core/SqlClient');
require('../model/model');


router.get('/', function (req, res, next) {
    // console.log(process.execPath);
    // console.log(__dirname);
    // console.log(process.cwd());

    res.redirect('/cms/index');
});

router.get('/index', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;

    if (website) {
        if (user) {
            res.render('cms/index', {user: user, website: website});
        } else {
            res.redirect('/cms/login');
        }
    } else {
        var sqlClient = new SqlClient();
        website = new Website();
        sqlClient.query(website, function (result) {
            if (result != null && result.length > 0) {
                website = result[0];
                req.session.website = website;
                if (user) {
                    res.render('cms/index', {user: user, website: website});
                } else {
                    res.redirect('/cms/login');
                }
                return;
            }
            res.redirect('/cms/logout');
        });
    }
});

router.get('/login', function (req, res, next) {
    res.render('cms/login', {username: ''});
});

router.get('/logout', function (req, res, next) {
    //清空user信息
    req.session.user = null;
    req.session.website = null;
    res.redirect('/cms/login');
});

router.post('/login', function (req, res, next) {
    var sqlClient = new SqlClient();
    var user = new User();

    sqlClient.query(user, function (result) {
        if (result != null && result.length > 0) {
            user = result[0];
            if (user.password != req.body.password) {
                res.render('cms/login', {status: 2, msg: '密码错误!', username: req.body.username});
                return;
            }
            if (user.createtime) user.createtime = moment(user.createtime).format("YYYY-MM-DD");
            if (user.lastlogintime) user.lastlogintime = moment(user.lastlogintime).format("YYYY-MM-DD");
            req.session.user = user;
            res.redirect('/cms/index');
            return;
        }
        res.render('cms/login', {status: 3, msg: '帐号不存在!', username: req.body.username});
    }, util.format(" where username='%s'", req.body.username));
});


// 用户中心
router.get('/user/center', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    res.render('cms/user/center', {user: user, website: website});
});
// 修改用户信息
router.post('/user/center', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    var entity = new User();
    entity.username = req.body.username;
    entity.displayname = req.body.displayname;
    entity.createtime = req.body.createtime;
    entity.lastlogintime = req.body.lastlogintime;
    entity.status = req.body.status && req.body.status == 'on' ? true : false;
    entity.id = user.id;
    entity.avatar = user.avatar;

    var sqlClient = new SqlClient();
    sqlClient.update(entity, function (result) {
        if (result != null && result > 0) {
            if (entity.createtime) entity.createtime = moment(entity.createtime).format("YYYY-MM-DD");
            if (entity.lastlogintime) entity.lastlogintime = moment(entity.lastlogintime).format("YYYY-MM-DD");
            req.session.user = entity;
            res.render('cms/user/center', {status: 1, msg: '修改成功!', user: entity, website: website});
            return;
        }
        res.render('cms/user/center', {status: 2, msg: '修改失败!', user: entity, website: website});
    });

});

// 设置密码
router.get('/user/forget', function (req, res, next) {
    // var user = req.session.user;
    // if(!user || !website) { res.redirect('/cms/login'); return; }
    res.render('cms/user/forget');
});


// 公司基本信息
router.get('/company', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }

    var sqlClient = new SqlClient();
    var company = new Company();
    sqlClient.query(company, function (result) {
        if (result != null && result.length > 0) {
            company = result[0];
            if (company.regist_date) company.regist_date = moment(company.regist_date).format("YYYY-MM-DD");
            res.render('cms/company', {status: 1, msg: '已获取公司信息!', user: user, website: website, company: company});
            return;
        }
        res.render('cms/company', {status: 3, msg: '公司不存在!', user: user, website: website, company: company});
    });
});
// 更新公司信息
router.post('/company', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }

    var sqlClient = new SqlClient();
    var company = new Company();
    company.id = req.body.id ? req.body.id : null;
    company.company_name = req.body.company_name;
    company.description = req.body.description;
    company.address = req.body.address;
    company.company_type = req.body.company_type;
    company.company_size = req.body.company_size;
    company.regist_capital = req.body.regist_capital;
    company.regist_date = req.body.regist_date;
    company.business_model = req.body.business_model;
    company.business_scope = req.body.business_scope;

    var isInsert = false;
    var callback = function (result) {
        if (result != null && result > 0) {
            if (isInsert) company.id = result;
            if (company.regist_date) company.regist_date = moment(company.regist_date).format("YYYY-MM-DD");
            res.render('cms/company', {status: 1, msg: '更新成功!', user: user, website: website, company: company});
            return;
        }
        res.render('cms/company', {status: 2, msg: '更新失败!', user: user, website: website, company: company});
    };

    if (company.id == null || company.id == "null") {
        isInsert = true;
        sqlClient.create(company, callback);
    } else {
        isInsert = false;
        sqlClient.update(company, callback);
    }
});


// 公司联系方式
router.get('/contact', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }

    var sqlClient = new SqlClient();
    var contact = new Contact();
    sqlClient.query(contact, function (result) {
        if (result != null && result.length > 0) {
            contact = result[0];
            res.render('cms/contact', {status: 1, msg: '已获取联系方式!', user: user, website: website, contact: contact});
            return;
        }
        res.render('cms/contact', {status: 3, msg: '联系方式不存在!', user: user, website: website, contact: contact});
    });
});
// 更新联系方式
router.post('/contact', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }

    var sqlClient = new SqlClient();
    var contact = new Contact();
    contact.id = req.body.id ? req.body.id : null;
    contact.contact_name = req.body.contact_name;
    contact.contact_phone = req.body.contact_phone;
    contact.contact_email = req.body.contact_email;
    contact.contact_mobile = req.body.contact_mobile;
    contact.contact_fax = req.body.contact_fax;
    contact.contact_qq = req.body.contact_qq;
    contact.location_lng = req.body.location_lng;
    contact.location_lat = req.body.location_lat;

    var isInsert = false;
    var callback = function (result) {
        if (result != null && result > 0) {
            if (isInsert) contact.id = result;
            res.render('cms/contact', {status: 1, msg: '更新成功!', user: user, website: website, contact: contact});
            return;
        }
        res.render('cms/contact', {status: 2, msg: '更新失败!', user: user, website: website, contact: contact});
    };

    if (contact.id == null || contact.id == "null") {
        isInsert = true;
        sqlClient.create(contact, callback);
    } else {
        isInsert = false;
        sqlClient.update(contact, callback);
    }
});


// 通知公告
router.get('/notice', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    res.render('cms/notice', {user: user, website: website});
});
// 获取公告列表
router.post('/notice/list', function (req, res, next) {
    var whereSql = req.body.wd ? util.format(" where title like '%%%s%' or content like '%%%s%' ", req.body.wd, req.body.wd) : "";
    var limitSql = util.format(" order by settop desc,createtime desc Limit %s,%s ", (req.body.page_index - 1) * req.body.page_size, req.body.page_size);

    var sqlClient = new SqlClient();
    var notice = new Notice();
    sqlClient.query(notice, function (result) {
        var recordCount = result[0]["count"];
        if (recordCount == 0) {
            res.json({status: 3, msg: '暂无记录!', data: null, recordCount: 0});
            return;
        }
        sqlClient.query(notice, function (result) {
            if (result != null && result.length > 0) {
                result.forEach(function (item) {
                    item.createtime = moment(item.createtime).format("YYYY-MM-DD");
                });
                res.json({status: 1, msg: '查询成功!', data: result, recordCount: recordCount});
            }
        }, whereSql, limitSql);
    }, whereSql, null, true);
});
// 公告详情页
router.get('/notice/details/:id', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    var sqlClient = new SqlClient();
    var notice = new Notice();
    notice.id = req.params.id;
    sqlClient.getById(notice, function (result) {
        if (result != null) {
            if (result.createtime) result.createtime = moment(result.createtime).format("YYYY-MM-DD");
            res.render('cms/notice_details', {user: user, website: website, notice: result});
            return;
        }
        res.render('cms/notice_details', {user: user, website: website, notice: notice});
    });
});
// 更新公告内容
router.post('/notice/update', function (req, res, next) {
    var sqlClient = new SqlClient();
    var notice = new Notice();
    notice.title = req.body.title;
    notice.content = req.body.content;
    notice.createtime = req.body.createtime;
    notice.status = req.body.status && req.body.status == 'on' ? true : false;
    notice.settop = req.body.settop && req.body.settop == 'on' ? true : false;
    notice.views = req.body.views ? req.body.views : 0;
    notice.id = req.body.id;

    var callback = function (result) {
        if (result != null && result > 0) {
            res.json({status: 1, msg: '更新成功!'});
            return;
        }
        res.render({status: 2, msg: '更新失败!'});
    };

    if (notice.id === null || notice.id === "null" || notice.id === 0 || notice.id === "0") {
        sqlClient.create(notice, callback);
    } else {
        sqlClient.update(notice, callback);
    }
});


// 新闻中心
router.get('/news', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    res.render('cms/news', {user: user, website: website});
});
// 获取新闻列表
router.post('/news/list', function (req, res, next) {
    var whereSql = req.body.wd ? util.format(" where title like '%%%s%' or content like '%%%s%' ", req.body.wd, req.body.wd) : "";
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
                    item.createtime = moment(item.createtime).format("YYYY-MM-DD");
                });
                res.json({status: 1, msg: '查询成功!', data: result, recordCount: recordCount});
            }
        }, whereSql, limitSql);
    }, whereSql, null, true);
});
// 新闻详情页
router.get('/news/details/:id', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    var sqlClient = new SqlClient();
    var news = new News();
    news.id = req.params.id;
    sqlClient.getById(news, function (result) {
        if (result != null) {
            if (result.createtime) result.createtime = moment(result.createtime).format("YYYY-MM-DD");
            res.render('cms/news_details', {user: user, website: website, news: result});
            return;
        }
        res.render('cms/news_details', {user: user, website: website, news: news});
    });
});
// 更新新闻内容
router.post('/news/update', function (req, res, next) {
    var sqlClient = new SqlClient();
    var news = new News();
    news.title = req.body.title;
    news.content = req.body.content;
    news.createtime = req.body.createtime;
    news.status = req.body.status && req.body.status == 'on' ? true : false;
    news.settop = req.body.settop && req.body.settop == 'on' ? true : false;
    news.views = req.body.views ? req.body.views : 0;
    news.id = req.body.id;

    var callback = function (result) {
        if (result != null && result > 0) {
            res.json({status: 1, msg: '更新成功!'});
            return;
        }
        res.render({status: 2, msg: '更新失败!'});
    };

    if (news.id === null || news.id === "null" || news.id === 0 || news.id === "0") {
        sqlClient.create(news, callback);
    } else {
        sqlClient.update(news, callback);
    }
});


// 产品管理
router.get('/product', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    res.render('cms/product', {user: user, website: website});
});


// 分类管理
router.get('/category', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    res.render('cms/category', {user: user, website: website});
});
// 获取分类列表
router.post('/category/list', function (req, res, next) {
    var whereSql = req.body.wd ? util.format(" where name like '%%%s%' ", req.body.wd) : "";
    var limitSql = util.format(" order by id desc Limit %s,%s ", (req.body.page_index - 1) * req.body.page_size, req.body.page_size);

    var sqlClient = new SqlClient();
    var category = new Category();
    sqlClient.query(category, function (result) {
        var recordCount = result[0]["count"];
        if (recordCount == 0) {
            res.json({status: 3, msg: '暂无记录!', data: null, recordCount: 0});
            return;
        }
        sqlClient.query(category, function (result) {
            if (result != null && result.length > 0) {
                // result.forEach(function (item) {
                //     item.createtime = moment(item.createtime).format("YYYY-MM-DD");
                // });
                res.json({status: 1, msg: '查询成功!', data: result, recordCount: recordCount});
            }
        }, whereSql, limitSql);
    }, whereSql, null, true);
});
// 新增分类
router.post('/category/insert', function (req, res, next) {
    var sqlClient = new SqlClient();
    var category = new Category();
    category.name = req.body.name;
    sqlClient.create(category, function (result) {
        if (result != null && result > 0) {
            res.json({status: 1, msg: '新增成功!'});
            return;
        }
        res.json({status: 2, msg: '新增失败!'});
    });
});
// 删除分类
router.post('/category/delete', function (req, res, next) {
    var sqlClient = new SqlClient();
    var category = new Category();
    category.id = req.body.id;
    sqlClient.deleteById(category, function (result) {
        if (result != null && result > 0) {
            res.json({status: 1, msg: '删除成功!'});
            return;
        }
        res.json({status: 2, msg: '删除失败!'});
    });
});


// 荣誉证书
router.get('/honor', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    res.render('cms/honor', {user: user, website: website});
});
// 获取荣誉列表
router.post('/honor/list', function (req, res, next) {
    var selectWhat = " A.*,B.pic_url_loc ";
    var join = " LEFT JOIN picture AS B ON A.honor_main_id = B.id AND B.pic_type = 2 ";
    var whereSql = req.body.wd ? util.format(" where honor_name like '%%%s%' or certification like '%%%s%' ", req.body.wd, req.body.wd) : "";
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
                    item.publish_date = moment(item.publish_date).format("YYYY-MM-DD");
                    item.expiry_date = moment(item.expiry_date).format("YYYY-MM-DD");
                    item.createtime = moment(item.createtime).format("YYYY-MM-DD");
                });
                res.json({status: 1, msg: '查询成功!', data: result, recordCount: recordCount});
            }
        }, whereSql, limitSql, false, selectWhat, join);
    }, whereSql, null, true, selectWhat, join);
});
// 荣誉详情页
router.get('/honor/details/:id', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }

    var selectWhat = " A.*,B.pic_url_loc ";
    var join = " LEFT JOIN picture AS B ON A.honor_main_id = B.id AND B.pic_type = 2 ";
    var sqlClient = new SqlClient();
    var honor = new Honor();
    honor.id = req.params.id;
    sqlClient.getById(honor, function (result) {
        if (result != null) {
            if (result.createtime) {
                result.publish_date = moment(result.publish_date).format("YYYY-MM-DD");
                result.expiry_date = moment(result.expiry_date).format("YYYY-MM-DD");
                result.createtime = moment(result.createtime).format("YYYY-MM-DD");
            }
            res.render('cms/honor_details', {user: user, website: website, honor: result});
            return;
        }
        res.render('cms/honor_details', {user: user, website: website, honor: honor});
    }, selectWhat, join);
});
// 更新荣誉内容
router.post('/honor/update', function (req, res, next) {
    var sqlClient = new SqlClient();
    var honor = new Honor();
    console.log(req.body);

    honor.honor_name = req.body.honor_name;
    honor.certification = req.body.certification;
    honor.publish_date = req.body.publish_date;
    honor.expiry_date = req.body.expiry_date;
    honor.createtime = req.body.createtime;
    honor.honor_main_id = req.body.honor_main_id;
    honor.views = req.body.views;
    honor.id = req.body.id;

    var callback = function (result) {
        if (result != null && result > 0) {
            res.json({status: 1, msg: '更新成功!'});
            return;
        }
        res.render({status: 2, msg: '更新失败!'});
    };

    if (honor.id === null || honor.id === "null" || honor.id === 0 || honor.id === "0") {
        sqlClient.create(honor, callback);
    } else {
        sqlClient.update(honor, callback);
    }
});


// 公司相册
router.get('/photo', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    res.render('cms/photo', {user: user, website: website});
});
// 评论留言
router.get('/comment', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    res.render('cms/comment', {user: user, website: website});
});


// 网站信息
router.get('/website', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }
    res.render('cms/website', {user: user, website: website});
});
// 更新网站信息
router.post('/website', function (req, res, next) {
    var user = req.session.user;
    var website = req.session.website;
    if (!user || !website) {
        res.redirect('/cms/login');
        return;
    }

    var sqlClient = new SqlClient();
    var website = new Website();
    website.id = req.body.id ? req.body.id : null;
    website.siteurl = req.body.siteurl;
    website.title = req.body.title;
    website.description = req.body.description;
    website.keywords = req.body.keywords;
    website.logo = req.body.logo;
    website.carousel = req.body.carousel;
    website.icp_num = req.body.icp_num;
    website.support_name = req.body.support_name;
    website.support_url = req.body.support_url;
    website.views = req.body.views ? req.body.views : 0;

    var isInsert = false;
    var callback = function (result) {
        if (result != null && result > 0) {
            if (isInsert) website.id = result;
            req.session.website = website;
            res.render('cms/website', {status: 1, msg: '更新成功!', user: user, website: website});
            return;
        }
        res.render('cms/website', {status: 2, msg: '更新失败!', user: user, website: website});
    };

    if (website.id == null || website.id == "null") {
        isInsert = true;
        sqlClient.create(website, callback);
    } else {
        isInsert = false;
        sqlClient.update(website, callback);
    }
});

// 上传图片
router.post('/picture/fileupload', function (req, res, next) {
    var cacheFolder = '/img/uploads/';
    var userDirPath = 'public' + cacheFolder;
    if (!fs.existsSync(userDirPath)) fs.mkdirSync(userDirPath);
    var form = new formidable.IncomingForm(); //创建上传表单
    form.encoding = 'utf-8'; //设置编辑
    form.uploadDir = userDirPath; //设置上传目录
    form.keepExtensions = true; //保留后缀
    form.maxFieldsSize = 2 * 1024 * 1024; //文件大小
    form.type = true;
    var displayUrl;
    form.parse(req, function (err, fields, files) {
        if (err) {
            res.send(err);
            return;
        }
        var extName = extractExtName(files);
        if (extName.length === 0) {
            res.send({status: 2, msg: "不支持此文件类型"});
            return;
        }
        var avatarName = Date.now() + '.' + extName;
        var newPath = form.uploadDir + avatarName;
        displayUrl = cacheFolder + avatarName;
        fs.renameSync(files.filesdata.path, newPath); //重命名

        if(!(fields.pic_type) || fields.pic_type == 0){
            res.send({status: 1, msg: "上传成功", data: displayUrl, picid: 0 });
            return;
        }
        var sqlClient = new SqlClient();
        var picture = new Picture();
        picture.pic_type = fields.pic_type;
        picture.key_id = fields.key_id?fields.key_id:null;
        picture.pic_name = avatarName;
        picture.pic_url_loc = displayUrl;
        picture.pic_url_cdn = null;
        var callback = function (result) {
            if (result != null && result > 0) {
                res.send({status: 1, msg: "上传成功", data: displayUrl, picid: result });
                return;
            }
            res.render({status: 2, msg: '上传失败!', data: displayUrl});
        };
        sqlClient.create(picture, callback);
    });
});
// 提取扩展名
function extractExtName(files) {
    var extName = ''; //后缀名
    switch (files.filesdata.type) {
        case 'image/pjpeg':
            extName = 'jpg';
            break;
        case 'image/jpeg':
            extName = 'jpg';
            break;
        case 'image/jpg':
            extName = 'jpg';
            break;
        case 'image/png':
            extName = 'png';
            break;
        case 'image/x-png':
            extName = 'png';
            break;
        case 'image/gif':
            extName = 'gif';
            break;
        case 'image/svg':
            extName = 'svg';
            break;
    }
    return extName;
}

module.exports = router;