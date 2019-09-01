import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index'
import Login from './views/Login'
import Lunbo from './views/Lunbo'
import Cebian from './components/momo/Cebian'

Vue.use(Router)

export default new Router({
  routes: [
    {path:"/",component:Index},
    {path:"/index",component:Index},
    {path:"/login",component:Login},
    {path:"/Lunbo",component:Lunbo},
    {path:"/Cebian",component:Cebian}
  ]
})
