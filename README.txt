Nodesjs开发的一款完整的，带前台和后台的企业网站demo
预览地址：http://sjzqfjs.com/


安装方式：
把文件内的 install.sh 和 NodeTest.zip 上传至 Linux服务器的  /home 目录下。

执行命令给 install.sh 权限，命令如下：
chmod 777 install.sh

修改 install.sh 里的 mysql连接帐号密码。

执行
cd /home
./install.sh

开始安装！

服务器需要安装的配置： nodejs, npm, mysql。

修改  NodeTest/routes/jdbc.js 文件夹内的 mysql 连接帐号密码。






update 2017.01.10 v0.1
update connect: 添加密码加密，默认密码为 zym123456
