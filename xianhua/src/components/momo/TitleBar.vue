<template>
  <div class="page-head">
    <!-- 顶部导航条 -->
    <div @click="add3" class="imgdiv">
      <img :src="leftFirstImg" style="width:25px; margin-right:20px;" >
    </div>
    <!-- 左侧报存一个字符串 -->
    <span style="text-align:center;font-family:'方正舒体';color:#ff8000;font-weight:bold;font-size:25px">{{leftTitle}}</span>
    <div class="right-head">
    <!-- 右侧保存1张图片 -->
      <div @click="search" class="imgdiv">
        <img :src="rightFirstImg" style="width:20px;margin-right:20px">
      </div>
    <!-- 图片绑定点击事件 -->
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {}

  },
  // 声明接收父组件传递的数据
  props:{
    leftTitle:{default:""},   //第一个数据 ： 字符串
    rightFirstImg:{default:""}, 
    leftFirstImg:{default:""}, 
    search:{type:Function},    //声明函数：类型捡测
    add3:{type:Function},   
  },
}
</script>
<style scoped>
  /* 1.scoped 防止样式冲突 */
  /* 自动为选择器加一随机数 */
    /* 2.最外层父元素 */
  .page-head{
    display: flex;    /*移动端项目首选布局flex*/
    position: fixed;   /*顶部导航条固定定位*/
    z-index: 999;   /*显示在元素上边*/
    width:100%;   /*宽度与父元素相同*/
    justify-content: space-between; /*子元素两端对齐*/
    align-items: center;  /*垂直剧中*/
    background-color: #3e3a39;
    height: 48px;
    padding-left:7px;   /*内边距*/
    padding-right:7px;  
    color:#fff; 
    font-size:18px;
}
  /* 3.右侧图片 */
  .right-head{
    display: flex;   /*子元素水平排列*/
  }
  /* 4.搜索图片单独处理 */
  .imgdiv{
    display: flex;  /*弹性布局*/
    align-items: center;  /*垂直剧中*/
    height:48px;  
  }
</style>