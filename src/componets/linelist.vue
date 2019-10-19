<template>
  <!-- 旅游列表页组件 -->
  <ul class="line-list">
    <li v-for="item in lineList" :key="item.id_new" @click="goDetail(item.id_new)">
      <div class="left">
        <img :src="item.image" alt />
        <div class="mast">&emsp;{{item.departure_desc}}出发</div>
      </div>
      <dl class="right">
        <dt>{{item.name}}</dt>
        <dd class="tag">
          <span v-for="arr in item.tags" :key="arr.name">{{arr.name}}</span>
        </dd>
        <dd class="data">
          <div class="num">{{ item.order_count }}人出游</div>
          <div class="money">
            <span>￥{{ item.default_price*7}}</span>起
          </div>
        </dd>
      </dl>
    </li>
  </ul>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'linelist',
  props: {
    value: {
      type: String,
      default: 'boutique'
    },
    curpageNum: {
      type: Number,
      default: 1
    }
  },
  computed: {
    ...mapState('linelist', ['lineList'])
  },
  methods: {
    ...mapActions('linelist', ['getlineList']),
    // 携带id去详情页面
    goDetail (id) {
      this.$router.push({
        name: 'detail',
        params: {
          id: id,
          value: this.value
        }
      })
    }
  },
  created () {
    // console.log(this.value)
    this.getlineList({ type: this.value, page: this.curpageNum })
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
