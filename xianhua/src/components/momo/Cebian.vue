<template>
  <div>
    <mt-search cancel-text="取消" placeholder="搜索"></mt-search>
    <div class="container">
      <van-sidebar v-model="activeKey" @change="handeleClick">
        <van-sidebar-item title="热门推荐" />
        <van-sidebar-item title="鲜花" />
        <van-sidebar-item title="永生花" />
        <van-sidebar-item title="蛋糕" />
        <van-sidebar-item title="巧克力" />
        <van-sidebar-item title="特色礼品" />
        <van-sidebar-item title="礼篮" />
        <van-sidebar-item title="绿植花卉" />
      </van-sidebar>
      <div class="container-body">
        <cebianComponent1 v-if="activeKey==0" v-bind:title="'组件1'"></cebianComponent1>
        <cebianComponent2 v-else-if="activeKey==1" v-bind:title="'组件2'"></cebianComponent2>
        <cebianComponent3 v-else-if="activeKey==2" v-bind:title="'组件3'"></cebianComponent3>
        <cebianComponent4 v-else-if="activeKey==3" v-bind:title="'组件4'"></cebianComponent4>
        <cebianComponent5 v-else-if="activeKey==4" v-bind:title="'组件5'"></cebianComponent5>
        <cebianComponent6 v-else-if="activeKey==5" v-bind:title="'组件6'"></cebianComponent6>
        <cebianComponent7 v-else-if="activeKey==6" v-bind:title="'组件7'"></cebianComponent7>
        <cebianComponent8 v-else v-bind:title="'组件8'"></cebianComponent8>
      </div>
    </div>
  </div>
</template>
<script>
import cebianComponent1 from "./cebianComponent/Cebian-component1";
import cebianComponent2 from "./cebianComponent/Cebian-component2";
import cebianComponent3 from "./cebianComponent/Cebian-component3";
import cebianComponent4 from "./cebianComponent/Cebian-component4";
import cebianComponent5 from "./cebianComponent/Cebian-component5";
import cebianComponent6 from "./cebianComponent/Cebian-component6";
import cebianComponent7 from "./cebianComponent/Cebian-component7";
import cebianComponent8 from "./cebianComponent/Cebian-component8";
export default {
  data() {
    return {
      activeKey: 0,
      title: "我是页面1"
    };
  },
  methods: {
    handeleClick: function() {
      console.log(this.$data);
    }
  },
  components: {
    cebianComponent1,
    cebianComponent2,
    cebianComponent3,
    cebianComponent4,
    cebianComponent5,
    cebianComponent6,
    cebianComponent7,
    cebianComponent8
  }
};
</script>
<style scoped>
.container {
  display: flex;
  width: 100%;
}
.mint-search {
  height: 52px;
}
.van-sidebar.van-hairline--top-bottom {
  width: 20%;
  min-width: 80px;
}
</style>