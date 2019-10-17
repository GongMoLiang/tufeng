<template>
  <!-- 旅游列表页组件 -->
  <ul class="line-list">
    <li v-for="item in collectList" :key="item.id">
      <div class="left">
        <img :src="item.image[0].url" alt />
        <div class="mast">{{item.dest}} 出发</div>
      </div>
      <dl class="right">
        <dt>{{item.title}}</dt>
        <dd class="tag">
          <span v-for="(arr, index) in item.tag" :key="index">{{arr.name}}</span>
        </dd>
        <dd class="data">
          <div class="num">{{ Math.ceil(Math.random() * 100) }}</div>
          <div class="money">
            <span>{{item.price}}</span>起
          </div>
        </dd>
      </dl>
    </li>
  </ul>
</template>
<script>
import { mapState } from 'vuex'
export default {
  name: 'collectlist',
  computed: {
    ...mapState('collect', ['collectList'])
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
      position: relative;
      width: 140px;
      height: 140;
      img {
        width: 140px;
        border-radius: 10px;
        height: 140px;
      }
      .mast {
        height: 34px;
        width: 100%;
        position: absolute;
        bottom: 0;
        // padding: 0 4px;
        font-size: 14px;
        color: #fff;
        line-height: 34px;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
        background-color: rgba(0, 0, 0, 0.3);
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
