import Vue from 'vue'
import Router from 'vue-router'

// // 引入的一级路由home组件
// import Home from './views/home/home.vue'
// // home下面的二级路由组件依次为首页、目的地页、发现页、订单页和个人中心
// import Index from './views/home/index.vue'
// import Dest from './views/home/dest.vue'
// import Find from './views/home/find.vue'
// import Order from './views/home/order.vue'
// import Center from './views/home/center.vue'

// // 引入的一级路由detail组件
// import Detail from './views/detail/detail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    // 一级路由
    {
      path: '/',
      name: 'home',
      component: () => import('./views/home/home.vue'),
      // 二级路由
      children: [
        {
          path: 'index',
          component: () => import('./views/home/index.vue')
        },
        {
          path: 'dest',
          component: () => import('./views/home/dest.vue')
        },
        {
          path: 'find',
          component: import('./views/home/dest.vue')
        },
        {
          path: 'order',
          component: import('/views/home/order.vue')
        },
        {
          path: 'center',
          component: import('./views/home/center.vue')
        },
        {
          path: '',
          redirect: 'index'
        }
      ]
    },
    // 一级路由deatil的动态路由
    {
      path: '/detail/:id',
      name: 'detail',
      component: import('./views/detail/detail.vue')
    }
  ]
})
