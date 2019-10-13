<template>
  <div class="page-login">
    <van-nav-bar title="登入" left-arrow @click-left="onClickLeft" border />
    <div class="box">
      <van-cell-group>
        <van-field
          v-model="username"
          required
          clearable
          label="用户名"
          right-icon="question-o"
          placeholder="请输入用户名"
          @click-right-icon="$toast('question')"
        />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" required />
      </van-cell-group>
    </div>
    <div class="btn">
      <van-button type="primary" size="large" @click="hangleLogin">登&emsp;入</van-button>
      <div class="bottom">
        <router-link to="/register" tag="span">注册</router-link>
        <span>忘记密码</span>
      </div>
    </div>
  </div>
</template>
<script>
import { userInfo } from 'os'
export default {
  data() {
    return {
      userInfo: {
        userName: '张三',
        age: '18'
      }
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('./center')
    },
    hangleLogin() {
      window.localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
    }
  }
}
</script>
<style lang="scss">
.page-login {
  .van-nav-bar {
    height: 50px;
  }
  .box {
    margin-top: 30px;
    padding-left: 10px;
  }
  .btn {
    margin-top: 30px;
    padding: 0 30px;
    .bottom {
      display: flex;
      justify-content: space-between;
      span {
        display: block;
        margin-top: 15px;
        color: #323233;
      }
    }
  }
}
</style>