import Vue from 'vue'
import Router from 'vue-router'
import { Dialog } from 'vant'

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

Vue.use(Router).use(Dialog)

const router = new Router({
  routes: [
    // 一级路由
    {
      path: '/',
      // name: 'home',
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
          component: () => import('./views/home/find.vue')
        },
        {
          path: 'order',
          component: () => import('./views/home/order.vue')
        },
        {
          path: 'center',
          component: () => import('./views/home/center.vue')
        },
        {
          path: '',
          name: 'home',
          redirect: 'index'
        }
      ]
    },
    // 一级路由deatil的动态路由
    {
      path: '/detail/:id',
      name: 'detail',
      component: () => import('./views/detail/detail.vue')
    },
    // 一级路由 登入
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login/login.vue')
    },
    // 一级路由 注册
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/register/register.vue')
    },
    // 一级路由 购物车
    {
      path: '/card',
      name: 'card',
      component: () => import('./views/card/card.vue'),
      meta: {
        needLogin: true // 用来控制是否需要登入验证
      }
    },
    // 一级路由 收藏页面
    {
      path: '/collect',
      name: 'coolect',
      component: () => import('./views/collect/collect.vue'),
      meta: {
        needLogin: true // 用来控制是否需要登入验证
      }
    },
    // 一级路由 旅游线路列表
    {
      path: '/line',
      name: 'line',
      component: () => import('./views/line/line.vue')
    },
    {
      path: '/city',
      name: 'city',
      component: () => import('./views/city/city.vue')
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: () => import('./views/recommend/recommend.vue')
    }
  ]
})

// 设置全局导航守卫  实现登入拦截
router.beforeEach((to, from, next) => {
  let userInfo = window.localStorage.getItem('userInfo')
  if (to.meta.needLogin && !userInfo) {
    // 携带路劲过去登入页面
    Dialog.alert({
      showCancelButton: true,
      title: '登入提示',
      message: '你还没有登入，是否去登入'
    }).then(() => {
      // on close
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    })
  } else {
    next()
  }
})

// 暴露路由
export default router
