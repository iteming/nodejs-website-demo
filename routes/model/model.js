/**
 * Created by Administrator on 2016/12/8.
 * ORM 的 Model
 */

//用户信息
User=function(){
    this.tablename='user';      //用户表
    this.id=null;               //ID
    this.username="";         //登录名
    this.password="";         //登录密码
    this.displayname="";      //显示姓名
    this.status=0;           //状态(0.禁用,1.启用)
    this.createtime="";       //创建日期
    this.lastlogintime="";    //最后登录日期
};

//公司信息
Company=function(){
    this.tablename='company';   //公司表
    this.id=null;               //ID
    this.company_name="";     //公司名称
    this.description="";      //公司介绍
    this.address="";          //公司地址
    this.company_type="";     //公司类型
    this.company_size="";     //公司规模
    this.regist_capital="";   //注册资本
    this.regist_date="";      //注册年份
    this.business_model="";   //经营模式
    this.business_scope="";   //经营范围
};

//联系方式
Contact=function(){
    this.tablename='contact';   //联系方式表
    this.id=null;               //ID
    this.contact_name="";     //联系人
    this.contact_phone="";    //电话
    this.contact_email="";    //邮箱
    this.contact_mobile="";   //手机
    this.contact_fax="";      //传真
    this.contact_qq="";       //QQ
    this.location_lng="";     //位置 经度lng param_1
    this.location_lat="";     //位置 纬度lat param_2
};

//评论表
Comment=function(){
    this.tablename='comment';   //评论表
    this.id=null;               //ID
    this.type="";             //评论类型(1.公司评论,2.产品评论,3.新闻评论)
    this.level="";            //评论等级(1-3:1好评，2中评，3差评)
    this.comment="";          //评论内容
    this.email="";            //评论人邮箱
    this.name="";             //评论人名称
    this.contact="";          //评论人联系方式
    this.createtime="";       //评论时间
    this.parentid="";         //回复评论的父级id
    this.userid="";           //评论人id
    this.status=0;           //状态
};

//公告表
Notice=function(){
    this.tablename='notice';    //公告表
    this.id=null;               //ID
    this.title="";            //公告标题
    this.content="";          //公告内容
    this.createtime="";       //公告日期
    this.status=0;           //状态
};

//新闻表
News=function(){
    this.tablename='news';      //新闻表
    this.id=null;               //ID
    this.title="";            //公告标题
    this.content="";          //公告内容
    this.createtime="";       //公告日期
    this.status=0;           //状态
    this.views=0;           //浏览次数
};

//产品分类表
Category=function(){
    this.tablename='category';  //产品分类表
    this.id=null;               //ID
    this.name="";             //分类名称
};

//产品表
Product=function(){
    this.tablename='product';   //产品表
    this.id=null;               //ID
    this.name="";             //名称
    this.category_id=null;      //分类id
    this.model="";            //型号(#0、#1、#2、#3)
    this.specification="";    //规格(齐全)
    this.brand="";            //品牌
    this.price="";            //单价
    this.publish_date="";     //发布日期
    this.expiry_date="";      //有效期(不填长期有效)
    this.detail_info="";      //详细信息
    this.views=0;            //浏览次数
};

//图片表
Picture=function(){
    this.tablename='picture';   //图片表
    this.id=null;               //ID
    this.key_id=null;           //关联id(1.产品id,2.荣誉证书id,3.公司相册id)
    this.pic_type=null;         //图片类型(1.产品图片,2.荣誉资质,3.公司相册)
    this.pic_name="";         //图片名称
    this.pic_url_cdn="";      //图片路径cdn路径
    this.pic_url_loc="";      //图片路径local路径
};

//荣誉证书
Honor=function(){
    this.tablename='honor';     //荣誉证书
    this.id=null;               //ID
    this.honor_name="";       //证书名称
    this.honor_main_id=null;    //证书图片id
    this.certification="";    //发证机构
    this.publish_date="";     //发证日期
    this.expiry_date="";      //有效期(不填长期有效)
    this.createtime="";       //上传日期
    this.views=0;            //浏览次数
};

//企业相册
Photo=function(){
    this.tablename='photo';     //企业相册
    this.id=null;               //ID
    this.photo_name="";       //相册名称
    this.photo_main_id=null;    //相册主图id
    this.createtime="";       //创建日期
    this.views=0;            //浏览次数
};

//网站信息
Website=function(){
    this.tablename='website';   //网站信息
    this.id=null;               //ID
    this.siteurl="";          //网站URL
    this.title="";            //网站标题
    this.description="";      //网站描述
    this.keywords="";         //网站关键词
    this.logo="";             //网站logo
    this.carousel="";         //轮播图片url
    this.icp_num="";          //备案
    this.support_name="";     //技术支持name
    this.support_url="";      //技术支持url
    this.views=0;            //浏览次数
};