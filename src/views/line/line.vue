<template>
  <!-- 这是旅游列表页面 -->
  <div class="page-line">
    <div class="detial-serch">
      <span class="iconfont icon-fanhui"></span>
      <van-search placeholder="请输入搜索关键词" v-model="value2" shape="round" />
    </div>
    <div>
      <van-dropdown-menu>
        <van-dropdown-item title="出发地" ref="item"></van-dropdown-item>
        <van-dropdown-item v-model="value" :options="option" />
        <van-dropdown-item title="排序" ref="item"></van-dropdown-item>
        <van-dropdown-item title="筛选" ref="item"></van-dropdown-item>
      </van-dropdown-menu>
    </div>
    <linelist></linelist>
  </div>
</template>
<script>
import linelist from '../../componets/linelist.vue'
export default {
  data() {
    return {
      value: 0,
      option: [
        { text: '途风精品', value: 0 },
        { text: '多日游', value: 1 },
        { text: '一日游', value: 2 },
        { text: '票务', value: 3 },
        { text: '游轮游', value: 4 },
        { text: '接送', value: 5 }
      ]
    }
  },
  components: {
    linelist: linelist
  }
}
</script>
<style lang="scss">
.page-line {
  .detial-serch {
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      display: block;
      width: 20px;
      font-size: 18px;
      font-weight: bold;
      text-align: center;
    }
    .van-search {
      flex: 1;
      background: #eee;
      .van-icon-search {
        font-size: 20px;
        font-weight: bold;
      }
      .van-search__content {
        background: #eee;
        color: #363636;
      }
      .van-field__control {
        color: #363636;
      }
    }
  }
}
</style>
