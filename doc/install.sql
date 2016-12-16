-- 在Mysql中取消外键约束
SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `user`
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `displayname` varchar(100) DEFAULT NULL,
  `status` int(1) DEFAULT 1,
  `createtime` datetime DEFAULT NULL,
  `lastlogintime` datetime DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `company`
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(100) NOT NULL,
  `description` text DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL,
  `company_type` varchar(100) DEFAULT NULL,
  `company_size` varchar(100) DEFAULT NULL,
  `regist_capital` varchar(100) DEFAULT NULL,
  `regist_date` datetime DEFAULT NULL,
  `business_model` varchar(100) DEFAULT NULL,
  `business_scope` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `contact`
-- ----------------------------
DROP TABLE IF EXISTS `contact`;
CREATE TABLE `contact` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `contact_name` varchar(100) DEFAULT NULL,
  `contact_phone` varchar(100) DEFAULT NULL,
  `contact_email` varchar(100) DEFAULT NULL,
  `contact_mobile` varchar(100) DEFAULT NULL,
  `contact_fax` varchar(100) DEFAULT NULL,
  `contact_qq` varchar(100) DEFAULT NULL,
  `location_lng` varchar(100) DEFAULT NULL,
  `location_lat` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `comment`
-- ----------------------------
DROP TABLE IF EXISTS `comment`;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` int(1) DEFAULT NULL,
  `level` int(1) DEFAULT NULL,
  `comment` varchar(500) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `name` varchar(100) DEFAULT NULL,
  `contact` varchar(100) DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `parentid` int(11) DEFAULT NULL,
  `userid` int(11) DEFAULT NULL,
  `status` int(1) DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `notice`
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `status` int(1) DEFAULT 1,
  `settop` int(1) DEFAULT 0,
  `views` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `news`
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `content` text DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `status` int(1) DEFAULT 1,
  `settop` int(1) DEFAULT 0,
  `views` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `category_id` int(11) DEFAULT NULL,
  `model` varchar(100) DEFAULT NULL,
  `specification` varchar(100) DEFAULT NULL,
  `brand` varchar(100) DEFAULT NULL,
  `price` varchar(100) DEFAULT NULL,
  `detail_info` text DEFAULT NULL,
  `publish_date` datetime DEFAULT NULL,
  `expiry_date` datetime DEFAULT NULL,
  `views` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `picture`
-- ----------------------------
DROP TABLE IF EXISTS `picture`;
CREATE TABLE `picture` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `pic_type` int(1) DEFAULT NULL,
  `key_id` int(11) DEFAULT NULL,
  `pic_name` varchar(100) DEFAULT NULL,
  `pic_url_cdn` varchar(100) DEFAULT NULL,
  `pic_url_loc` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `honor`
-- ----------------------------
DROP TABLE IF EXISTS `honor`;
CREATE TABLE `honor` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `honor_name` varchar(100) DEFAULT NULL,
  `honor_main_id` int(11) DEFAULT NULL,
  `certification` varchar(100) DEFAULT NULL,
  `publish_date` datetime DEFAULT NULL,
  `expiry_date` datetime DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `views` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `photo`
-- ----------------------------
DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo_name` varchar(100) DEFAULT NULL,
  `photo_main_id` int(11) DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `views` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Table structure for `website`
-- ----------------------------
DROP TABLE IF EXISTS `website`;
CREATE TABLE `website` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `siteurl` varchar(100) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(100) DEFAULT NULL,
  `keywords` varchar(100) DEFAULT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `carousel` varchar(500) DEFAULT NULL,
  `icp_num` varchar(100) DEFAULT NULL,
  `support_name` varchar(100) DEFAULT NULL,
  `support_url` varchar(100) DEFAULT NULL,
  `views` int(11) DEFAULT 0,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;


-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'iteming', '123456', '系统管理员', '1', '2016-12-12 11:13:23', '2016-12-12 11:13:23', 'img/avatar/avatar-iteming.png');

-- ----------------------------
-- Records of website
-- ----------------------------
INSERT INTO `website` VALUES ('1', 'http://127.0.0.1:3000/', '石家庄千甫金属制品有限公司', '公司主营：锌锭、铝锭加工销售；氧化锌、铜锭、铅锭、锌矿粉、锌渣销售', '锌锭、铝锭加工销售；氧化锌、铜锭、铅锭、锌矿粉、锌渣销售', '', '', '冀ICP备15016569号', 'iteming', 'http://www.iteming.wang/', '0');

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES ('1', '石家庄千甫金属制品有限公司', '公司主营：锌锭、铝锭加工销售；氧化锌、铜锭、铅锭、锌矿粉、锌渣销售', '河北省石家庄市晋州市邵庄村', '生产商/经销商', '50-100人', '100万人民币', '2016-08-06 00:00:00', '有限责任公司(自然人独资)', '锌锭、铝锭加工销售；氧化锌、铜锭、铅锭、锌矿粉、锌渣销售(依法须经批准的项目，经相关部门批准后方可开展经营活动).');

-- ----------------------------
-- Records of contact
-- ----------------------------
INSERT INTO `contact` VALUES ('1', '张英民', '0310-5555555', 'sjzqfjs@163.com', '13014334123', '0310-5555555', '1203706884', '115.028155', '37.992195');

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('1', '对方撤回了一条消息。教你如何查看已撤回的微信消息！', '不知道大家有没有这样的感觉，有时候你在给朋友发微信时，对方可能趁你不注意发了消息然后撤回了。比如...  好想知道女神跟我说了什么，是同意了吗?还是拒绝了?我要不要直接打电话过去?万一要是拒绝了我还跟她打电话岂不是很没面子?好吧我顿时感觉这个消息撤回功能简直是人类技术文明的倒退啊!这样让人心痒痒的还不如当没接到过这条消息啊。不过作为一个技术控，绝不能就此知难而退，为了研究出女神到底说了什么，我研究了一晚防撤回的方法，所以今天打算来分享给大家。ps：只针对iPhone用户防文字撤销\r\n　　好了，言归正传。首先我们来打开iPhone的设置，选中通知栏。\r\n　　▼\r\n　　把微信设置为允许通知并打开所有通知选项相信看到这里，机智的小伙伴已经知道该从哪里查看撤回的消息了，没错就是通知栏!\r\n　　请大家不要在意图片里的细节，毕竟这只是一篇正经的教程帖。\r\n　　如果你按照这个方法还是无法查看到撤回消息的话，那一定是微信内的设置问题了，可以打开微信设置里的新消息通知，然后打开通知显示消息详情就好啦~\r\n　　PS:最后提醒一下，如果你的女票爱查岗的话请谨慎打开此功能，不然在关键时候弹出一条不合时宜的消息的话，可别怪我没提醒你有生命危险啊~', '2016-12-16 15:39:38', '1', '0', '0');
INSERT INTO `news` VALUES ('2', '新通知', '公告：恭喜网站上线', '2016-12-16 15:41:36', '1', '1', '0');
INSERT INTO `news` VALUES ('3', '再来一条非置顶公告', '公告内容', '2016-12-16 16:48:18', '1', '0', '0');