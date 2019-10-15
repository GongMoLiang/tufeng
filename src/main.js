import Vue from 'vue'
import App from './App.vue'
// 引用Vue的路由
import router from './router'
import store from './store/store.js'

// 引用公共样式
import './assets/styles/base.scss'

// 按需引入vant ui 的组件路
<<<<<<< HEAD
import { NavBar, Field, Button, Search, DropdownMenu, DropdownItem, Lazyload, Swipe, SwipeItem, Tag, Collapse, CollapseItem } from 'vant'
=======
import {
  NavBar,
  Field,
  Button,
  Search,
  DropdownMenu,
  DropdownItem,
  Lazyload,
  Swipe,
  SwipeItem,
  Popup,
  Tab,
  Tabs,
  ActionSheet
} from 'vant'
>>>>>>> b129e3534016e8b1e98a953df1235c67bf8cfe3f
// 调用vant UI组件 直接 .use连缀调用
Vue.use(NavBar)
  .use(Field)
  .use(Button)
  .use(Search)
  .use(DropdownMenu)
  .use(DropdownItem)
  .use(Lazyload)
  .use(Swipe)
  .use(SwipeItem)
<<<<<<< HEAD
  .use(Tag)
  .use(Collapse)
  .use(CollapseItem)

=======
  .use(Tab)
  .use(Tabs)
  .use(ActionSheet)
  .use(Popup)
>>>>>>> b129e3534016e8b1e98a953df1235c67bf8cfe3f
// 把控制台的那个提示关了
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
