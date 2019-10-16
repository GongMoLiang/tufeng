import Vue from 'vue'
import App from './App.vue'
// 引用Vue的路由
import router from './router'
import store from './store/store.js'

// 引用公共样式
import './assets/styles/base.scss'

// 按需引入vant ui 的组件路
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
  ActionSheet,
  Checkbox,
  CheckboxGroup,
  Tag,
  Collapse,
  CollapseItem
} from 'vant'
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
  .use(Popup)
  .use(Tab)
  .use(Tabs)
  .use(ActionSheet)
  .use(Popup)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Tag)
  .use(Collapse)
  .use(CollapseItem)

// 把控制台的那个提示关了
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
