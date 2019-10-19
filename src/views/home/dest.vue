<template>
  <div class="dest-box">
    <div class="bg">
      <img src="../../assets/images/usa.jpg" alt />
    </div>
    <div class="dest-header">
      <a href="#">
        <i class="iconfont icon-sousuo" @click="handleTZ"></i>
      </a>
      <div class="city-container">
        <div class="city">
          <h1>{{ destination.name }}</h1>
          <i class="iconfont icon-xialajiantou" @click="handleTZ"></i>
        </div>
        <span class="tag">{{ destination.tag }}</span>
      </div>
    </div>
    <div class="dest-info-box">
      <div class="dset-info-container">
        <!-- 产品分类 -->
        <div class="product-type">
          <h2>产品分类</h2>
          <div class="slider">
            <ul>
              <li @click="goLine">
                <img src="../../assets/images/boutique.png" alt />
                <span>精品游</span>
              </li>
              <li @click="goLine">
                <img src="../../assets/images/tour.png" alt />
                <span>多日游</span>
              </li>
              <li @click="goLine">
                <img src="../../assets/images/activity.png" alt />
                <span>一日游</span>
              </li>
              <li @click="goLine">
                <img src="../../assets/images/ticket.png" alt />
                <span>票务</span>
              </li>
              <li @click="goLine">
                <img src="../../assets/images/cruise.png" alt />
                <span>邮轮游</span>
              </li>
              <li @click="goLine">
                <img src="../../assets/images/custom.png" alt />
                <span>定制旅行</span>
              </li>
            </ul>
          </div>
          <div class="slider-pager">
            <span class="slider-pager-line">
              <i class="iconfont icon-hengxian1"></i>
              <i class="iconfont icon-hengxian1"></i>
            </span>
          </div>
        </div>
        <!-- 热门推荐 -->
        <div class="hot-recommend">
          <h2>热门推荐</h2>
          <div class="content">
            <div class="single-hot" v-for="item in recommendList" :key="item.id" @click="goline">
              <img :src="item.image_url" alt />
              <span>{{ item.title }}</span>
            </div>
          </div>
        </div>
        <!-- 必去景点 -->
        <div class="attractions">
          <div class="header">
            <h2>必去景点</h2>
            <span>
              查看更多
              <i class="iconfont icon-arrow-right"></i>
            </span>
          </div>
          <div class="attractions-content">
            <div class="single-attractions" v-for="item in hotList" :key="item.tour_city_id">
              <!-- <img
                src="https://toursforfun.tff.bz/images/lincoln_memorial_washington_dc.jpg?imageView2/1/w/154/h/188/q/80/format/jpg"
                alt
              />-->

              <img :src="`https://toursforfun.tff.bz/images/${item.image}`" alt />
              <span>{{ item.name }}</span>
            </div>
          </div>
        </div>
        <!-- 优惠专区 -->
        <div class="discount">
          <img :src="discountImg" @click="goline" />
        </div>
        <!-- 跟团游热销榜 -->
        <div class="tour-sales">
          <h2>跟团游销量榜</h2>
          <div class="content">
            <div class="tour-product" v-for="item in tourList" :key="item.id">
              <div class="product-img">
                <img :src="item.image" alt />
              </div>
              <div class="product-info">
                <div class="product-name">{{ item.name }}</div>
                <div class="price-wrap">
                  <div class="price">
                    <span class="price-value">
                      ￥{{ item.default_price*7}}
                      <span class="price-qi">起&emsp;</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span class="all" @click="goline">显示所有的跟团游</span>
          </div>
          <span></span>
        </div>
        <!-- 当地玩乐销量榜 -->
        <div class="local-sales">
          <h2>当地玩乐销量榜</h2>
          <div class="content">
            <div class="local-product" v-for="item in localList" :key="item.id">
              <div class="product-img">
                <img :src="item.image" alt />
              </div>
              <div class="product-info">
                <div class="product-name">{{ item.name }}</div>
                <div class="price-wrap">
                  <div class="price">
                    <span class="price-value">
                      ￥{{ item.default_price*7 }}
                      <span class="price-qi">起&emsp;</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <span class="all" @click="goline">显示所有当地玩乐</span>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Dest',

  data () {
    return {
      hotList: [],
      recommendList: [],
      tourList: [],
      localList: [],
      destination: {},
      discountImg: {}
    }
  },

  methods: {
    goLine (e) {
      let tep = e.currentTarget.children[1].innerHTML
      this.$router.push({
        name: 'line',
        params: {
          value: tep
        }
      })
    },
    goline () {
      this.$router.push('/line')
    },
    handleTZ () {
      this.$router.push('/recommend')
    }
  },

  created () {
    axios
      .get('https://app.toursforfun.com/api/destination/default?name=')
      .then(Response => {
        this.hotList = Response.data.data.hot_attraction
        this.recommendList = Response.data.data.hot_recommend
        this.tourList = Response.data.data.tour_product
        this.localList = Response.data.data.ttd_product
        this.destination = Response.data.data.default_destination
        this.discountImg = Response.data.data.discount
      })
  }
}
</script>

<style lang="scss">
h2 {
  font-size: 16px;
  font-weight: bolder;
  color: #363636;
  margin-bottom: 14px;
}
.dest-box {
  height: 100%;
  position: relative;

  .bg img {
    width: 100%;
    height: 441px;
  }

  .dest-header {
    width: 100%;
    height: 441px;
    position: absolute;
    left: 0;
    top: 0;
    background: rgba(0, 0, 0, 0.1);

    a {
      position: absolute;
      right: 18px;
      top: 24px;
      color: #fff;
      font-size: 26px;

      .icon-sousuo {
        font-size: 22px;
        font-weight: bold;
      }
    }

    .city-container {
      position: absolute;
      width: 100%;
      top: 15vh;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      box-sizing: border-box;

      .city {
        display: flex;
        justify-content: center;
        align-items: center;

        h1 {
          color: #fff;
          font-size: 49px;
          font-weight: bolder;
          letter-spacing: 5px;
          margin-bottom: 20px;
        }

        .icon-xialajiantou {
          font-size: 18px;
          margin-left: 6px;
          color: #fff;
        }
      }

      span {
        font-size: 14px;
        color: #fff;
        padding: 8px 15px;
        background: rgba(0, 0, 0, 0.35);
        border-radius: 15px;
        display: block;
      }
    }
  }

  .dset-info-container {
    width: 100%;
    height: 500px;
    border-radius: 20px 20px 0 0;
    margin-top: -20px;
    // z-index: 9;
    position: absolute;
    box-sizing: border-box;
    background: #fff;
    padding: 24px;

    .product-type {
      .slider::-webkit-scrollbar {
        display: none;
      }
      .slider {
        flex: 1;
        overflow-x: auto;
        width: 100%;
        ul {
          // justify-content: space-between;
          overflow: hidden;
          display: flex;
          //   width: 100%;
          //   padding: 0 8px;
          //   margin-bottom: 38px;
          //   box-sizing: border-box;
          width: 732px;

          li {
            width: 73.5px;
            float: left;
            display: flex;
            flex-direction: column;
            margin-right: 19px;
          }
          img {
            width: 44px;
            height: 44px;
            display: block;
            margin: 0 15px;
          }

          span {
            display: block;
            text-align: center;
            margin-top: 6px;
            font-size: 12px;
            color: #363636;
            line-height: 18px;
          }
        }
      }

      .slider-pager {
        .slider-pager-line {
          display: block;
          text-align: center;
          margin-top: 6px;
          font-size: 12px;
          color: #363636;
          margin-bottom: 22px;

          .icon-hengxian1 {
            color: #0090f0;
          }
        }
      }
    }
  }
  .hot-recommend {
    width: 100%;
    padding-bottom: 26px;

    .content {
      //   position: relative;
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      :nth-child(2n) {
        margin-right: 0px;
      }

      .single-hot {
        position: relative;
        width: 48%;
        margin-bottom: 4%;
        box-sizing: border-box;
        overflow: hidden;

        img {
          width: 100%;
          height: 99px;
          border-radius: 4px;
        }
        span {
          font-size: 14px;
          display: block;
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 22px;
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
          padding-left: 8px;
          line-height: 22px;
          border-radius: 0 0 4px 4px;
        }
      }
    }
  }
  .attractions {
    width: 100%;
    padding-bottom: 14px;

    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      h2 {
        font-size: 16px;
        font-weight: bolder;
        color: #363636;
        margin: 0;
      }
      span {
        font-size: 14px;
        color: #0090f2;
        margin-right: -6px;
      }
    }

    .attractions-content {
      display: flex;
      margin-top: 14px;
      justify-content: space-between;
      overflow: hidden;

      .single-attractions {
        width: 23%;
        // margin-right: 2.66%;

        img {
          width: 78px;
          height: 104px;
          border-radius: 4px;
        }

        span {
          text-align: center;
          margin-top: 6px;
          font-size: 12px;
          color: #363636;
          display: block;
          height: 20px;
          width: 100%;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .discount {
    padding-bottom: 26px;

    img {
      max-width: 100%;
      border-radius: 4px;
    }
  }
  .tour-sales {
    padding-bottom: 26px;

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .tour-product {
        width: 47%;
        padding: 0;
        box-shadow: 0 2px 10px #e8e0e0;
        border-radius: 4px;
        margin-bottom: 22px;

        .product-img {
          width: 100%;
          //   min-height: 56vw;
          border-radius: 4px;
          position: relative;
          overflow: hidden;

          img {
            min-height: 16vh;
            width: 100%;
            height: 16vh;
          }
        }
        .product-info {
          height: 105px;
          padding-bottom: 10px;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          flex-direction: column;

          .product-name {
            // height: 40px;
            line-height: 20px;
            padding: 0 10px;
            margin: 10px 0;
            word-break: break-all;
            font-size: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-weight: 700;
          }
          .price-wrap {
            font: 12px;
            color: #363636;

            .price {
              font-size: 12px;
              text-align: right;
              color: #fb5f10;
              display: block;

              .price-value {
                font-size: 20px;
                font-weight: bold;

                .price-qi {
                  color: #363636;
                  font-size: 13px;
                }
              }
            }
          }
        }
      }
      .all {
        display: block;
        width: 100%;
        text-align: center;
        height: 40px;
        line-height: 40px;
        border: 1px solid #0090f2;
        border-radius: 4px;
        color: #0090f2;
      }
    }
  }
  .local-sales {
    padding-bottom: 26px;

    .content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .local-product {
        width: 47%;
        padding: 0;
        box-shadow: 0 2px 10px #e8e0e0;
        border-radius: 4px;
        margin-bottom: 22px;

        .product-img {
          width: 100%;
          //   min-height: 56vw;
          border-radius: 4px;
          position: relative;
          overflow: hidden;

          img {
            min-height: 16vh;
            width: 100%;
            height: 16vh;
          }
        }
        .product-info {
          height: 105px;
          padding-bottom: 10px;
          overflow: hidden;
          display: flex;
          justify-content: space-between;
          flex-direction: column;

          .product-name {
            // height: 40px;
            line-height: 20px;
            padding: 0 10px;
            margin: 10px 0;
            word-break: break-all;
            font-size: 15px;
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            font-weight: 700;
          }
          .price-wrap {
            font: 12px;
            color: #363636;

            .price {
              font-size: 12px;
              text-align: right;
              color: #fb5f10;
              display: block;

              .price-value {
                font-size: 20px;
                font-weight: bold;

                .price-qi {
                  color: #363636;
                  font-size: 13px;
                }
              }
            }
          }
        }
      }
      .all {
        display: block;
        width: 100%;
        text-align: center;
        height: 40px;
        line-height: 40px;
        border: 1px solid #0090f2;
        border-radius: 4px;
        color: #0090f2;
      }
    }
  }
}
</style>
