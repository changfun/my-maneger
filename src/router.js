import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


import login from './components/login.vue'
import index from './components/index.vue'
// 我们晚点再讨论嵌套路由。
const routes = [
    { path: '/login', component: login },
    { path: '/index', component: index }
  ]
  
  // 3. 创建 router 实例，然后传 `routes` 配置
  // 你还可以传别的配置参数, 不过先这么简单着吧。
  const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
  })
  export default router