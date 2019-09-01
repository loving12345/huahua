<template>
  <div class="page-wrap">
    <!-- 顶部导航 -->
    <titlebar
      leftTitle="仙花网"
      :leftFirstImg="require('../assets/img/fen.png')"
      :rightFirstImg="require('../assets/img/sou.png')"
      :search="mysearch"
      :add3="myadd3"
    ></titlebar>
    <!-- 1.首页面板 -->
    <mt-tab-container v-model="active" style="margin-top:48px">
      <mt-tab-container-item id="message">
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
          <mt-swipe-item v-for="(item,i) of items" :key="i">
            <router-link :to="item.to">
              <img :src="item.src" style="width:100%" />
            </router-link>
          </mt-swipe-item>
        </mt-swipe>
        <product/>
      </mt-tab-container-item>
      <!-- 2.分类面板 -->
      <mt-tab-container-item id="contact">
        <!-- 分类侧边栏 -->
        <Cebian></Cebian>
        <!-- 分类侧边栏结束 -->
      </mt-tab-container-item>
      <!-- 3.购物车面板 -->
      <mt-tab-container-item id="find">
        <gouwu></gouwu>
      </mt-tab-container-item>
      <!-- 4.我的面板 -->
      <mt-tab-container-item id="me">
        <denglu></denglu>
      </mt-tab-container-item>
    </mt-tab-container>
    <!--底部选项卡-->
    <mt-tabbar v-model="active" fixed>
      <!-- 第一个按钮 -->
      <!-- @click.native="aa" -->
      <mt-tab-item id="message" @click.native="changeState(0)">
        <tabbaricon
          :selectedImage="require('../assets/img/map_active.png')"
          :normalImage="require('../assets/img/map.png')"
          :focused="currentIndex[0].isSelect"
        ></tabbaricon>
        <!-- 按钮状态保存数组下标0 属性中 -->
        首页
      </mt-tab-item>
      <mt-tab-item id="contact" @click.native="changeState(1)">
        <tabbaricon
          :selectedImage="require('../assets/img/fenlei_active.png')"
          :normalImage="require('../assets/img/fenlei.png')"
          :focused="currentIndex[1].isSelect"
        ></tabbaricon>分类
      </mt-tab-item>
      <mt-tab-item id="find" @click.native="changeState(2)">
        <tabbaricon
          :selectedImage="require('../assets/img/gouwuche_active.png')"
          :normalImage="require('../assets/img/gouwuche.png')"
          :focused="currentIndex[2].isSelect"
        ></tabbaricon>购物车
      </mt-tab-item>
      <mt-tab-item id="me" @click.native="changeState(3)">
        <tabbaricon
          :selectedImage="require('../assets/img/profile_active.png')"
          :normalImage="require('../assets/img/profile.png')"
          :focused="currentIndex[3].isSelect"
        ></tabbaricon>我的
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<script>
import TitleBar from "../components/momo/TitleBar.vue";
import TabBarIcon from "../components/momo/TabBarIcon.vue";
import Cebian from "../components/momo/Cebian";
import Product from "../components/momo/Product";
import Gouwu from "../components/momo/Gouwu";
import Denglu from "../components/momo/Denglu";
export default {
  data() {
    return {
      activeKey: 0,
      active: "message",
      currentIndex: [
        { isSelect: true }, //0保存第一个按钮状态
        { isSelect: false }, //1报存第二个按钮状态
        { isSelect: false }, //2报存第三个按钮状态
        { isSelect: false } //3报存第四个按钮状态
      ],
      items: [
        { src: require("../assets/img/lunbo.jpg"), to: "javascript:;" },
        { src: require("../assets/img/lunbo1.jpg"), to: "javascript:;" },
        { src: require("../assets/img/lunbo2.jpg"), to: "javascript:;" }
      ]
    };
  },
  components: {
    titlebar: TitleBar,
    tabbaricon: TabBarIcon,
    product: Product,
    gouwu: Gouwu,
    denglu: Denglu,
    Cebian
  },
  methods: {
    mysearch() {
      // 子组件所需的处理函数
      console.log("搜索");
    },
    myadd3() {
      console.log("分类");
    },
    changeState(idx) {
      //功能：指定当前按钮状态修改true
      // console.log(idx)
      // 1.创建循环比那里状态数组
      for (var i = 0; i < this.currentIndex.length; i++) {
        // 2.获取用户点击下标
        //3.如果两个值相等于当前状态true
        if (idx == i) {
          this.currentIndex[i].isSelect = true;
        } else {
          //4.其他元素状态 false
          this.currentIndex[i].isSelect = false;
        }
      }
    }
  }
};
</script>
<style scoped>
.page-wrap {
  overflow: auto; /*溢出显示轮动条*/
  padding-bottom: 60px;
}
.mint-swipe {
  height: 190px;
}
</style>