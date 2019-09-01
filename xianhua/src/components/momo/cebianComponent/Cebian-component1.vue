<template>
  <div class="fen">
    <div class="tou">
      <img src="../../../assets/img/lunbo.jpg">
    </div>
    <div class="fen-imgs">
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen15.jpg"> 
          <p>鲜花</p>
        </a> 
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen12.jpg"> 
          <p>蛋糕</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen11.jpg"> 
          <p>永生花</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen16.jpg"> 
          <p>设计师款</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen17.jpg"> 
          <p>商务鲜花</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen13.jpg"> 
          <p>巧克力</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen19.jpg"> 
          <p>礼篮</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen18.jpg"> 
          <p>绿植花卉</p>
        </a>
      </div>
      <div>
        <a href="javascript:;">
          <img src="../../../assets/img/fen10.jpg"> 
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
    props:{
      // title:{type:String,default:""}
    }
  }
</script>

<style scoped>
.tou img{
  width:100%;
  height:140px;
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
.fen-imgs div a p{
  color:#000;
  font-size:14px;
}
</style>