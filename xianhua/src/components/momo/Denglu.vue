<template>
  <div style="background:#ccc">
    <div class="tou">
      <span>hi,欢迎来到仙花网</span>
      <button class="tou-btn" @click="myLoad">登录/注册</button>
    </div>
    <div class="tt"> 
      <div style="margin:0 6px">
        <div class="tt1">
          <div>我的订单</div>
          <div>全部订单></div>
        </div>
        <!-- <hr> -->
        <van-grid :column-num="3">
          <van-grid-item icon="card" text="代付款"/>
          <van-grid-item icon="gift-card" text="今日配送"/>
          <van-grid-item icon="smile-comment" text="待评价"/>
        </van-grid>
      </div>
      <van-grid :column-num="4" style="margin:6px">
        <van-grid-item icon="coupon-o" text="优惠券"/>
        <van-grid-item icon="paid" text="权益卡"/>
        <van-grid-item icon="gold-coin-o" text="余额"/>
        <van-grid-item icon="gem-o" text="会员积分"/>
        <van-grid-item icon="location-o" text="收货地址"/>
        <van-grid-item icon="gift-card-o" text="生日纪念提醒"/>
        <van-grid-item icon="like-o" text="我的收藏"/>
        <van-grid-item icon="clock-o" text="浏览记录"/>
      </van-grid>
      <van-grid :border="false" :column-num="4" class="zui">
        <van-grid-item icon="service-o" text="联系客服" />
        <van-grid-item icon="question-o" text="帮助中心" />
        <van-grid-item icon="info-o" text="关于花礼" />
        <van-grid-item icon="setting-o" text="设置" />
      </van-grid>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{}
  },
  methods: {
    myLoad(){
      this.$router.push('/login')
    }
  },
}
</script>
<style scoped>
.tou{
  background:url('../../assets/imgs/to.png');
  width:100%;
  height:100px;
  /* z-index:-1 */
}
.tou-btn{
  width: 7rem;
  height:2rem;
  position: absolute;
  top:2rem;
  left:9.5rem;
  font-size: 15px;
  background: #fff;
  outline: transparent;
  border-radius: .8rem;
  border: transparent; 
}
.zui{
  border:1px solid #ccc;
  border-radius: 6px;
  margin: 6px;
}
.tt{
  margin-top:-1.5rem;
}
.tt1{
  /* width:100%; */
  height:44px;
  border:1px solid #ccc;
  border-top-left-radius: 2em 0.5em;
  border-top-right-radius: 2em 0.5em;
  display: flex;
  justify-content:space-between;
  line-height: 3rem;
  padding:0 1.2rem;
  background:#fff;
  font-size:0.8rem
}
</style>