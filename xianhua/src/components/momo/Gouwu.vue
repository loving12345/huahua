<template>
  <div>
    <van-nav-bar
      title="购物车"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="nei">
      <p>这里什么也没有</p>
    </div>
    <div style="background:#ddd;width:100%;height:0.4rem"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {}
  },
  methods:{
    onClickLeft() {
      Toast('返回');
    }
  }
};
</script>
<style scoped>
.nei{
  /* width:100%; */
  height:180px;
  border:1px solid #ccc;
  border-radius: 4px;
  line-height:260px;
}
.nei p{
  font-size:12px;
}
</style>