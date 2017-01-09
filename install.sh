#!/bin/bash

echo "  >>---------- 开始安装 ----------"

cd /home/

rm -rf nodejs
mkdir nodejs
cd /home/
cp NodeTest.zip /home/nodejs/
cd /home/nodejs/
unzip NodeTest.zip
cd /home/nodejs/NodeTest

echo "  >>---------- 开始执行mysql ----------"
mysql -uroot -p6sL9lqEt --default-character-set=utf8 -e "
drop database if exists node_cms;
create database node_cms;
use node_cms;
source /home/nodejs/NodeTest/doc/install.sql"

echo "  >>---------- 执行mysql结束 ----------"

cd /home/nodejs/NodeTest

: routes/jdbc.js w! "var mysql = require('mysql');
var pool = mysql.createPool({
    host: '127.0.0.1',
    port: '3306',
    user: 'root',
    password: '6sL9lqEt',
    database: 'node_cms'
});
exports.pool=pool;"

chmod 777 start.sh
./start.sh

echo "  >>---------- 安装结束 ----------"
