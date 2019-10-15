<template>
  <div class="find">
    <h2>发现</h2>
    <div class="find-text">
      <ul class="left">
        <li v-for="item in citylist" :key="item.id" @click="fn">{{ item.name }}</li>
      </ul>
      <ul class="right">
        <li>纽约</li>
        <li>纽约</li>
        <li>纽约</li>
        <li>纽约</li>
      </ul>
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  data () {
    return {
      citylist: []
    }
  },
  methods: {
    fn (e) {
      let arr = document.getElementsByClassName('left')[0]

      // console.log(e.currentTarget.className)
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
    display: flex;
    .left {
      margin-top: 2px;
      li {
        height: 48px;
        line-height: 48px;
        font-size: 14px;
        padding: 0 4px;
        width: 100px;
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
      padding: 0 10px;
      flex-wrap: wrap;
      li {
        width: 114px;
        height: 38px;
        line-height: 38px;
        background-color: #eee;
        text-align: center;
        margin: 10px 0 10px 0;
      }
    }
  }
}
</style>
