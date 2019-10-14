<template>
  <!-- 旅游列表页组件 -->
  <ul class="line-list">
    <li>
      <div class="left">
        <img
          src="https://tffimg.tff.bz/80/c5/ff3/8c5/1240a581bf9b4db456109c.jpg?imageView2/1/w/990/h/660/q/75/format/jpg"
          alt
        />
      </div>
      <dl class="right">
        <dt>[8天]【洛杉矶进出小团】美西国家公园8日慢游：好莱坞环球影城+世界奇观羚羊彩穴+鬼斧神工大峡谷+锡安国家公园+布莱斯国家公园+马蹄湾+棕榈泉购物+洛杉矶+拉斯维加斯</dt>
        <dd class="tag">
          <span>赠送保险</span>
          <span>赠送保险</span>
        </dd>
        <dd class="data">
          <div class="num">72人出游</div>
          <div class="money">
            <span>￥9871</span>起
          </div>
        </dd>
      </dl>
    </li>
  </ul>
</template>
<script>
export default {
  //   name: linelist
  mounted() {
    console.log()
  }
}
</script>
<style lang="scss">
.line-list {
  padding: 0 22px;
  li {
    display: flex;
    margin-top: 20px;
    border-radius: 10px;
    box-shadow: 0 5px 10px -7px #5e5e5e;
    .left {
      width: 140px;
      height: 140;
      img {
        width: 140px;
        border-radius: 10px;
        height: 140px;
      }
    }
    .right {
      overflow: hidden;
      margin-left: 10px;
      margin-top: 5px;
      dt {
        height: 60px;
        width: 100%;
        line-height: 20px;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        font-size: 15px;
        overflow: hidden;
        color: #363636;
        font-weight: bold;
        box-sizing: border-box;
        text-overflow: ellipsis;
      }
      .tag {
        margin-top: 5px;
        span {
          height: 16px;
          font-size: 12px;
          margin-right: 10px;
          padding: 2px 6px;
          color: #fff;
          border-radius: 2px;
          background-image: -webkit-linear-gradient(
            left,
            #fe855d,
            #fe767e,
            #ff7188
          );
        }
      }
      .data {
        display: flex;
        padding: 0 10px 0 5px;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        height: 40px;
        .num {
          color: #b6b6b6;
          font-size: 12px;
        }
        .money {
          span {
            color: #ff5400;
            font-weight: bold;
            font-size: 18px;
            margin-right: 5px;
          }
        }
      }
    }
  }
}
</style>