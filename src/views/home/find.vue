<template>
  <div class="find">
    <h2>发现</h2>
    <div class="find-text">
      <ul class="left">
        <li
          v-for="item in citylist"
          :key="item.cid"
          @click="fn(item.cid)"
          :class="{active: id==item.cid}"
        >{{ item.name }}</li>
      </ul>
      <ul class="right">
        <li v-for="item in destlist" :key="item.id" @click="goLine">{{item.name}}</li>
        <!-- <li>纽约</li>
        <li>纽约</li>
        <li>纽约</li>-->
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      citylist: [],
      id: 51
    }
  },
  computed: {
    destlist: function () {
      var _this = this
      return this.citylist.filter(function (item) {
        return item.cid == _this.id
      })[0].children
    }
  },
  methods: {
    fn (e) {
      this.id = e
    },
    goLine (id) {
      // this.$router.push('/line')
      this.$router.push({
        path: '/line',
        params: {
          id: id
        }
      })
    }
  },
  created () {
    axios
      .get('https://app.toursforfun.com//api/article/menu')
      .then(Response => {
        // console.log(Response.data.data)
        this.citylist = Response.data.data
      })
  }
}
</script>
<style lang="scss">
.find {
  h2 {
    height: 43px;
    text-align: center;
    line-height: 43px;
    box-shadow: 0 1px 2px rgba(88, 88, 88, 0.1);
  }
  .find-text {
    // overflow: hidden;
    display: flex;
    .left {
      margin-top: 2px;
      // height: 600px;
      overflow: hidden;
      li {
        height: 48px;
        line-height: 48px;
        font-size: 13px;
        padding: 0 4px;
        width: 106px;
        box-sizing: border-box;
        background-color: #eee;
      }
      .active {
        border-left: 4px solid blue;
        background-color: #fff;
      }
    }
    .right {
      flex: 1;
      display: flex;
      margin-top: 10px;
      //   width: 100%;
      justify-content: space-around;
      align-content: flex-start;
      padding: 0 10px;
      flex-wrap: wrap;
      :first-child {
        color: #ff6700;
      }
      li {
        width: 120px;
        height: 38px;
        font-size: 12px;
        line-height: 38px;
        background-color: #eee;
        text-align: center;
        margin: 10px 0 10px 0;
      }
    }
  }
}
</style>
