<template>
  <div class="page-login">
    <van-nav-bar title="登入" left-arrow @click-left="onClickLeft" border />
    <div class="box">
      <van-cell-group>
        <van-field
          v-model="email"
          required
          clearable
          label="邮箱"
          right-icon="question-o"
          placeholder="请输入邮箱"
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
import axios from 'axios'
import { userInfo } from 'os'
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    // 点击左边箭头返回到个人中心页面
    onClickLeft() {
      this.$router.push('./center')
    },
    // 处理登入
    hangleLogin() {
      console.log(1)
      axios
        .post('http://localhost:3000/api/login', {
          email: this.email,
          password: this.password
        })
        .then(Response => {
          if (Response.data.code == 0) {
            alert(Response.data.msg)
            // 登入成功后在localStoragec存用户信息
            window.localStorage.setItem(
              'userInfo',
              JSON.stringify(Response.data.userInfo)
            )
            // 从登入界面来的，登入成功后打回到个人中心页面
            // 从导航卫生拦截过来的,登入成功打回到原来想去的页面
            // 这里不用push方法是为了当你登入完成后跳转的目标页面时，在点击浏览器历史记录的返回按钮，不在回到登入页面
            let path = this.$route.query.redirect || '/center'
            this.$router.replace(path)
          } else {
            alert(Response.data.msg)
          }
        })
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

