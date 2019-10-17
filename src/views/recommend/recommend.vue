<template>
  <div class="recommend-page">
    <div class="search">
      <i class="iconfont icon-fanhui" @click="goBack"></i>
      <van-search placeholder="城市、景点、产品、关键字" class="searchBar" shape="round"></van-search>
    </div>
    <div class="recommendList">
      <div class="leftList">
        <ul>
          <li
            v-for="item in countryList"
            :class="{active: id===item.id}"
            :key="item.name"
            @click="fn(item.id)"
          >{{item.name}}</li>
        </ul>
      </div>
      <div class="rightList">
        <p class="citytitle">热门城市</p>
        <div class="hot-city">
          <div class="hotcity-tabs" v-for="item in hotcity" :key="item.id">
            <div class="label">
              <span>{{ item.tag }}</span>
            </div>
            <img :src="item.image_url" alt />
            <p>{{ item.name }}</p>
          </div>
        </div>
        <div class="hot-country">
          <p class="countrytitle" v-if="isShow">热门国家</p>
          <ul>
            <li v-for="item in hotcountry" :key="item.id">{{item.name}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Recommend',

  data() {
    return {
      countryList: [],
      id: 3
    }
  },
  methods: {
    fn(id) {
      this.id = id
    },
    goBack () { // 返回上一页
      this.$router.back()
    }
  },
  computed: {
    hotcity: function() {
      var _this = this
      return this.countryList.filter(function(item) {
        return item.id === _this.id
      })[0].city
    },

    hotcountry: function() {
      var _this = this
      return this.countryList.filter(function(item) {
        return item.id === _this.id
      })[0].country
    },

    isShow() {
      if (this.hotcountry.length > 0) {
        return true
      } else {
        return false
      }
    }
  },
  created() {
    axios
      .get('https://app.toursforfun.com/api/destination/v1')
      .then(Response => {
        this.countryList = Response.data.data
        // console.log(Response.data.data)
      })
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/common/mixins.scss';

.recommend-page {
  display: flex;
  height: 100%;
  flex-direction: column;

  .search {
    @include border-bottom;
    display:flex;
    align-items: center;
    justify-content: space-around;
    height: 44px;
    width: 100%;
    i {
      width:30px;
      font-size:22px;
    }
  }
  .searchBar {
    flex:1;
    padding: 5px;
    // background: red;
  }
  .recommendList {
    display: flex;
    flex: 1;

    .leftList {
      width: 24%;
      background: #eeeeee;
      ul {
        height: 100%;
        .active {
          background: #fff;
          @include border-left;
        }
        li {
          height: 50px;
          color: #363636;
          font-size: 14px;
          line-height: 50px;
          text-indent: 10px;
          position: relative;
        }
      }
    }

    .rightList {
      flex: 1;
      background: #fff;
      height: 100%;
      padding: 15px 15px 0 15px;
      box-sizing: border-box;

      .citytitle {
        font-size: 14px;
        margin-bottom: 8px;
        color: #767676;
      }
      .hot-city {
        display: flex;
        flex-wrap: wrap;
        margin-bottom: 10px;
        justify-content: space-between;

        .hotcity-tabs {
          width: 21.3vw;
          font-size: 14px;
          position: relative;

          .label {
            position: absolute;
            width: 91%;
            height: 17px;
            line-height: 17px;
            left: 0;
            overflow: hidden;
            border-radius: 4px 0 8px;
            display: flex;
            background: linear-gradient(135deg, #fe8166, #ff6a7f, #ff425c);
            align-items: center;
            -webkit-box-pack: center;
            text-align: center;

            span {
              height: 17px;
              text-align: center;
              font-size: 12px;
              color: #fff;
              transform: scale(0.9);
            }
          }

          img {
            border-radius: 8px;
            margin-bottom: 6px;
            width: 21.3vw;
            height: 21.3vw;
          }

          p {
            white-space: nowrap;
            height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            text-align: center;
            font-size: 12px;
            color: #363636;
          }
        }
      }

      .hot-country {
        display: flex;
        margin-bottom: 10px;
        // justify-content: space-between;
        flex-direction: column;

        .countrytitle {
          font-size: 14px;
          margin-bottom: 8px;
          color: #767676;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 10px;
          justify-content: space-between;
        }
        li {
          width: 30%;
          font-size: 12px;
          color: #767676;
          line-height: 20px;
          padding: 6px 2px;
          text-align: center;
          background: #f5f5f5;
          border-radius: 4px;
          margin-bottom: 12px;
        }
      }
    }
  }
}
</style>
