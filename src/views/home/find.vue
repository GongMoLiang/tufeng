<template>
  <div class="find">
    <div class="title">
      <h2>发现</h2>
    </div>
    <div class="find-text">
      <ul class="left">
        <li
          v-for="item in citylist"
          :key="item.cid"
          @click="fn(item.cid)"
          :class="{active: id==item.cid}"
        >{{ item.name }}</li>
      </ul>
      <keep-alive>
        <ul class="right">
          <li
            v-for="item in destlist"
            :key="item.id"
            @click="goLine"
          >{{item.name? item.name:"暂无数据"}}</li>
        </ul>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  name: 'find',
  data () {
    return {
      citylist: [],
      id: 51,
      destlist: []
    }
  },
  methods: {
    fn (e) {
      this.id = e
      this.destlist = this.citylist.filter(item => {
        return item.cid == this.id
      })[0].children
    },
    goLine (e) {
      let tep = e.currentTarget.innerHTML
      this.$router.push({
        name: 'line',
        params: {
          value: tep
        }
      })
    }
  },
  created () {
    axios
      .get('https://app.toursforfun.com//api/article/menu')
      .then(Response => {
        this.citylist = Response.data.data
        this.destlist = this.citylist[0].children
      })
  }
}
</script>
<style lang="scss">
.find {
  .title {
    height: 43px;
    h2 {
      text-align: center;
      line-height: 43px;
      box-shadow: 0 1px 2px rgba(88, 88, 88, 0.1);
      margin: 0;
    }
  }
  .find-text {
    display: flex;
    .left {
      margin-top: 2px;
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
