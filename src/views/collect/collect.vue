<template>
  <!-- 这是收藏页面 -->
  <div>
    <div class="collect">
      <van-nav-bar title="我的收藏">
        <template #left>
          <i class="iconfont icon-fanhui" @click="goBack"></i>
        </template>
        <template #right>
          <p class="edit" @click="changetext">{{ msg }}</p>
        </template>
      </van-nav-bar>
    </div>
    <collectlist></collectlist>
  </div>
</template>

<script>
import collectlist from '../../componets/collectlist'
export default {
  name: 'collect',
  data() {
    return {
      ishwo: false,
      msg: '编辑'
    }
  },
  methods: {
    goBack() {
      this.$router.back('/center')
    },
    changetext() {
      this.ishwo = !this.ishwo
      if (this.ishwo) {
        this.msg = '完成'
      } else {
        this.msg = '编辑'
      }
    }
  },
  components: {
    collectlist: collectlist
  }
}
</script>

<style lang="scss">
.van-nav-bar__title {
  max-width: 60%;
  margin: 0 auto;
  color: #363636;
  font-weight: 700;
  font-size: 18px;
}
.icon-fanhui {
  font-size: 25px;
  color: #363636;
  font-weight: bolder;
  display: flex;
  align-items: center;
}
.edit {
  color: #0090f3;
  font-size: 14px;
  display: flex;
  align-items: center;
}
</style>
