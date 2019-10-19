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
            <router-link tag="li" to="/line">巴黎</router-link>
          </ul>
          <p>D</p>
          <ul>
            <router-link tag="li" to="/line">多伦多</router-link>
          </ul>
          <p>F</p>
          <ul>
            <li>费尔班克斯</li>
          </ul>
          <p>J</p>
          <ul>
            <router-link tag="li" to="/line">旧金山</router-link>
          </ul>
          <p>K</p>
          <ul>
            <router-link tag="li" to="/line">坎昆</router-link>
            <router-link tag="li" to="/line">卡尔加里</router-link>
          </ul>
          <p>L</p>
          <ul>
            <li>罗德岱堡</li>
            <router-link tag="li" to="/line">洛杉矶</router-link>
            <li>拉斯维家斯</li>
          </ul>
          <p>M</p>
          <ul>
            <li>迈阿密</li>
            <li>蒙特利尔</li>
            <li>墨西哥城</li>
          </ul>
          <p>N</p>
          <ul>
            <router-link tag="li" to="/line">纽约</router-link>
          </ul>
          <p>T</p>
          <ul>
            <li>檀香山</li>
          </ul>
          <p>W</p>
          <ul>
            <router-link tag="li" to="/line">温哥华</router-link>
          </ul>
          <p>X</p>
          <ul>
            <router-link tag="li" to="/line">西雅图</router-link>
          </ul>
          <p>Y</p>
          <ul>
            <li>盐湖城</li>
            <li>亚特兰大</li>
          </ul>
        </div>
      </div>
      <div class="right">
        <ul>
          <li v-for="(item,index) in list" :key="index" @click="fixed(index)">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'City',
  data() {
    return {
      list: ['A', 'B', 'D', 'F', 'J', 'k', 'L', 'M', 'N', 'T', 'W', 'X', 'Y']
    }
  },
  methods: {
    // 返回上一页
    goBack() {
      this.$router.back()
    },
    fixed(index) {
      let top = document.getElementsByTagName('p')[index].offsetTop
      let dom = document.getElementsByClassName('left')[0]
      dom.scrollTop = top
      this.$toast({
        message: document.getElementsByTagName('p')[index].innerHTML,
        duration: 1200
      })
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
        font-size: 16px;
        margin: 4px 0;
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
    margin-bottom: 300px;
    p {
      font-size: 16px;
      color: #363636;
      background: #f0f0f0;
      padding-left: 12px;
      line-height: 22px;
    }

    ul {
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
.van-toast--text {
  width: 50px;
  height: 100px;
  font-size: 40px;
  color: #fff;
  font-weight: bold;
  background-color: rgba(50, 50, 51, 0.7);
  border-radius: 100px;
}
</style>
