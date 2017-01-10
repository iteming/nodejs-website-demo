/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50711
Source Host           : localhost:3306
Source Database       : node_cms

Target Server Type    : MYSQL
Target Server Version : 50711
File Encoding         : 65001

Date: 2017-01-10 10:11:12
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for category
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of category
-- ----------------------------

-- ----------------------------
-- Table structure for comment
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
  `status` int(1) DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of comment
-- ----------------------------

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `company_name` varchar(100) NOT NULL,
  `description` text,
  `address` varchar(100) DEFAULT NULL,
  `company_type` varchar(100) DEFAULT NULL,
  `company_size` varchar(100) DEFAULT NULL,
  `regist_capital` varchar(100) DEFAULT NULL,
  `regist_date` datetime DEFAULT NULL,
  `business_model` varchar(100) DEFAULT NULL,
  `business_scope` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of company
-- ----------------------------
INSERT INTO `company` VALUES ('1', '石家庄千甫金属制品有限公司', '<p>\r\n	<img src=\"/img/uploads/1483609398717.jpg\" alt=\"\" width=\"250\" height=\"167\" title=\"\" align=\"right\" /> \r\n</p>\r\n<span style=\"color:#34495E;font-family:&quot;font-size:14px;background-color:#FFFFFF;\">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;石家庄博鑫丰锌业公司创建于2012年，现占地面积30000平方米，位于石家庄东30公里，北邻石德铁路，307国道，石黄高速，南邻青银高速， 西接京深高速，交通十分便利。</span><br />\r\n<br />\r\n<span style=\"color:#34495E;font-family:&quot;font-size:14px;background-color:#FFFFFF;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 公司凭借雄厚的技术力量和多年的生产经验，以及完备的质量体系，精密的检验设备和现发、生产一体化的锌产品生产基地。</span><br />\r\n<br />\r\n<span style=\"color:#34495E;font-family:&quot;font-size:14px;background-color:#FFFFFF;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 博鑫丰锌业全体员工以饱满的工作热情，以“用户满意”为服务宗旨，本着“信誉至上”的原则，真诚的期待与国内外客商携手共进，共同迈向成功！</span><br />\r\n<br />\r\n<span style=\"color:#34495E;font-family:&quot;font-size:14px;background-color:#FFFFFF;\">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 竭诚的欢迎各界友人光临指导，真诚合作，共创美好明天！</span>\r\n<div>\r\n	<br />\r\n</div>', '河北省石家庄市晋州市邵庄村', '生产商/经销商', '50-100人', '100万人民币', '2016-08-06 00:00:00', '有限责任公司(自然人独资)', '锌锭、铝锭加工销售；氧化锌、铜锭、铅锭、锌矿粉、锌渣销售(依法须经批准的项目，经相关部门批准后方可开展经营活动).');

-- ----------------------------
-- Table structure for contact
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
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of contact
-- ----------------------------
INSERT INTO `contact` VALUES ('1', '张英民', '0310-5555555', 'sjzqfjs@163.com', '13014334123', '0310-5555555', '1203706884', '115.028155', '37.992195');

-- ----------------------------
-- Table structure for honor
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
  `views` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of honor
-- ----------------------------
INSERT INTO `honor` VALUES ('1', '荣誉1', '6', '颁发机构1', '2016-12-19 00:00:00', '2017-12-19 00:00:00', '2016-12-19 00:00:00', '2');
INSERT INTO `honor` VALUES ('2', '证书荣誉', '3', '发证机构1', '2016-12-21 00:00:00', null, '2016-12-21 00:00:00', '2');

-- ----------------------------
-- Table structure for news
-- ----------------------------
DROP TABLE IF EXISTS `news`;
CREATE TABLE `news` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `content` text,
  `createtime` datetime DEFAULT NULL,
  `status` int(1) DEFAULT '1',
  `settop` int(1) DEFAULT '0',
  `views` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of news
-- ----------------------------
INSERT INTO `news` VALUES ('1', '【对方撤回了一条消息】教你如何查看已撤回的微信消息~！', '&nbsp; &nbsp; &nbsp; &nbsp; 不知道大家有没有这样的感觉，有时候你在给朋友发微信时，对方可能趁你不注意发了消息然后撤回了。比如... 好想知道女神跟我说了什么，是同意了吗?还是拒绝了?我要不要直接打电话过去?万一要是拒绝了我还跟她打电话岂不是很没面子?好吧我顿时感觉这个消息撤回功能简直是人类技术文明的倒退啊!这样让人心痒痒的还不如当没接到过这条消息啊。不过作为一个技术控，绝不能就此知难而退，为了研究出女神到底说了什么，我研究了一晚防撤回的方法，所以今天打算来分享给大家。ps：只针对iPhone用户防文字撤销<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 好了，言归正传。首先我们来打开iPhone的设置，选中通知栏。<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; ▼ &nbsp; &nbsp;把微信设置为允许通知并打开所有通知选项相信看到这里，机智的小伙伴已经知道该从哪里查看撤回的消息了，没错就是通知栏!<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 请大家不要在意图片里的细节，毕竟这只是一篇正经的教程帖。 &nbsp; &nbsp; &nbsp; &nbsp;<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; 如果你按照这个方法还是无法查看到撤回消息的话，那一定是微信内的设置问题了，可以打开微信设置里的新消息通知，然后打开通知显示消息详情就好啦~~<br />\r\n<br />\r\n&nbsp; &nbsp; &nbsp; &nbsp; PS:最后提醒一下，如果你的女票爱查岗的话请谨慎打开此功能，不然在关键时候弹出一条不合时宜的消息的话，可别怪我没提醒你有生命危险啊~<br />', '2016-09-15 00:00:00', '1', '1', '0');
INSERT INTO `news` VALUES ('2', '博鑫丰关注：美元走强 金价小幅下行【粗锌锭生产厂家】', '<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	周四(4月9日)金价连续第三个交易日下跌，美元的走强和美联储会议纪要继续为黄金施压，金价再度回到了1200美元/盎司下方，周五亚市开后，金价在1194美元/盎司附近波动。\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	美国劳工部(DOL)周四公布的数据显示，美国4月4日当周季调后初请失业金人数四周均值为282250，创下2000年6月来最低。\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	纽约联储主席杜德利(William Dudley)周三表示，他相信美联储2015年加息是合理的，如果通胀和就业继续改善，今年6月加息仍有可能。\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	而美联储理事鲍威尔(Jerome Powell)周三也称，他预计经济将支持2015年稍后时期的加息，将关注当前的和6月的数据表现来决定加息是否是适宜的，美联储可能会在达到通胀目标和就业目标之前开始加息。\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	LOGIC Advisors的联合创始人Bill O\"Neill说：“现在黄金市场的现金是流出的，这对黄金市场很不利。”\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	O\"Neill指出了基金对黄金的兴趣已经实物黄金需求。<span>——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	本周初金价受到上周发布的表现糟糕的三月非农数据影响，一度涨至1224美元/盎司的7周高点，但此后回落。\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	瑞士宝盛(Julius Baer)的分析师Carsten Menke表示：“美联储非农数据公布之后所发生的情景更像是意外，因为人们认为美联储会推迟升息，于是做出了大量的空头回补。”\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	Menke说：“黄金的长期趋势仍然是下行的，因为升息最终是会发生的。”<span>——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	德国交易所(Deutsche Boerse)的高级分析师Tony Walters表示：“更大范围的市场看起来对升息更舒服，或者对升息的可能更舒服，因此贵金属会在这样的环境中遭遇困难。”\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	美元指数触及三周高点，对黄金不利。<span>——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	实物黄金需求继续疲软，不过中国市场从小幅的金价贴水回升到了1美元/盎司左右。\r\n</p>', '2016-12-16 00:00:00', '1', '1', '0');
INSERT INTO `news` VALUES ('3', '博鑫丰关注：英央行继续维持利率于历史低位【粗锌锭生产厂家】', '<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	周四英国央行公布最新利率决议，维持基准利率0.5%和资产购买规模3750亿英镑不变，一如市场预期。自全球金融危机爆发以来，英国央行一直将基准利率维持在0.5%的历史低位。<span>——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	消息公布之后，英镑对美元反应平淡：\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	在全球央行集体宽松的背景之下，英国央行对于货币政策前景并无统一意见。英国央行首席经济学家Andrew Haldane三月中旬曾表示，英国加息和降息的概率接近于相等。但是行长卡尼在三月末参加德国央行举行的研讨会时称，下一次调整基准利率将是加息。\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	近期英国数据显示英国基本面相对靠稳定，而政治因素则是英镑短期最大潜在风险。周内公布的英国3月服务业PMI升至58.9，预期57.0，前值56.7；英国3月制造业PMI则为54.4，预期54.3，前值54.1。<span>——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	期权市场市场价格显示，一个月英镑兑美元隐含波动率升至13.60%，为2011年9月以来最高位。由于英国5月7日选举日逐渐接近，汇率剧烈波动风险的成本跳升。近期民调显示，执政的保守党和英国反对党工党的支持率很接近，这使英国可能出现无多数党的议会，并预示不确定性将持续很久。<span>——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>\r\n</p>', '2016-12-16 00:00:00', '1', '1', '1');
INSERT INTO `news` VALUES ('4', '博鑫丰关注：IMF：全球经济或经历“颠簸旅程”【粗锌锭生产厂家】', '<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	周四，国际货币基金组织（IMF）总裁拉加德（Christine Lagarde）在华盛顿发表讲话，认为全球经济面临长期低速增长，沉重债务以及高失业率的风险。\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	尽管目前全球经济温和增长，大致与过去三十年的平均速度相若，但据《华尔街日报》报道，IMF总裁拉加德在周四发表讲话指出，由于政策制定者未能采取适当行动刺激产出，全球经济正陷入长期的低增长期，并面临沉重债务和高失业率。<span>——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	拉加德指出，2015年全球经济增长接近于2014年的3.4%，但这不足以弥补经济衰退期带来的伤害，包括一些国家50%的青年人失业率。她认为，尽管过去六个月全球经济风险有所下降，但世界金融体系面临的威胁已经上升，特别是在旷日持久的低利率甚至负利率时代。\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	“低利率培养了部分投资者更高的风险承受能力。”拉加德认为，持续低利率可能导致市场定价过高，人寿保险公司和固定收益养老基金也将很快面临偿付能力的挑战。\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	“我们必须防止‘新的平庸’成为‘新的现实’，”拉加德在讲话中提到，“必须利用所有政策空间和杠杆工具。”为了保持全球经济的长期稳定，IMF建议大国加强政策讨论，以弥补国际金融架构的不足。<span>——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	同时，拉加德警告说，“如果所有人同时蜂拥退出，流动性可能会迅速蒸发－例如，美联储开始加息，可能会为市场带来一段‘颠簸旅程’。”<span>——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	IMF的基金经济学家预计美国和英国经济复苏强劲，并预期，得益于“受人欢迎”的欧洲央行支持措施，欧元区前景将有所改善。但是，他们不那么看好很多主要的新兴市场经济体，包括中国，巴西和俄罗斯的增长前景。下周二，IMF计划更新其1月发布的全球经济增长前景预测。\r\n</p>', '2017-01-05 00:00:00', '1', '1', '8');
INSERT INTO `news` VALUES ('5', '博鑫丰关注：沪铜短期调整 上行可能性大【粗锌锭生产厂家】', '<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">1、行情回顾</span><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">SMM网讯：上海期铜价格小幅下跌。主力6月合约，以43310元/吨收盘，下跌270元,跌幅为0.62%。当日15：00伦敦三月铜报价6004.00美元/吨，上海与伦敦的内外比值为7.21，高于上一交易日7.20，上海期铜跌幅小于伦敦市场。全部合约成交421534手,持仓量增加13926手至819364手。主力合约成交238872手,持仓量增加7112手至379268手。上海有色金属网1#铜最新报价42430-42550元/吨，升贴水（贴）140-（贴）60。</span><span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">2、盘面分析</span><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">长期：跌破长期支撑，震荡下跌</span><br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">中期：触底反弹</span><br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">短期：窄幅震荡</span><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">3、行情信息</span><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">现货方面，今日上海电解铜现货对当月合约报升水50元/吨-升水90元/吨，平水铜成交价格43390元/吨-43460元/吨，升水铜成交价格43410元/吨-43490元/吨。沪期铜弱势运行，持货商心态各异，部分投机商入市吸收低价货源，现铜低价货源减少，升水被逐步继续推升，随后导致仓单持有者大量出货，市场仓单流通量增加，而随着平水铜与好铜无价差，部分投机商入市换货增加，现铜整体供应充裕，下游在铜价下跌之际逢低接货量增加，成交活跃度较昨日略有改善，成交先扬后抑。产业方面，据外电3月2日消息，智利矿业部长Aurora Williams周一称，智利政府仍维持2015年铜产量预估在600万吨不变，这将较2014年水平增加5%。他称，国际油价下滑将有助于高成本产商维持产出增势。他还表示，智利政府将采取措施帮助小型矿产商应对高昂生产成本问题。卢萨卡2月23日消息，赞比亚总统Edgar Lungu在Facebook表示，一旦该国的Lumwana铜矿被Barrick黄金公司闲置，则赞比亚政府或需考虑为该矿的另外一个所有者--国有公司ZCCM-IH寻找新的战略合作伙伴。据东京1月20日消息，日本电线电缆制造商协会周二报告，日本12月铜电缆发货量(含销售和出口)较上年同期下滑2.9%至6万吨。宏观方面，中国人民银行决定，自2015年3月1日起下调金融机构人民币贷款和存款基准利率。金融机构一年期贷款基准利率下调0.25个百分点至5.35%;一年期存款基准利率下调0.25个百分点至2.5%，同时结合推进利率市场化改革，将金融机构存款利率浮动区间的上限由存款基准利率的1.2倍调整为1.3倍;其他各档次存贷款基准利率及个人住房公积金存贷款利率相应调整. 周一，美国供应管理协会（ISM）公布的数据显示，美国2月ISM制造业PMI 52.9，不及预期的53，连续第四个月下跌，创13个月新低。美国2月制造业扩张速度较1月再度放缓。</span><span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">4、操作建议</span><br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">昨日沪铜窄幅震荡，基本面供给虽然继续宽松，美元企稳，但是短期智利干旱，节后下游备库存意愿增强，一带一路政策的实施，央行降低二套房首付比例等诸多利多因素对对铜价形成一定支撑，总体而言我们认为沪铜短期继续处于上升态势，操作上主力合约1506多单持有，止损42900。</span><span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>', '2017-01-02 00:00:00', '1', '1', '2');
INSERT INTO `news` VALUES ('6', '博鑫丰关注：印媒:中国将向印尼基础设施投资500亿美元【粗锌锭生产厂家】', '<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	据《印度时报》报道，印度尼西亚国有企业部长莉尼·苏马尔诺9日表示，中国政府已承诺将向印度尼西亚基础设施建设项目投资500亿美元，一些项目可能涵盖铁路，电厂以及收费公路等。<span>——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>\r\n</p>\r\n<p style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">\r\n	据印尼《国际日报》12月11日报道，印尼国家发展计划部部长助理德迪日前在出席区域建设统筹协调会议时称，政府准备从明年开始五年内落实国家中期建设计划，主要在基础设施领域，共有12项建设项目，包括：建设2650公里普通级公路和1000公里高速公路，维修46770公里公路；兴建15个机场，增加20架运输飞机，在6个地点建立物流运输机场；新建24个港口，增加26艘货轮、500艘民用客船和6艘牲畜运输船；在爪哇、苏门答腊、苏拉威西和加里曼丹建设全长3258公里的铁路网；建60个轮渡码头，增加50艘渡轮；在20个城市建设快速巴士系统；新建49个水库和33个水力发电站，并为约100万公顷农田建立灌溉系统；完善市县区宽带网络；在227个市县区建设污水处理系统，为430个市县区提供污水处理服务；建设5257个公寓楼，为50多万家庭提供住宅；在部分城市建设净水供应系统，使2140万户家庭受惠；增加3500万千瓦电力供应，建设两座大型炼油厂，建立多个液化燃气供应站，为100户普通家庭和60万户渔民提供液化燃气供应。<span>——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a>\r\n</p>', '2016-12-28 00:00:00', '1', '0', '1');
INSERT INTO `news` VALUES ('7', '博鑫丰关注：宏观面牵制有色金属“绿肥红瘦”【粗锌锭生产厂家】', '<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">昨日，有色金属板块“绿肥红瘦”，除沪铅结束两日跌势微涨0.75%外，其余品种均收绿盘。沪铜、沪铝、沪锌主力1506合约及沪镍、沪锡主力1507合约分别下跌0.62%、1.01%、0.37%、0.16%、1.19%。</span><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">有色金属以铜为代表，具有较强的金融属性。昨日的表现从宏观面来看并不难解释。分析人士认为，受隔夜原油大跌和美元指数反弹影响，有色金属尤其是铜、铝、锌跟随回落；同时美元升值和能源价格大幅下滑令美联储陷入两难的境地，北京时间周四凌晨公布的3月会议纪要显示美联储官员对6月加息存分歧。</span><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">“由于短期方向不明朗，铜市交投低迷萎缩，全天沪期铜累计总成交量仅42万手，总持仓则维持在82万手左右，多空双方继续对峙胶着。”国信期货研发部有色金属负责人顾冯达表示。</span><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">顾冯达认为，目前市场对加息时点的预期也存在分歧，虽然6月加息的可能性仍存在，但由于经济数据疲软及美元指数升值的压力，加息的门槛可能提高。从近阶段市场表现来看，市场逐渐倾向“美联储将于9月加息”的预期，同时预期国内将有更多利好措施出台。“铜市在传统消费旺季下基差走强，国内精铜货源有所收紧，虽然多空仍僵持对峙，但预计短期铜市震荡抗跌，43000元/吨一线支撑确认后将迎来反击机会。”</span><span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">现货方面，4月9日上午，上海电解铜现货对当月合约报升水50元/吨—90元/吨，平水铜成交价格43390元/吨—43460元/吨，升水铜成交价格43410元/吨-43490元/吨。</span><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">在目前宏观方向不明朗、基本面处于传统消费旺季的情况下，有色金属整体仍存有效反弹支撑。</span><span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">就铜市而言，市场人士称，目前铜整体供应充裕，下游在铜价下跌之际逢低接货量增加，成交活跃度略有改善，部分投机商入市吸收低价货源，现铜低价货源减少，升水被逐步继续推升。</span><span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">美尔雅期货有色金属分析师王艳红表示，目前铅在此轮行情中一枝独秀主要在于铅库存很低，且与锌、铜、镍等相比，隐形库存也要低很多，同时市场需求缓慢回升也将提振铅价。</span><span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">——</span><a href=\"http://ebdapeng16688.smm.cn/sell/itemid-3092508.shtml\">粗锌锭生产厂家</a><br />\r\n<br />\r\n<span style=\"font-family:Verdana, Arial;font-size:13px;background-color:#FFFFFF;\">王艳红进一步分析称，镍、锌价格短期仍不看好，其背后逻辑主要是下游企业开工率低、现货市场成交寡淡，市场悲观情绪会进一步拖累价格。而对铜价则不宜过分悲观，当前沪铜多空僵持对峙，在投资者摆脱油价暴跌的影响之后，短期内可能将出现反弹，关注43000元/吨一线支撑。“整体来看有色系列各品种呈现外强内弱的局面，建议投资者除关注美联储举动、原油走势外，需密切跟踪各金属企业开工率和现货成交情况。”</span>', '2016-10-10 00:00:00', '1', '1', '0');

-- ----------------------------
-- Table structure for notice
-- ----------------------------
DROP TABLE IF EXISTS `notice`;
CREATE TABLE `notice` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) DEFAULT NULL,
  `content` text,
  `createtime` datetime DEFAULT NULL,
  `status` int(1) DEFAULT '1',
  `settop` int(1) DEFAULT '1',
  `views` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of notice
-- ----------------------------
INSERT INTO `notice` VALUES ('1', '公司公告', '      本公司主要经营有色金属以及相关制品，本着以人为本，以质取胜，竞争求生存，合作求发展的宗旨，为广大用户提供优质产品，欢迎来电洽谈！！！', '2016-12-19 00:00:00', '1', '1', '0');

-- ----------------------------
-- Table structure for photo
-- ----------------------------
DROP TABLE IF EXISTS `photo`;
CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `photo_name` varchar(100) DEFAULT NULL,
  `photo_main_id` int(11) DEFAULT NULL,
  `createtime` datetime DEFAULT NULL,
  `views` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of photo
-- ----------------------------
INSERT INTO `photo` VALUES ('1', '新增相册', '31', '2016-12-21 00:00:00', '13');
INSERT INTO `photo` VALUES ('2', '告别2016', '34', '2017-01-06 00:00:00', '3');

-- ----------------------------
-- Table structure for picture
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
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of picture
-- ----------------------------

-- ----------------------------
-- Table structure for product
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
  `detail_info` text,
  `publish_date` datetime DEFAULT NULL,
  `expiry_date` datetime DEFAULT NULL,
  `views` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '千甫金属 - 锌锭', '4', '#1', '齐全', '千甫金属', '100', '<p>\r\n	&nbsp; &nbsp; 产品详情：\r\n</p>\r\n<p>\r\n	&nbsp; &nbsp; 1.质量保证\r\n</p>\r\n<p>\r\n	&nbsp; &nbsp; 2.信誉保证\r\n</p>', '2016-12-21 00:00:00', null, '6');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `displayname` varchar(100) DEFAULT NULL,
  `status` int(1) DEFAULT '1',
  `createtime` datetime DEFAULT NULL,
  `lastlogintime` datetime DEFAULT NULL,
  `avatar` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'zhangyingmin', 'f1f35b4043a7eb7ec3581f15735e0cad', '系统管理员', '1', '2016-12-12 00:00:00', '2016-12-15 00:00:00', 'img/avatar/avatar-iteming.png');

-- ----------------------------
-- Table structure for website
-- ----------------------------
DROP TABLE IF EXISTS `website`;
CREATE TABLE `website` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `siteurl` varchar(100) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `keywords` varchar(100) DEFAULT NULL,
  `logo` varchar(100) DEFAULT NULL,
  `carousel` varchar(500) DEFAULT NULL,
  `icp_num` varchar(100) DEFAULT NULL,
  `support_name` varchar(100) DEFAULT NULL,
  `support_url` varchar(100) DEFAULT NULL,
  `views` int(11) DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of website
-- ----------------------------
INSERT INTO `website` VALUES ('1', 'http://127.0.0.1:3000/', '石家庄千甫金属制品有限公司', '公司主营：锌锭、铝锭加工销售；氧化锌、铜锭、铅锭、锌矿粉、锌渣销售', '锌锭、铝锭加工销售；氧化锌、铜锭、铅锭、锌矿粉、锌渣销售', '', '/img/uploads/1482471206062.jpg|/img/uploads/1482471215385.jpg|/img/uploads/1482473941854.jpg', '冀ICP备15016569号', 'iteming', 'http://www.iteming.wang/', '200');
