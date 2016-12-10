/**
 * Created by Administrator on 2016/12/8.
 * ORM 的 Model
 */

//用户信息
User=function(){
    this.tablename='user';      //用户表
    this.id=null;               //ID
    this.username=null;         //登录名
    this.password=null;         //登录密码
    this.displayname=null;      //显示姓名
    this.status=null;           //状态(0.禁用,1.启用)
    this.createtime=null;       //创建日期
    this.lastlogintime=null;    //最后登录日期
};

//公司信息
Company=function(){
    this.tablename='company';   //公司表
    this.id=null;               //ID
    this.company_name=null;     //公司名称
    this.description=null;      //公司介绍
    this.address=null;          //公司地址
    this.company_type=null;     //公司类型
    this.company_size=null;     //公司规模
    this.regist_capital=null;   //注册资本
    this.regist_date=null;      //注册年份
    this.business_model=null;   //经营模式
    this.business_scope=null;   //经营范围
};

//联系方式
Contact=function(){
    this.tablename='contact';   //联系方式表
    this.id=null;               //ID
    this.contact_name=null;     //联系人
    this.contact_phone=null;    //电话
    this.contact_email=null;    //邮箱
    this.contact_mobile=null;   //手机
    this.contact_fax=null;      //传真
    this.contact_qq=null;       //QQ
    this.location_lng=null;     //位置 经度lng param_1
    this.location_lat=null;     //位置 纬度lat param_2
};

//评论表
Comment=function(){
    this.tablename='comment';   //评论表
    this.id=null;               //ID
    this.type=null;             //评论类型(1.公司评论,2.产品评论,3.新闻评论)
    this.level=null;            //评论等级(1-3:1好评，2中评，3差评)
    this.comment=null;          //评论内容
    this.email=null;            //评论人邮箱
    this.name=null;             //评论人名称
    this.contact=null;          //评论人联系方式
    this.createtime=null;       //评论时间
    this.parentid=null;         //回复评论的父级id
    this.userid=null;           //评论人id
    this.status=null;           //状态
};

//公告表
Notice=function(){
    this.tablename='notice';    //公告表
    this.id=null;               //ID
    this.title=null;            //公告标题
    this.content=null;          //公告内容
    this.createtime=null;       //公告日期
    this.status=null;           //状态
};

//新闻表
News=function(){
    this.tablename='news';      //新闻表
    this.id=null;               //ID
    this.title=null;            //公告标题
    this.content=null;          //公告内容
    this.createtime=null;       //公告日期
    this.status=null;           //状态
    this.views=null;           //浏览次数
};

//产品分类表
Category=function(){
    this.tablename='category';  //产品分类表
    this.id=null;               //ID
    this.name=null;             //分类名称
};

//产品表
Product=function(){
    this.tablename='product';   //产品表
    this.id=null;               //ID
    this.name=null;             //名称
    this.category_id=null;      //分类id
    this.model=null;            //型号(#0、#1、#2、#3)
    this.specification=null;    //规格(齐全)
    this.brand=null;            //品牌
    this.price=null;            //单价
    this.publish_date=null;     //发布日期
    this.expiry_date=null;      //有效期(不填长期有效)
    this.detail_info=null;      //详细信息
    this.views=null;            //浏览次数
};

//图片表
Picture=function(){
    this.tablename='picture';   //图片表
    this.id=null;               //ID
    this.key_id=null;           //关联id(1.产品id,2.荣誉证书id,3.公司相册id)
    this.pic_type=null;         //图片类型(1.产品图片,2.荣誉资质,3.公司相册)
    this.pic_name=null;         //图片名称
    this.pic_url_cdn=null;      //图片路径cdn路径
    this.pic_url_loc=null;      //图片路径local路径
};

//荣誉证书
Honor=function(){
    this.tablename='honor';     //荣誉证书
    this.id=null;               //ID
    this.honor_name=null;       //证书名称
    this.honor_main_id=null;    //证书图片id
    this.certification=null;    //发证机构
    this.publish_date=null;     //发证日期
    this.expiry_date=null;      //有效期(不填长期有效)
    this.createtime=null;       //上传日期
    this.views=null;            //浏览次数
};

//企业相册
Photo=function(){
    this.tablename='photo';     //企业相册
    this.id=null;               //ID
    this.photo_name=null;       //相册名称
    this.photo_main_id=null;    //相册主图id
    this.createtime=null;       //创建日期
    this.views=null;            //浏览次数
};

//网站信息
Website=function(){
    this.tablename='website';   //网站信息
    this.id=null;               //ID
    this.siteurl=null;          //网站URL
    this.title=null;            //网站标题
    this.description=null;      //网站描述
    this.logo=null;             //网站logo
    this.carousel=null;         //轮播图片url
    this.icp_num=null;          //备案
    this.support_name=null;     //技术支持name
    this.support_url=null;      //技术支持url
    this.views=null;            //浏览次数
};