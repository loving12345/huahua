#vue_server_00  创建目录
#要单独创建目录不要放在手脚架项目中
#设置客户端链接服务器的编码
SET NAMES UTF8;
DROP DATABASE IF EXISTS hua;
#创建数据库  设置储存编码
CREATE DATABASE hua CHARSET=UTF8;
#1.进入数据hua
USE hua;
#2.创建表 hua_login
CREATE TABLE hua_login(
  id INT PRIMARY KEY AUTO_INCREMENT,
  uname VARCHAR(50),
  upwd VARCHAR(32)
);
#3.添加两条测试数据
INSERT INTO hua_login VALUES(null,"tom",md5('123'));
INSERT INTO hua_login VALUES(null,"mimi",md5('123'));

