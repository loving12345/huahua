// hua /app.js  node 程序
// 1.加载第三方模块
const express =require("express");
const cors =require("cors");
const mysql =require("mysql");
const session =require("express-session");
// 2.配置数据库连接池
var pool=mysql.createPool({
  host:"127.0.0.1",    //数据库地址
  user:"root",         //数据库用户名
  password:"",        //数据库密码
  port:3306,           //数据库端口
  database:"hua",       //数据库名称
  connectionLimit:15   //数据库数量
})
var server =express();
// 3.配置跨域模块
server.use(cors({
  // 允许跨域访问程序地址列表
  origin:["http://127.0.0.1:8080","http://localhost:8080"], 
  credentials:true   //请求验证
}))
// 4.配置session 模块
server.use(session({
  secret:"128位字符串",   //安全字符串
  resave:true,   //请求时要更新数据
  saveUninitialized:true,   //保存初始数据
}));
// 4.1:配置项目的静态目录
server.use(express.static("public"));
// 5.启动监听3000
server.listen(3000);






// 功能一：完成用户登录操作
server.get("/login",(req,res)=>{
  // 1.参数：获取获取网页传递两个数据 uname upwd
  var uname=req.query.uname;
  var upwd=req.query.upwd;
  // 2.sql :查询sql语句
  var sql="SELECT id FROM hua_login WHERE uname=? AND upwd=md5(?)";
  // 3.json :{code:1,msg:"登陆成功"}
  pool.query(sql,[uname,upwd],(err,result)=>{
    // 执行sql 语句回调函数
    if(err)throw err;
    if(result.length==0){
      res.send({code:-1,msg:"用户名或密码有误"});
    }else{  //登陆成功
      // 1.将登陆成功凭据保存session
      // result=[{id:1}]
      req.session.uid=result[0].id; 
      console.log(req.session);
      // 2.将成功消息发送脚手架
      res.send({code:1,msg:"登陆成功"});
    }
  })
})


// // 功能二： 分页查询商品列表
// // 1.接收请求方式 GET 请求地址  /product
// server.get("/product",(req,res)=>{
//   // 2.接收客户端两个参数   pno 页码   pageSize  页大小
//   var p=req.query.pno;
//   var ps=req.query.pageSize;
//   // 3.设置参数默认值   pno:1      pageSize:4 
//   if(!p){p=1}
//   if(!ps){ps=4}
//   // 4.创建一个变量  offset 计算数据库偏移量
//   var offset=(p-1)*ps;
//   // 5.对pageSize 转换整型?  nodejs  报错
//   ps=parseInt(ps);
//   // 6.创建sql语句  
//   var sql="SELECT lid,price,lname,img_url FROM xz_laptop LIMIT ?,?";
//   // 7.通过连接池发送sql语句
//   pool.query(sql,[offset,ps],(err,result)=>{
//     if(err)throw err;
//     // 8.获取数据库返回的查询结果
//     // 9.将查询的结果发送客户端
//     res.send({code:1,msg:"查询成功",data:result});
//   });
// })



// // 功能三： 将指定商品添加到购物车
// // 此攻能先行条件先登录
// // 1.GET addcart
// server.get("/addcart",(req,res)=>{
//   // 2.参数
//   // 获取当前用户id值
//   var uid=req.session.uid;
//   // 如果当前用户没有登陆
//   if(!uid){
//     // 出错  返回错误消息
//     res.send({code:-1,msg:"请先登录"});
//     return;
//   }
//   // 获取商品编号   价格  名称
//   var lid=req.query.lid;
//   var price=req.query.price;
//   var lname=req.query.lname;
//   // 3.查询指定用户是否购买过此商品 
//   var sql="SELECT id FROM xz_cart WHERE uid=? AND lid=?";
//   pool.query(sql,[uid,lid],(err,result)=>{
//     if(err)throw err;
//     // 4.没有购买过此商品  添加
//     var sql="";
//     if(result.length==0){
//       sql=`INSERT INTO xz_cart VALUES (null,${lid},${uid},1,'${lname}',${price},'01.jpg')`;
//     }else{
//       sql=`UPDATE xz_cart SET count=count+1 WHERE uid=${uid} AND lid=${lid}`;
//     }
//     // 5.购买过此商品  更新
//     pool.query(sql,(err,result)=>{
//       if(err)throw err;
//       console.log(result);
//       res.send({code:1,msg:"添加成功"});
//     })
//     // 6.json
//   })
// })



// // 功能四：查询当前登录用户购物车信息
// // 此功能先行条件先登录
// // 1.请求方式  GET 请求地址  /cart
// server.get("/cart",(req,res)=>{
//   // 2.获取uid 并且判断如果没有请登录
//   var uid=req.session.uid;
//   if(!uid){
//     res.send({code:-1,msg:"请登录"})
//     return;
//   }
//   // 3.创建sql 查询用户购物车内容
//   var sql="SELECT id,lid,lname,price,count,img_url FROM xz_cart WHERE uid=?"
//   // 4.获取返回数据并返回客户端
//   pool.query(sql,[uid],(err,result)=>{
//     if(err)throw err;
//     res.send({code:1,msg:"查询成功",data:result});
//   })


// })


// // 功能五： 删除购物车中指定一个商品
// server.get("/del",(req,res)=>{
//   // 1.获取参数   id  购物车id
//   var id=req.query.id;
//   // 2.创建sql语句   注意 ：  大小写【表名/列名】
//   var sql="DELETE FROM xz_cart WHERE id=?"
//   // 3.json 
//   pool.query(sql,[id],(err,result)=>{
//     if(err)throw err;
//     // console.log(result);
//     // 4.判断条件  日过sql insert/delete/update  执行成功条件：影响行数
//     if(result.affectedRows>0){
//       res.send({code:1,msg:"删除成功"});
//     }else{
//       res.send({code:-1,msg:"删除失败"});
//     }
//   })
// })
  
// //功能六：删除购物车中指定多个商品
// server.get("/delM",(req,res)=>{
//   // 1.参数
//   var ids=req.query.ids;
//   // 2.sql
//   var sql=`DELETE FROM xz_cart WHERE id IN (${ids})`;
//   // 3.json
//   pool.query(sql,(err,result)=>{
//     if(err)throw err;
//     // 如果影响行数大于0 表示执行成功
//     if(result.affectedRows>0){ 
//       res.send({code:1,msg:"删除成功"});
//     }else{
//       res.send({code:-1,msg:"删除失败"});
//     }
//   })
// })