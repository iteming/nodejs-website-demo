-- 在Mysql中取消外键约束
SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `cms_account`
-- ----------------------------
DROP TABLE IF EXISTS `cms_account`;
CREATE TABLE `cms_account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) DEFAULT NULL,
  `account` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `createTime` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;