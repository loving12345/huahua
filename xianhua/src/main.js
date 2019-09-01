import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入第三方的组件库mint -ui 
// 完整引入mint-ui组件库中所有组件
import MintUI from 'mint-ui'
// 单独引入mint-ui组件库中的样式
import'mint-ui/lib/style.css'
// 将mint-ui注册vue实例中
Vue.use(MintUI)

import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


// 引入第三方模块
import axios from 'axios'
// 设置基础路径
axios.defaults.baseURL="http://127.0.0.1:3000/"
// 配置axios  保存session  信息
axios.defaults.withCredentials=true
// 将axios 注册vue  实例中添加vue原型
Vue.prototype.axios=axios;

// 引入vuex 第三方模块
import Vuex from "vuex"   //!!
// 注册Vuex    顺序  先注册在再创建实例对象
Vue.use(Vuex)   //!!

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
