<template>
  <div class="page-center">
    <div class="login">
      <!-- 头像图片 -->
      <div class="head">
        <img src="https://m.toursforfun.com/img/not-login.png" alt />
      </div>
      <div class="choice">
        <router-link tag="span" to="/login">登入</router-link>&nbsp;|&nbsp;
        <!-- <span>登入</span>/ -->
        <router-link tag="span" to="/register">注册</router-link>
        <!-- <span>注册</span> -->
      </div>
    </div>
    <ul class="login-list">
      <li>
        <span>0</span>
        <span>积分</span>
      </li>
      <li>
        <span>0</span>
        <span>优惠券</span>
      </li>
      <li @click="goCollect">
        <span>0</span>
        <span>收藏</span>
      </li>
      <li>
        <span>0</span>
        <span>浏览历史</span>
      </li>
    </ul>
    <!-- 功能列表 -->
    <ul class="app-list">
      <li @click="goCard">
        <i class="iconfont icon-weibiaoti--"></i>
        <span>购物车</span>
      </li>
      <li>
        <i class="iconfont icon-kehu"></i>
        <span>常用旅客</span>
      </li>
      <li>
        <i class="iconfont icon-icon-xiaoxi"></i>
        <span>消息</span>
      </li>
      <li>
        <i class="iconfont icon-kefu"></i>
        <span>在线客服</span>
      </li>
      <li>
        <i class="iconfont icon-yijianfankui"></i>
        <span>意见反馈</span>
      </li>
      <li>
        <i class="iconfont icon-libao"></i>
        <span>福利中心</span>
      </li>
      <li>
        <i class="iconfont icon-shezhi"></i>
        <span>设置</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'center',
  data () {
    return {
      username: window.localStorage.getItem(JSON.parse('userInfo').username)
    }
  },
  methods: {
    // 去购物车界面
    goCard () {
      this.$router.push('./card')
    },
    // 去收藏页面
    goCollect () {
      this.$router.push('./collect')
    }
  }
}
</script>
<style lang="scss">
.page-center {
  background: #f2f2f2;
  width: 100%;
  .login {
    background: #fff;
    display: flex;
    height: 145px;
    justify-content: flex-start;
    align-items: center;
    padding: 15px 24px 0 24px;
    //头像框
    .head {
      width: 80px;
      height: 80px;
      img {
        width: 80px;
      }
    }
    //登入  注册
    .choice {
      height: 80px;
      display: flex;
      font-size: 24px;
      color: #363636;
      font-weight: bold;
      align-items: center;
      padding-left: 20px;
    }
  }

  //列表
  .login-list {
    background: #fff;
    height: 54px;
    display: flex;
    li {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      text-align: center;
      :first-child {
        color: #0090f2;
        font-size: 18px;
        font-weight: bolder;
      }
      :last-child {
        font-size: 14px;
        color: #767676;
        margin-bottom: 14px;
      }
    }
  }

  //功能列表
  .app-list {
    background: #fff;
    padding: 10px 5px 0;
    display: flex;
    flex-wrap: wrap;
    margin-top: 20px;
    li {
      display: flex;
      width: 70px;
      height: 97px;
      flex-direction: column;
      text-align: center;
      :first-child {
        color: #363636;
        font-size: 24px;
        font-weight: bolder;
      }
      :last-child {
        font-size: 14px;
        color: #767676;
        margin-top: 10px;
      }
    }
  }
}
</style>
