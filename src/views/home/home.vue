<template>
  <div class="page-home">
    <div class="content">
      <router-view></router-view>
    </div>
    <ul class="footer-bar">
      <router-link tag="li" to="/index">
        <i class="iconfont icon-shouye"></i>
        <span class="barname">首页</span>
      </router-link>
      <router-link tag="li" to="/dest">
        <i class="iconfont icon-dingwei"></i>
        <span class="barname">目的地</span>
      </router-link>
      <router-link tag="li" to="/find">
        <i class="iconfont icon-faxian"></i>
        <span class="barname">发现</span>
      </router-link>
      <router-link tag="li" to="/order">
        <i class="iconfont icon-single"></i>
        <span class="barname">订单</span>
      </router-link>
      <router-link tag="li" to="/center">
        <i class="iconfont icon-My"></i>
        <span class="barname">我的</span>
      </router-link>
    </ul>
  </div>
</template>
<style lang="scss">
.page-home {
  height: 100%;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  .content {
    flex: 1;
    overflow: auto;
  }
  .iconfont {
    color: #5f5a5a;
  }
}
.footer-bar {
  height: 50px;
  background: #fff;
  display: flex;
  box-shadow: 0 -3px 11px rgba(0, 0, 0, 0.1);
  background-image: none;
  background-color: #fff;
  border: none;
  li {
    display: flex;
    flex: 1;
    text-align: center;
    justify-content: center;
    flex-direction: column;
    i {
      font-size: 24px;
      margin-bottom: 3px;
      // span {
      //   font-size: 12px;
      //   color: #d6d6d6;
      // }
    }
    .barname {
      font-size: 11px;
      color: #5f5a5a;
    }
    .router-link-active {
      // background: red;
      color: #0091f2 !important;
    }
  }
}
</style>
