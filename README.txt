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