<template>
  <div class="fen">
    <div class="tou">
      <!-- <img src="../../../assets/img/m_category_banner_flower.jpg"> -->
      <p> 浪漫告白·卡罗拉红玫瑰11枝</p>
    </div>
    <div style="text-align:left;margin:5px;font:1.2rem '方正舒体'">用途</div>
    <hr style="margin:0 5px">
    <div class="fen-imgs">
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/quan.png"> 
          <p>全部</p>
        </a> 
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen20.jpg"> 
          <p>蛋糕</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen21.jpg"> 
          <p>永生花</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen22.jpg"> 
          <p>设计师款</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen23.jpg"> 
          <p>商务鲜花</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen24.jpg"> 
          <p>巧克力</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen25.jpg"> 
          <p>礼篮</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen26.jpg"> 
          <p>绿植花卉</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen27.jpg"> 
          <p>企业团购</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{}
    },
    methods:{

    },
  }
</script>

<style scoped>
.tou{
  background-image:url('../../../assets/img/m_category_banner_flower.jpg');
  background-repeat: no-repeat;
  background-size:100% 100%; 
  z-index:0
}
.tou p{
  width:100%;
  height:6rem;
  color:darkblue;
  background:#aaa;
  opacity: 0.5;
  line-height: 5rem;
}
.fen{
  width:100%;
  min-width:100%;
}
.fen .fen-imgs{
  max-width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.fen-imgs div a img{
  width: 65px;
  height:65px;
  margin: 15px;
  margin-bottom:0;
}
.fen-imgs div:first-child a img{
  width: 50px;
  height:50px;
  margin-top:30px;
}
.fen-imgs div a p{
  color:#aaa;
  font-size:14px;
}
</style>