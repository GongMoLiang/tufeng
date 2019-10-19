<template>
  <!-- 这是旅游列表页面 -->
  <div class="page-line">
    <!-- background: rgba(0,0,0,.4) -->
    <div class="box">
      <div class="gu" :class="{fixed: fshow}" :style="{'top': `${top}px`}">
        <van-popup v-model="show" position="right" :style="{ width: '80%', height: '100%' }">
          <h1>出发日期</h1>
          <span>自定义出发日期</span>
          <h2>行程天数</h2>
          <input type="text" placeholder="最少天数" class="left" /> ---
          <input type="text" placeholder="最多天数" />
          <h2>产品类型</h2>
          <ul>
            <li>常规团</li>
            <li>私家包团</li>
            <li>金品小团</li>
          </ul>
          <h2>人均价格</h2>
          <input type="text" placeholder="最少价格(￥)" class="left" v-model="num1" /> ---
          <input type="text" placeholder="最高价格(￥)" v-model="num2" />
          <div class="btn">
            <button>重置</button>
            <button class="active" @click="closePopup">确认</button>
          </div>
        </van-popup>
        <div class="detial-serch">
          <span class="iconfont icon-fanhui" @click="backHome"></span>
          <van-search placeholder="请输入搜索关键词" v-model="seachValue" shape="round" />
        </div>
        <div>
          <van-dropdown-menu>
            <van-dropdown-item title="出发地" ref="item" @open="goCity"></van-dropdown-item>
            <van-dropdown-item v-model="value" :options="option" @change="handlechange(value)" />
            <van-dropdown-item
              v-model="value"
              :options="option1"
              title="排序"
              @change="handleorder(value)"
            ></van-dropdown-item>
            <van-dropdown-item title="筛选" ref="item2" @open="showPopup"></van-dropdown-item>
          </van-dropdown-menu>
        </div>
      </div>
      <linelist :value="type"></linelist>
    </div>
  </div>
</template>
<script>
import linelist from '../../componets/linelist.vue'
import BScroll from 'better-scroll'
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'lvline',
  data () {
    return {
      num1: '',
      num2: '',
      value: '途风精品',
      option: [
        { text: '途风精品', value: '途风精品' },
        { text: '多日游', value: '多日游' },
        { text: '一日游', value: '一日游' },
        { text: '票务', value: '票务' },
        { text: '邮轮游', value: '邮轮游' },
        { text: '接送', value: '接送' }
      ],
      option1: [
        { text: '综合排序', value: '0' },
        { text: '销量由高到低', value: '1' },
        { text: '价格由低到高', value: '2' },
        { text: '价格由高到低', value: '3' }
      ],
      show: false,
      seachValue: '',
      curpageNum: 1,
      totalpage: 0,
      fshow: false,
      top: 0
    }
  },
  computed: {
    type () {
      if (this.seachValue == '途风精品') {
        return 'boutique'
      } else if (this.seachValue == '一日游') {
        return 'activity'
      } else if (this.seachValue == '票务') {
        return 'ticket'
      } else if (this.seachValue == '邮轮游') {
        return 'cruise'
      } else if (this.seachValue == '多日游') {
        return 'tour'
      } else if (this.seachValue == '接送') {
        return 'shuttle'
      }
    }
  },
  components: {
    linelist: linelist
  },
  methods: {
    ...mapActions('linelist', ['getlineList', 'total']),
    ...mapMutations('linelist', [
      'setlineList',
      'changelineList',
      'orderprice',
      'orderprice2',
      'pick'
    ]),
    backHome () {
      this.$router.push('/index')
    },
    showPopup () {
      this.show = true
    },
    goCity () {
      this.$router.push('/city')
    },
    closePopup () {
      this.show = false
      if (this.num1 == '' || this.num2 == '') {
        return
      }
      this.pick([this.num1, this.num2])
      this.num1 = this.num2 = ''
    },
    getValue () {
      let cval = this.$route.params.value
      this.seachValue = cval
      if (
        cval === '多日游' ||
        cval === '一日游' ||
        cval === '邮轮游' ||
        cval === '票务' ||
        cval === '接送'
      ) {
        this.value = this.$route.params.value
      }
      this.setlineList([])
    },
    handlechange (value) {
      this.seachValue = value
      this.setlineList([])
      this.getlineList({ type: this.type, page: this.curpageNum })
    },
    // 处理排序问题
    handleorder (value) {
      if (value == 1) {
        this.changelineList()
      } else if (value == 2) {
        this.orderprice()
      } else if (value == 3) {
        this.orderprice2()
      }
    }
  },
  created () {
    this.getValue()
  },
  mounted () {
    let bs = new BScroll('.page-line', {
      probeType: 3,
      click: true,
      pullUpLoad: true,
      open: true
    })
    bs.on('scroll', data => {
      if (data.y < 0) {
        this.fshow = true
        this.top = Math.abs(data.y)
      } else {
        this.fshow = false
      }
      // console.log(data)
    })
    bs.on('pullingUp', () => {
      this.totalpage = Math.ceil(this.total / 10)
      if (this.curpageNum >= this.totalpage) {
        return
      }
      this.$toast.loading({
        mask: true,
        message: '加载中...',
        duration: 4000
      })
      this.curpageNum++
      this.getlineList({
        type: this.type,
        page: this.curpageNum,
        callback: () => {
          bs.finishPullUp()
        }
      })
    })
  }
}
</script>
<style lang="scss">
.page-line {
  .van-popup .van-cell__title span {
    margin: 0 3px;
    width: 300px;
    padding: 7px 40px !important;
  }
  .box {
    overflow: hidden;
  }
  .fixed {
    z-index: 12;
    background: #fff;
    position: fixed;
    width: 100%;
    ~ ul {
      margin-top: 120px;
    }
  }
  height: 100%;
  .van-overlay {
    background-color: rgba(0, 0, 0, 0.3);
  }
  .van-popup {
    h2,
    h1 {
      margin: 20px 20px;
      color: #363636;
      font-size: 16px;
      font-weight: bold;
    }
    span {
      margin: 10px 40px;
      padding: 8px 40px;
      width: 246px;
      height: 32px;
      text-align: center;
      line-height: 32px;
      background-color: #eee;
      color: #767676;
      border-radius: 2px;
    }
    input {
      width: 100px;
      margin: 10px 0;
      background-color: #eee;
      outline: none;
      border: noe;
      text-align: center;
      // box-sizing: border-box;
      border-radius: 3px;
    }
    ul {
      display: flex;
      margin-left: 20px;
      width: 200px;
      flex-wrap: wrap;
      // justify-content: space-around;
      align-content: flex-start;
      li {
        width: 70px;
        text-align: center;
        margin: 0 15px 10px 0;
        line-height: 30px;
        height: 30px;
        border: 1px solid #eee;
        color: #363636;
        font-size: 12px;
      }
    }
    .btn {
      display: flex;
      padding: 30px 20px 10px 10px;
      // border-top: 1px solid rgb(172, 168, 168);
      justify-content: space-around;
      button {
        outline: none;
        border: none;
        width: 120px;
        height: 48px;
        border-radius: 6px;
        // display: block;
      }
      .active {
        background: #0090f2;
        color: #fff;
      }
    }

    .left {
      margin-left: 30px;
    }
  }
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
