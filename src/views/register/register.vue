<template>
  <div class="page-register">
    <div class="barr">
      <van-nav-bar title="注册" left-arrow @click-left="onClickLeft" border />
    </div>
    <div class="box">
      <van-cell-group>
        <van-field v-model="username" required clearable label="用户名" placeholder="请输入用户名" />
        <van-field v-model="email" required clearable label="邮箱" placeholder="请输入邮箱" />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
    </div>
    <div class="btn">
      <van-button type="primary" size="large" @click="hangleRegister">注&emsp;册</van-button>
      <div class="bottom">
        <span>已有账号,点此</span>
        <router-link to="/login" tag="span">登入</router-link>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'register',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    }
  },
  methods: {
    // 点击左边箭头返回到个人中心页面
    onClickLeft() {
      this.$router.push('./center')
    },
    hangleRegister() {
      axios
        .post('http://134.175.52.84:3000/api/register', {
          username: this.username,
          email: this.email,
          password: this.password
        })
        .then(Response => {
          if (Response.data.code === 0) {
            this.$toast.success(Response.data.msg)
            this.$router.push('/login')
          } else {
            this.$toast.fail(Response.data.msg)
          }
        })
    }
  }
}
</script>
<style lang="scss">
.page-register {
  .barr {
    height: 50px;
    .van-nav-bar__title {
      font-size: 20px;
    }
  }
  .box {
    margin-top: 30px;
    padding: 0 15px;
  }
  .btn {
    margin-top: 30px;
    padding: 0 30px;
    .bottom {
      display: flex;
      justify-content: flex-start;
      span {
        display: block;
        margin-top: 15px;
        color: #323233;
      }
      :last-child {
        margin-left: 3px;
        font-weight: bold;
        font-size: 16px;
        color: #ff6700;
      }
    }
  }
}
</style>
