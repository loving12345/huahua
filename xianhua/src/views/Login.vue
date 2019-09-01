<template>
  <div class="app-login">
    <div style="text-align:left;margin:10px 10px;font-size:1.2rem" @click="goBack">X</div>
    <h1 style="font: 40px '方正舒体';color:#ff8000;margin:50px  0">huahua 仙花网</h1>
    <!-- <h1>123</h1> -->
    <!-- 1.用户名输入框 -->
    <mt-field :placeholder="unameholder" v-model="uname" style="border-bottom:1px solid #aaa;margin:5px 5px"></mt-field>
    <!-- 2.密码输入框-->
    <mt-field :placeholder="upwdholder" v-model="upwd" type="password"  style="border-bottom:1px solid #aaa;margin:5px 5px"> </mt-field>
    <div class="qq">
      <div>忘记密码</div>
      <div>注册账号</div>
    </div>
    <!-- 3.登录按钮 -->
    <mt-button size="large" @click="login" style="background:#ff8000;color:#fff">登录</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      unameholder:"请输入用户名",
      upwdholder:"请输入密码",
      uname:"",
      upwd:""
    }
  },
  methods:{
    goBack(){
      this.$router.push('/index')
    },
    login(){
      // console.log(123)
      // 功能：完成用户等录操作
      // 1.获取用户输入用户名
      var u=this.uname;
      // 2.获取用户输入密码
      var p=this.upwd;
      // console.log(u+" "+p)
      // 3.创建正则表达式验证用户名和密码
        // 3~12子母数字
      var reg=/^[a-z0-9]{3,12}$/i;
      // 4.用户验证失败  提示短消息
      if(!reg.test(u)){
        this.$toast("用户名格式不正确");
        return;    //失败停止执行
       }
      // 5.密码验证失败   提示短消息
      if(!reg.test(p)){
        this.$toast("密码格式不正确");
        return;
      }
      // 6.发送ajax请求 axios?
      var url="login" 
      var obj={uname:u,upwd:p}
      this.axios.get(url,{params:obj}).then(res=>{
        // 7.获取服务器返回结果
        // console.log(res);
        // 7.1登陆失败   提示
        if(res.data.code==-1){
          this.$toast("用户名和密码有误")
        }else{
          // 7.2：登录成功  跳转商品首页组件
          this.$router.push("/index");
        }
      })

    }
  }
}
</script>
<style scoped>
 .qq{
   display: flex;
   justify-content: space-between;
   margin: 10px;
   font-size:13px;
   color:#aaa;
 } 
</style>