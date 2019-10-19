<template>
  <div class="box">
    <!-- 轮播图 -->
    <van-swipe class="slide-show" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="image in imagesList" :key="image.id">
        <img v-lazy="image.picture" />
      </van-swipe-item>
    </van-swipe>

    <!-- 搜索框 -->
    <div class="search">
      <van-search placeholder="城市、景点、产品、关键字" show-action shape="round" @focus="handleTZ">
        <div slot="action" class="iconfont icon-kefu"></div>
      </van-search>
    </div>

    <!-- 导航栏 -->
    <div class="nav-bar">
      <dl @click="goLine">
        <dt>
          <img src="../../assets/images/boutique.png" />
        </dt>
        <dd>途风精品</dd>
      </dl>
      <dl @click="goLine">
        <dt>
          <img src="../../assets/images/tour.png" />
        </dt>
        <dd>多日游</dd>
      </dl>
      <dl @click="goLine">
        <dt>
          <img src="../../assets/images/activity.png" />
        </dt>
        <dd>一日游</dd>
      </dl>
      <dl>
        <dt>
          <img src="../../assets/images/custom.png" />
        </dt>
        <dd>定制旅行</dd>
      </dl>
      <dl @click="goLine">
        <dt>
          <img src="../../assets/images/cruise.png" />
        </dt>
        <dd>邮轮游</dd>
      </dl>
      <dl @click="goLine">
        <dt>
          <img src="../../assets/images/ticket.png" />
        </dt>
        <dd>票务</dd>
      </dl>
      <dl>
        <dt>
          <img src="../../assets/images/qz.jpg" />
        </dt>
        <dd>签证</dd>
      </dl>
      <dl @click="goLine">
        <dt>
          <img src="../../assets/images/jiesong.jpg" />
        </dt>
        <dd>接送</dd>
      </dl>
    </div>

    <!-- 抵用券图片 -->
    <div class="coupon">
      <img src="//cdn.tff.bz/f2/76/f1/750×180.jpg" alt />
    </div>

    <!-- 热门目的地 -->
    <div class="destination">
      <h2>热门目的地</h2>
      <div class="assit-box">
        <ul>
          <li v-for="item in destinaList" :key="item.id" @click="goLine">
            <img :src="item.image" />
            <p>{{ item.title }}</p>
          </li>
        </ul>
      </div>
    </div>

    <!-- 优惠专区图片 -->
    <div class="on-sale">
      <img :src="onSalePic" alt />
    </div>

    <!-- 新品上线 -->
    <div class="new-online">
      <div class="new-word">
        <h2>新品上线</h2>
        <router-link tag="span" to="/line">查看更多</router-link>
      </div>
      <ul>
        <li v-for="newOn in newlineList" :key="newOn.id">
          <img :src="newOn.image" />
          <h3>{{ newOn.name }}</h3>
          <p>
            ￥{{ newOn.origin_price*7}}
            <span>起</span>
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'home',
  data() {
    return {
      imagesList: [], // 轮播图列表
      destinaList: [], // 热门目的地列表
      newlineList: [], // 新品上线列表
      onSalePic: String // 优惠专区图片
    }
  },
  methods: {
    goLine(e) {
      let tep = e.currentTarget.children[1].innerHTML
      this.$router.push({
        name: 'line',
        params: {
          value: tep
        }
      })
    },
    handleTZ() {
      this.$router.push({
        name: 'recommend'
      })
    }
  },
  created() {
    axios
      .get('https://app.toursforfun.com/api/homepage/banner/v1.5.0')
      .then(response => {
        let result = response.data.data
        this.imagesList = result.link
        this.destinaList = result.hot_destination
      })
    axios
      .get('https://app.toursforfun.com/api/homepage/product/new_discount')
      .then(response => {
        let consult = response.data.data
        this.onSalePic = consult.discount.image
        this.newlineList = consult.new_product.list
        // console.log(this.newlineList)
      })
  }
}
</script>

<style lang="scss">
.box {
  position: relative;
  // overflow: hidden;
  .search {
    //搜索框
    background: transparent;
    z-index: 999;
    width: 90%;
    position: absolute;
    top: 5px;
    left: 10px;
    .van-search {
      background: transparent !important;
    }
    .van-search__content {
      background: white;
      font-size: 20px;
      color: #a1a1a1;
    }
    .van-icon-search {
      font-size: 24px;
      color: #a1a1a1;
    }
    .icon-kefu {
      color: white;
      font-size: 22px;
    }
  }

  .slide-show {
    //轮播图
    width: 100%;
    height: 283px;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
  }

  .nav-bar {
    //导航栏
    display: flex;
    flex-wrap: wrap;
    padding: 20px 10px;
    justify-content: space-around;
    dl {
      margin: 5px 8px;
      width: 72px;
      height: 88px;
      dt {
        text-align: center;
        img {
          width: 56px;
        }
      }
      dd {
        margin-top: 10px;
        font-size: 14px;
        color: #363636;
        text-align: center;
      }
    }
  }

  .coupon,
  .on-sale {
    //抵用券图片、优惠专区图片
    padding: 0 26px;
    img {
      width: 100%;
      border-radius: 4px;
    }
  }

  .destination {
    //热门目的地
    margin-top: 10px;
    padding: 0 26px;
    padding-bottom: 30px;
    h2 {
      line-height: 50px;
      font-size: 18px;
      color: #363636;
      font-weight: bolder;
    }
    .assit-box::-webkit-scrollbar {
      display: none;
    }
    .assit-box {
      flex: 1;
      overflow-x: auto;
      white-space: nowrap;
      ul {
        width: 1000px;
        li {
          float: left;
          margin-right: 10px;
          border-radius: 10px;
          width: 105px;
          height: 138px;
          position: relative;
          img {
            width: 100%;
            height: 100%;
            border-radius: 4px;
          }
          p {
            color: white;
            font-size: 14px;
            width: 100%;
            line-height: 37px;
            position: absolute;
            bottom: 0;
            left: 0;
            padding-left: 10px;
            box-sizing: border-box;
            background: rgba(0, 0, 0, 0.4);
            border-radius: 0 0 4px 4px;
          }
        }
      }
    }
  }

  .new-online {
    //新品上线
    margin: 10px 0;
    padding: 0 26px 20px;
    .new-word {
      display: flex;
      height: 50px;
      justify-content: space-between;
      align-items: center;
      h2 {
        font-size: 18px;
        color: #363636;
        font-weight: bolder;
      }
      span {
        font-size: 14px;
        color: #0090f2;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      li {
        width: 46%;
        border-radius: 4px;
        box-shadow: 0 2px 10px #e8e0e0;
        img {
          width: 100%;
          height: 109px;
          border-radius: 4px 4px 0 0;
        }
      }
      h3 {
        font-size: 15px;
        line-height: 20px;
        overflow: hidden;
        text-overflow: ellipsis;
        margin: 12px 0;
        font-weight: 700;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      p {
        text-align: right;
        font-size: 20px;
        color: #fb5f10;
        font-weight: bold;
        line-height: 30px;
        padding-bottom: 10px;
        span {
          font-size: 14px;
          font-weight: normal;
          margin-left: 5px;
        }
      }
    }
  }
}
</style>
