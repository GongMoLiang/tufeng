<template>
  <div class="page-card">
    <van-nav-bar
      title="购物车"
      left-text="返回"
      :right-text="ishow? '编辑':'完成' "
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <ul>
      <li v-for="(item,index) in cartList" :key="index">
        <van-checkbox v-model="checked" shape="square" v-if="ishow" @click="checkone(item.id)"></van-checkbox>
        <span class="delete iconfont icon-shanchu" v-else></span>
        <div class="left">
          <dl>
            <dt>
              <img :src="item.image" alt />
            </dt>
            <dd>
              <div class="title">{{item.name}}</div>
              <div class="info">
                <span class="iconfont icon-feiji"></span>
                <span>2019-10-25 出发</span>
                <span>成人2</span>
                <span>儿童0</span>
              </div>
            </dd>
          </dl>
          <div class="money">
            <i>{{item.default_price*7}}</i>起
          </div>
        </div>
      </li>
    </ul>
    <div class="footerbar">
      <div class>
        <van-checkbox v-model="checkedAll" shape="square" :disabled="!ishow" @click="checkAll">全选</van-checkbox>
      </div>

      <span class="he">合计</span>
      <span>￥0.00</span>
      <button>立即预定</button>
    </div>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'cart',
  data() {
    return {
      checked: false,
      ishow: true,
      checkedAll: false,
      cartListId: [103254168, 102295677],
      cartList: [],
      id: 0,
      que: []
    }
  },
  computed: {
    ...mapState('linelist', ['lineList']),
    getlength() {
      // for (var i = 0; i < this.cartListId.length; i++) {
      //   this.que.push({ value: flase })
      // }
    }
  },
  methods: {
    onClickRight() {
      this.ishow = !this.ishow
    },
    onClickLeft() {
      this.$router.back()
    },
    checkAll() {
      this.checked = true
    }
  },

  created() {
    var that = this
    this.cartListId.forEach(item => {
      this.lineList.forEach(arr => {
        if (item == arr.id_new) {
          this.cartList.push(arr)
        }
      })
    })
  }
}
</script>
<style lang="scss">
.page-card {
  ul {
    margin-top: 5px;
    padding: 0 5px;
    li {
      height: 120px;
      // background: red;
      display: flex;
      .van-checkbox {
        flex-shrink: 0;
        justify-content: center;
        margin-top: -20px;
      }
      .delete {
        width: 20px;
        height: 20px;
        display: block;
        font-size: 22px;
        color: #ff6700;
        margin-top: 40px;
      }
      .left {
        margin-left: 5px;
        dl {
          display: flex;
          dt {
            width: 70px;
            height: 70px;
            img {
              width: 70px;
            }
          }
          .title {
            padding: 0 4px;
            overflow: hidden;
            height: 50px;
            line-height: 24px;
            display: -webkit-box;
            font-size: 14px;
            color: #363636;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            // width: 100%;
            text-overflow: ellipsis;
          }
          .info {
            display: flex;
            justify-content: space-between;
            .icon-feiji {
              font-size: 20px;
            }
            span {
              font-size: 12px;
              margin: 0 6px;
            }
          }
        }
        .money {
          margin-top: 6px;
          i {
            color: #ff5400;
            font-weight: bold;
          }
        }
      }
    }
  }
  .footerbar {
    display: flex;
    width: 100%;
    position: fixed;
    bottom: 0;
    align-items: center;
    justify-content: space-around;
    .he {
      margin-left: 50px;
    }
    button {
      height: 72px;
      width: 126px;
      margin-right: -9px;
      border: none;
      font-size: 18px;
      color: #fff;
      outline: none;
      background-image: linear-gradient(120deg, #fd7320, #fd5651);
    }
  }
}
</style>
