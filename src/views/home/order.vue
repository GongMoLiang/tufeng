<template>
  <div class="order-page" v>
    <!-- 登录后显示页面 -->
    <div class="orderBar" v-if="isShow">
      <ul>
        <li :class="{active:id === 0 }" @click="fn(0)">全部订单</li>
        <li :class="{active:id === 1 }" @click="fn(1)">待付款</li>
        <li :class="{active:id === 2 }" @click="fn(2)">未出行</li>
        <li :class="{active:id === 3 }" @click="fn(3)">待评价</li>
        <li :class="{active:id === 4 }" @click="fn(4)">退款</li>
      </ul>
      <div class="orderInfo">
        <p v-if="id === 0">暂无订单</p>
        <p v-if="id === 1">暂无付款</p>
        <p v-if="id === 2">暂无出行</p>
        <p v-if="id === 3">暂无评价</p>
        <p v-if="id === 4">暂无退款</p>
      </div>
    </div>
    <!-- 没登陆前显示页面 -->
    <div class="noLogin" v-else>
      <img src="../../assets/images/rabbit-happy.jpg" alt />
      <p>您还没有登录，请登录后查看订单</p>
      <span class="login" @click="gotologin">登录或注册</span>
      <span class="consult" @click="onSelect">产品咨询</span>
      <van-action-sheet v-model="show" :actions="actions" @select="onSelect"></van-action-sheet>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Order',

  data() {
    return {
      show: false,
      actions: [{ name: '10086' }, { name: '10010' }, { name: '10000' }],
      isShow: false,
      id: 0
    }
  },

  methods: {
    gotologin () {
      this.$router.push('/login')
    },

    onSelect (item) {
      // 点击选项时默认不会关闭菜单，可以手动关闭
      this.show = true
      Toast(item.name)
    },

    getUserInfo() {
      let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
        .username
      // console.log(userInfo)
      if (userInfo) {
        this.isShow = true
      } else {
        this.isShow = false
      }
    },

    fn(id) {
      this.id = id
    }
  },

  created() {
    this.getUserInfo()
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

    .active {
      color: #0091f2;
    }

    li {
      line-height: 44px;
      font-size: 14px;
    }
  }

  .orderInfo {
    margin: 30px auto;
    text-align: center;
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
