<template>
  <!-- 城市列表页 -->
  <div class="city-page">
    <van-nav-bar title="出发地">
      <template #left>
        <i class="iconfont icon-fanhui" @click="goBack"></i>
      </template>
    </van-nav-bar>
    <div class="position-info">
      <h5>周边定位</h5>
      <div class="failuer-location">
        <span class="text">未定位到当前城市</span>
      </div>
    </div>
    <div class="cityList">
      <div class="left">
        <div class="city-index">
          <p>A</p>
          <ul>
            <li>奥兰多</li>
            <li>安克雷奇</li>
          </ul>
          <p>B</p>
          <ul>
            <li>巴黎</li>
          </ul>
          <p>D</p>
          <ul>
            <li>多伦多</li>
          </ul>
          <p>F</p>
          <ul>
            <li>费尔班克斯</li>
          </ul>
          <p>J</p>
          <ul>
            <li>旧金山</li>
          </ul>
          <p>K</p>
          <ul>
            <li>旧金山</li>
          </ul>
          <p>K</p>
          <ul>
            <li>旧金山</li>
          </ul>
          <p>K</p>
          <ul>
            <li>旧金山</li>
          </ul>
          <p>K</p>
          <ul>
            <li>旧金山</li>
          </ul>
          <p>K</p>
          <ul>
            <li>旧金山</li>
          </ul>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="item in 13" :key="item">A</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City',

  methods: {
    //返回上一页
    goBack() {
      this.$router.back()
    }
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

.city-page {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;

  .position-info {
    padding: 8px 10px;
    h5 {
      font-size: 18px;
      padding: 10px 0;
      font-weight: bold;
    }

    .failuer-location {
      height: 38px;
      .text {
        font-size: 14px;
        color: #fb5f10;
        line-height: 28px;
      }
    }
  }
  .cityList {
    display: flex;
    flex: 1;
    overflow: hidden;
    position: relative;

    .right {
      width: 30px;
      height: 100%;
      position: absolute;
      right: 10px;

      li {
        font-size: 14px;
        line-height: 22px;
        text-align: center;
        color: #363636;
      }
    }

    .left {
      position: relative;
      flex: 1;
      overflow-y: auto;
    }
  }
  .city-index {
    p {
      font-size: 16px;
      color: #363636;
      background: #f0f0f0;
      padding-left: 12px;
      line-height: 22px;
    }

    ul {
      // margin: 0px 42px 0px 24px;

      li {
        height: 50px;
        font-size: 14px;
        color: #242424;
        font-weight: 400;
        line-height: 50px;
        padding-left: 24px;
        padding-right: 42px;
        border-bottom: 1px dashed #ececec;
      }
    }
  }
}
</style>
