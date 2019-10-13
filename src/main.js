import Vue from 'vue'
import App from './App.vue'
// 引用Vue的路由
import router from './router'

// 引用公共样式
import './assets/styles/base.scss'

// 按需引入vant ui 的组件路
import { NavBar, Field, Button } from 'vant'
// 调用vant UI组件 直接 .use连缀调用
Vue.use(NavBar)
  .use(Field)
  .use(Button)

// 把控制台的那个提示关了
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
