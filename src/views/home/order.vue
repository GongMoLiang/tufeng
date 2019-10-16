<template>
  <div class="order-page">
    <!-- 登录后显示页面 -->
    <div class="orderBar">
      <ul>
        <li>全部订单</li>
        <li>待付款</li>
        <li>未出行</li>
        <li>待评价</li>
        <li>退款</li>
      </ul>
    </div>
    <!-- 没登陆前显示页面 -->
    <div class="noLogin">
      <img src="../../assets/images/rabbit-happy.jpg" alt />
      <p>您还没有登录，请登录后查看订单</p>
      <span class="login" @click="gotologin">登录或注册</span>
      <span class="consult" @click="onSelect">产品咨询</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',

  methods: {
    gotologin () {
      this.$router.push('/login')
    },

    onSelect (item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = false
      Toast(item.name)
    }
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/common/mixins.scss';

.orderBar {
  width: 100%;
  height: 44px;
  @include border-bottom;

  ul {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;

    li {
      line-height: 44px;
      font-size: 14px;
    }
  }
}
.noLogin {
  display: flex;
  flex-direction: column;
  p {
    font-size: 14px;
    color: #363636;
    text-align: center;
    margin-bottom: 20px;
  }
  img {
    display: block;
    width: 48%;
    margin: 26px auto;
  }
  .login {
    background-image: url(//cdn.static.tff.bz/h5mobile/assets/img/goto-login-button.png);
    border: none;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    color: #fff;
    width: 76%;
    height: 51px;
    display: block;
    text-align: center;
    margin: 15px auto;
    font-size: 16px;
    line-height: 42px;
  }
  .consult {
    display: block;
    height: 42px;
    line-height: 42px;
    font-size: 16px;
    color: #363636;
    text-align: center;
    margin: 15px auto;
    width: 76%;
    border-radius: 21px;
    border: 1px solid #e0e0e0;
  }
}
</style>
