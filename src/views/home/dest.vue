<template>
  <div class="dest-box">
    <div class="bg">
      <img src="../../assets/images/usa.jpg" alt />
    </div>
    <div class="dest-header">
      <a href="#">
        <i class="iconfont icon-sousuo"></i>
      </a>
      <div class="city-container">
        <div class="city">
          <h1>美国</h1>
          <i class="iconfont icon-xialajiantou"></i>
        </div>
        <span class="tag">冬季国家公园</span>
      </div>
    </div>
    <div class="dest-info-box">
      <div class="dset-info-container">
        <div class="product-type">
          <h2>产品分类</h2>
          <div class="slider">
            <ul>
              <li>
                <img src="../../assets/images/boutique.png" alt />
                <span>精品游</span>
              </li>
              <li>
                <img src="../../assets/images/boutique.png" alt />
                <span>精品游</span>
              </li>
              <li>
                <img src="../../assets/images/boutique.png" alt />
                <span>精品游</span>
              </li>
              <li>
                <img src="../../assets/images/boutique.png" alt />
                <span>精品游</span>
              </li>
              <li>
                <img src="../../assets/images/boutique.png" alt />
                <span>精品游</span>
              </li>
              <li>
                <img src="../../assets/images/boutique.png" alt />
                <span>精品游</span>
              </li>
            </ul>
            <div class="slider-pager">
              <span class="slider-pager-line">
                <i class="iconfont icon-hengxian1"></i>
                <i class="iconfont icon-hengxian1"></i>
              </span>
            </div>
          </div>
        </div>
        <div class="hot-recommend">
          <h2>热门推荐</h2>
          <div class="content">
            <div class="single-hot">
              <img src="../../assets/images/72db4170ef9561f283a2cb.jpg" alt />
              <span>冬季黄石别样美</span>
            </div>
            <div class="single-hot" style="margin-right:0px;margin-bottom:4%;">
              <img src="../../assets/images/72db4170ef9561f283a2cb.jpg" alt />
              <span>冬季黄石别样美</span>
            </div>
            <div class="single-hot">
              <img src="../../assets/images/72db4170ef9561f283a2cb.jpg" alt />
              <span>冬季黄石别样美</span>
            </div>
            <div class="single-hot" style="margin-right:0px;margin-bottom:4%;">
              <img src="../../assets/images/72db4170ef9561f283a2cb.jpg" alt />
              <span>冬季黄石别样美</span>
            </div>
          </div>
        </div>
        <div class="attractions">
          <div class="header">
            <h2>必去景点</h2>
            <span>
              查看更多
              <i class="iconfont icon-arrow-right"></i>
            </span>
          </div>
          <div class="attractions-content">
            <div class="single-attractions">
              <img src="../../assets/images/lincoln_memorial_washington_dc.jpg" alt />
              <span>林肯纪念堂</span>
            </div>
            <div class="single-attractions">
              <img src="../../assets/images/lincoln_memorial_washington_dc.jpg" alt />
              <span>林肯纪念堂</span>
            </div>
            <div class="single-attractions">
              <img src="../../assets/images/lincoln_memorial_washington_dc.jpg" alt />
              <span>林肯纪念堂</span>
            </div>
            <div class="single-attractions" style="margin-right:0px;">
              <img src="../../assets/images/lincoln_memorial_washington_dc.jpg" alt />
              <span>林肯纪念堂</span>
            </div>
          </div>
        </div>
        <div class="discount">
          <img src="../../assets/images/banner-优惠专区.jpg" alt />
        </div>
        <div class="tour-sales">
          <h2>跟团游销量榜</h2>
          <div class="content">
            <div class="tour-product">
              <div class="product-img">
                <img src="../../assets/images/0243566ed0eee08a010b99.jpg" alt />
              </div>
              <div class="product-info"></div>
            </div>
          </div>
          <span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dest'
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
      .slider {
        ul {
          //   justify-content: space-between;
          overflow: hidden;
          display: flex;
          width: 100%;
          padding: 0 8px;
          //   margin-bottom: 38px;
          box-sizing: border-box;

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

      .single-hot {
        position: relative;
        width: 48%;
        margin-right: 4%;
        margin-bottom: 4%;
        box-sizing: border-box;
        overflow: hidden;

        img {
          width: 100%;
          height: 24vw;
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

      .single-attractions {
        width: 23%;
        margin-right: 2.66%;

        img {
          width: 100%;
          height: 25.1vw;
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
          min-height: 56vw;
          border-radius: 4px;
          position: relative;
          overflow: hidden;

          img {
            width: 100%;
            min-height: 16vh;
            height: 16vh;
          }
        }
      }
    }
  }
}
</style>
