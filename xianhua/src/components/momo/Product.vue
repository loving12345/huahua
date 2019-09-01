<template>
  <div class="xiang">
    <van-notice-bar text="周末吾折天 海量尖货 认证龙头企业 14年品牌 啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊" left-icon="volume-o" />
    <van-grid :border="false" :column-num="5">
      <van-grid-item icon="flower-o" text="鲜花" />
      <van-grid-item icon="fire-o" text="永生花" />
      <van-grid-item icon="birthday-cake-o" text="蛋糕" />
      <van-grid-item icon="point-gift-o" text="礼品" />
      <van-grid-item icon="hotel-o" text="巧克力" />
    </van-grid>
    <div class="ti1">
      <img src="../../assets/img/shu.png" />
      <p> 一秒选花</p>
    </div>
    <div class="ti3">
      <div>
        <img src="../../assets/imgs/m_home_use_lover.png"/>
        <p>送恋人</p> 
      </div>
      <div>
        <img src="../../assets/imgs/m_home_use_elder.png" />
        <p> 送亲人</p>
      </div>
      <div>
        <img src="../../assets/imgs/m_home_use_friends.png" />
        <p>送朋友</p> 
      </div>
    </div>
    <div class="ti2">  
      <p>送恋人/爱情鲜花</p>
    </div>
    <div class="product-tou">
      <div class="goods-item" v-for="(item,i) of items" :key="i">
        <img :src="item.url">
        <div class="goods-items">
          <h4>{{item.b}}</h4>
          <p style="font-size:0.8rem;margin-right:5px;
        margin-top:5px">花语:{{item.hua}}</p>
          <p style="color:#faaf00;margin:11px 0">￥{{item.m}}</p>
          <mt-button type="danger" size="small">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <mt-button style="border:1px solid #000;margin:0.4rem">显示更多</mt-button>
    <div style="background:#ddd;width:100%;height:0.4rem"></div>
    <div class="ti2">  
      <p>送长辈鲜花</p>
    </div>
    <div class="product-tou">
      <div class="goods-item" v-for="(item,i) of items" :key="i">
        <img :src="item.url">
        <div class="goods-items">
          <h4>{{item.b}}</h4>
          <p style="font-size:0.8rem;margin-right:5px;
        margin-top:5px">花语:{{item.hua}}</p>
          <p style="color:#faaf00;margin:11px 0">￥{{item.m}}</p>
          <mt-button type="danger" size="small">加入购物车</mt-button>
        </div>
      </div>
    </div>
    <mt-button style="border:1px solid #000;margin:0.4rem">显示更多</mt-button>
    <div style="background:#ddd;width:100%;height:0.4rem"></div>
    <p class="floor">
      Copyright © 2005~2019 仙花网（中国鲜花礼品网）版权所有
      <br>
      中国仙花网领先品牌，鲜花速递专家！
      <br>
      深圳市信息技术有限公司
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      items:[
        {url:require("../../assets/img/tou1.jpg"),b:"一往情深--精品玫瑰礼盒",hua:"你的轻柔像阵微风，让我从容不迫，想让你知道，我对你始终一往情深。",m:"239.00"},
        {url:require("../../assets/imgs/20190824150538.jpg"),b:"不变的承诺",hua:"爱她，就送她一束99枝的玫瑰花！",m:"569.00"},
        {url:require("../../assets/imgs/20190824150647.jpg"),b:"一心一意--玫瑰11枝",hua:"11枝玫瑰，寓意一心一意！有情之人，天天是节。",m:"139.00"},
        {url:require("../../assets/imgs/20190824150603.jpg"),b:"甜美公主--白玫瑰22枝",hua:"再多一点点距离，我就能靠近你。清晰甜美的空气里，爱你到不能呼吸。",m:"369.00"},
        {url:require("../../assets/imgs/20190824150611.jpg"),b:"恋恋情深--11枝香槟玫瑰",hua:"喜欢像是一阵风，而爱你是细水长流",m:"198.00"},
        {url:require("../../assets/imgs/20190824150637.jpg"),b:"99枝玫瑰赠德芙心语巧克力",hua:"不管时空怎么转变，世界怎么改变，你的爱总在我心间。",m:"629.00"},
        {url:require("../../assets/imgs/20190824150554.jpg"),b:"甜蜜纪事--玫瑰共50枝",hua:"甜蜜幸福从这里起航……",m:"419.00"},
      ]
    };
  }
};
</script>
<style scoped>
.xiang {
  margin-top: -11px;
}
.ti1{
  display: flex;
  text-align: left;
  margin-left:5px;
  font-size:1.3rem;
  font-family:'方正舒体'
}
.ti1 img{
  height: 15px;
}
.ti2{
  margin-top:5px; 
  font-size:1.3rem;
  font-family:'方正舒体'
}
.van-grid-item__content van-grid-item__content--center{
  font-size:13px ;
  font-family:'方正舒体' 
}
/* 最外层样式 */
.goods-item{
  /* width:100%; */
  border:1px solid #ccc;
  border-radius: 5px;
  margin: 2px 0;
  padding:2px;
  display: flex;
  min-height:150px;
}
.goods-item img{
    width:40%;
    margin-right:10px; 
}
.goods-items{
  width:70%;
  margin: 10px 0;
  flex:1;
  font-size:1rem;
  /* line-height: 1.8; */
  text-align: left;
}
.ti3{
  width:100%;
  display: flex;
}
.ti3 div img{
  width:90%
}
.ti3 div p{
  transform:translateY(-27px);
}
.floor{
  margin-top:1rem;
  font-size:0.4rem
}
</style>