<template>
<!-- 旅游详情页 -->
<div>
<div class="page-detail" v-if="ishow">
        <!-- 头部导航栏 -->
      <div class="nav-bar">
          <i class="iconfont icon-fanhui" @click="goBack"></i>
          <ul>
              <li :class="{active: id==0}" @click="fn2(0)">简介</li>
              <li :class="{active: id==1}" @click="fn2(1)">评价</li>
              <li :class="{active: id==2}" @click="fn2(2)">行程</li>
              <li :class="{active: id==3}" @click="fn2(3)">须知</li>
          </ul>
          <i class="iconfont icon-weibiaoti--"></i>
      </div>

      <!-- 详情信息 -->
      <div class="content">
          <div>
            <!-- 图片信息-轮播图 -->
            <div class="slide-pic">
                    <van-swipe @change="onChange" :loop="false">
                        <van-swipe-item>
                            <img :src="base.image_url" />
                        </van-swipe-item>
                        <van-swipe-item v-for="(image, index) in imgList" :key="index">
                            <img :src="image.url" />
                        </van-swipe-item>
                        <div class="custom-indicator" slot="indicator">
                            {{ current + 1 }}/{{imgList.length+1}}
                        </div>
                    </van-swipe>
                    <div class="number">编号:<span>{{base.product_old_id}}</span></div>
            </div>
            <!-- 价格、文字信息 -->
            <div class="text-describle">
                <p class="price">￥{{ Math.ceil((triple*1-base.discount*1)*7) }}<span>起</span></p>
                <h3>{{ info.name }}</h3>
                <!-- 小标签 -->
                <div  class="tab">
                    <van-tag plain type="success" v-for="tag in base.tags" :key="tag.product_icon_id">{{
                        tag.name }}</van-tag>
                </div>
                <p>出发 <span>{{startP}}</span></p>
                <p>结束 <span>{{endP}}</span></p>
                <div class="others">
                    <p>行程 <span>{{ base.duration }}天</span></p>
                    <p>景点 <span>{{ senic.attraction_num }}个景点</span></p>
                </div>
                <div class="others">
                    <p>自费 <span>{{senic.ownexpense_num}}项自费</span></p>
                    <p>服务语言 <span v-for="lang in language" :key="lang.provider_language_id">{{lang.name}}</span></p>
                </div>
            </div>
          </div>
          <!-- 评价 -->
          <div class="comment">
            <div class="total-row">
                <p><i class="iconfont icon-pingjia"></i>评价</p>
                <span>阅读全部<span>12</span>条评论</span>
            </div>
            <!-- 评价标签 -->
            <div class="com-tag">
                <h1>满意度：99%</h1>
                <van-tag plain round type="success">导游很NiceE 6</van-tag>
                <van-tag plain round type="success">旅途愉悦 5</van-tag>
                <van-tag plain round type="success">风景如画 3</van-tag>
                <van-tag plain round type="success">打call力荐 2</van-tag>
            </div>
            <!-- 买家评价 -->
            <div class="self-val">
                <div class="self-head">
                   <img src="https://cdn.tff.bz/public/wt/69/4f/app_comment_avatar.png" alt="">
                   <p>古灵精怪<i class="iconfont icon-xingxing"></i>
                   <i class="iconfont icon-xingxing"></i>
                   <i class="iconfont icon-xingxing"></i>
                   <i class="iconfont icon-xingxing"></i>
                   <i class="iconfont icon-xingxing"></i></p>
                   <span>2018-08-29 14:55:59</span>
                </div>
                 <p>
                    对导游的服务非常满意。一路对我们很关照，景点介绍的也很仔细，很为客人着想。
				</p>
            </div>
          </div>

          <!-- 行程 -->
          <div class="journey">
              <h1><i class="iconfont icon-hangchengdanxiao"></i>行程</h1>
              <p v-html="info.brief_description"></p>
          </div>
          <!-- 须知 -->
          <div class="notice">
              <!-- 折叠面板 -->
              <van-collapse v-model="activeName" accordion>
                <van-collapse-item title="价格须知" name="1"><p v-html="info.price_special_note"></p></van-collapse-item>
                <van-collapse-item title="接送机" name="2"><p v-html="info.airport_transfer_info"></p></van-collapse-item>
                <van-collapse-item title="注意事项" name="3"><p v-html="info.notice"></p></van-collapse-item>
               </van-collapse>
          </div>
      </div>

      <!-- 底部导航 -->
      <div class="foot-bar">
          <!-- 收藏、咨询 -->
          <div class="collect">
              <ul>
                  <!-- 点击收藏，设置localstorage -->
                  <li>
                      <i class="iconfont icon-aixin1" @click.self="shouCang" :class="{red: changecolor}"></i>
                      <p>收藏</p>
                  </li>
                  <li>
                      <i class="iconfont icon-kefu"></i>
                      <p>咨询</p>
                  </li>
              </ul>
          </div>
          <!-- 加入购物车 -->
          <div class="card">加入购物车</div>
          <!-- 立即预定 -->
          <div class="order">立即订购<p>（2人起订）</p></div>
      </div>
    </div>
   <van-loading type="spinner" color="blue" v-else/>
</div>

</template>
<script>
import axios from 'axios'
import Vue from 'vue'
import { Dialog } from 'vant'
import { mapState, mapMutations } from 'vuex'
Vue.use(Dialog)

export default {
  data () {
    return {
      id:0,
      current: 0,
      activeName: '1',
      language: [], // 语言
      base: {}, // 基础信息
      imgList: {}, // 轮播图
      info: {}, // 其他说明
      triple: '', // 最低价格
      startP: '',
      endP: '',
      senic: '',
      goodsID: '',//商品id
      ishow:false,
      changecolor: false
    }
  },
  computed: {
      ...mapState('collect',['collectList'])
  },
  methods: {
      ...mapMutations('collect',['setcollectList']),
    onChange (index) {
      this.current = index
    },
    goBack () { // 返回上一页
      this.$router.push({
          name: "line",
          params: {
             type: this.$route.params.value
          }
      })
    },
    fn2(id){
        this.id=id
        let top=document.getElementsByClassName('content')[0].children[id].offsetTop
         document.documentElement.scrollTop=top-26
    },
    shouCang () { // 添加收藏
      // 调用判断是否登录的方法，如果没有登录,则跳转到登录页面，
      let username = this.getUserInfo()
      if (username) { // 已经登录
        // let userCollect = window.localStorage.getItem(`${username}Collect`)
        // console.log(userCollect);
        // if ( userCollect ) {//个人收藏存在，
        //     var _this=this
        //     let cArr=JSON.parse(userCollect)
        //     cArr.forEach(function(item, index){//遍历，判断商品id是否存在，
        //         if( _this.goodsID === item){//存在，取消收藏，删除该id
        //             // cArr.splice(index,1)
        //             // //  console.log(bArr)
        //             //  window.localStorage.setItem(`${username}Collect`,JSON.stringify(cArr))
        //         }else{//id不存在,添加收藏
        //             cArr.push( _this.goodsID )
        //             window.localStorage.setItem(`${username}Collect`,JSON.stringify(cArr))
        //             return
        //         }
        //     })
        // } else {//不存在,新建一个对象保存收藏的商品id
        //     let goodsArr = []
        //     goodsArr.push(this.goodsID)
        //     window.localStorage.setItem(`${username}Collect`,JSON.stringify(goodsArr))
        // }

        // 方法二 把收藏的东西放到Vuex 仓库里
        // alert(1)
        this.changecolor= true
        let obj= {
            id: this.goodsID, // 商品id
            tag: this.base.tags, //标签
            price: Math.ceil((this.triple*1-this.base.discount*1)*7),  //价格
            num: 42,  //出游人数
            image: this.imgList, //图片信息
            title: this.info.name,
            dest: this.startP //出发地
        }
        if(this.collectList.length==0){
            this.setcollectList(obj)
        }
         this.collectList.forEach((item)=>{
            if(item.id==this.goodsID){
               return
            }
            this.setcollectList(obj)
        })


      } else { // 没有登录，弹出提示框，跳转到登录页面
        Dialog.alert({
          showCancelButton:true,
          title: '提示信息',
          message: '您还没有登录，请登录'
        }).then(() => {
          this.$router.push('/login')
        })
      }
    },
    getUserInfo () { // 判断是否已经登录
      let userInfo = JSON.parse(window.localStorage.getItem('userInfo'))
      if (userInfo) { // 已经登录
        return userInfo.username
      } else { // 没有登录
        return ''
      }
    }
  },
  created () {
    axios.get(`https://app.toursforfun.com/api/product/${this.$route.params.id}`).then(response => {
      let result = response.data.data
      this.base = result.base
      this.info = result.info
      this.language = result.language
      this.goodsID = result.base.product_id
      this.imgList = result.base.media.extra
      this.triple = this.info.product_price_display.triple
      this.startP = this.base.departure_city_name[0].departure_city_name
      this.endP = this.base.return_city_name[0].return_city_name
      this.senic = this.base.product_info_statistics
      this.ishow=true
    })
  },
}
</script>

<style lang="scss" scoped>
    // [v-cloak] {
    //     display:none;
    // }

.van-loading{
    position: fixed;
    top: 50%;
    left:50%;
    transform: translate(-50%,-50%)
}
    .page-detail{
        width:100%;
        height:100%;
        .nav-bar {//头部导航栏
            width:100%;
            position: fixed;
            top:0;
            left:0;
            background:#fff;
            z-index: 999;
            display:flex;
            height:42px;
            align-items: center;
            i {
                font-size:24px;
                width:30px;
                margin:0 20px;
            }
            ul {
              flex:1;
              display:flex;
              height:100%;
              align-items: center;
              justify-content: space-around;
              li{
                 line-height:39px;
                 &.active{
                     color:#0190F6;
                     border-bottom: 2px solid #0190F6;
                 }
              }
            }
        }

        .content {//详情信息
            margin-top:42px;
            padding-bottom:100px;
            .slide-pic {//图片信息轮播图
                position: relative;
                .van-swipe-item{
                    width:100%;
                    height:248px;
                    position: relative;
                    img {
                        width:100%;
                        height:248px;
                    }
                }
                .custom-indicator{//图片页码
                        font-size:14px;
                        color:#fff;
                        position:absolute;
                        display: inline;
                        bottom:30px;
                        right:20px;
                        border-radius: 2px;
                        padding: 4px 8px;
                        background: rgba(25,25,25,0.3);
                }
                .number{//编码
                        font-size:14px;
                        color:#fff;
                        position:absolute;
                        bottom:30px;
                        left:20px;
                        border-radius: 2px;
                        padding: 4px 8px;
                        background: rgba(25,25,25,0.3);
                    }
            }

            .text-describle {//文字描述信息
                margin:0 20px;
                padding-bottom:20px;
                border-bottom:1px solid #EEE;
                p {
                  font-size:14px;
                  color:#b6b6b6;
                  margin-bottom:24px;
                  flex:1;
                  span{
                      color:#363636;
                      margin-left:10px;
                  }
                }
                .others {
                    width:100%;
                    display:flex;
                    flex:1;
                    span{
                        color:#2B88ED;
                    }
                }
                .price {
                    line-height:60px;
                    font-size:24px;
                    color:#FB6010;
                    font-weight: bold;
                    margin-bottom:0;
                    span{
                        color:#FB6010;
                        font-weight: normal;
                        font-size:12px;
                        margin-left:5px;
                    }
                }
                h3{
                    font-size: 20px;
                    line-height: 28px;
                    font-weight: 700;
                    margin-bottom: 16px;
                }
                .tab {
                    font-size:16px;
                    margin-bottom: 18px;
                    overflow: hidden;
                    .van-tag {
                        line-height: 18px;
                        color: #3eb798;
                        border: 1px solid #3eb798;
                        border-radius: 2px;
                        margin-right: 7px;
                        margin-bottom: 6px;
                        padding: 0 10px;
                    }
                }
            }

            .comment {//评价
                margin:0 20px;
                padding:20px 0;
                border-bottom:1px solid #EEE;
                .total-row {//评价
                    display:flex;
                    justify-content: space-between;
                    line-height:40px;
                    p {
                        font-size:16px;
                        font-weight: bold;
                        i{
                            font-size:18px;
                            margin-right:10px;
                        }
                    }
                    span{
                        color:#0090f1;
                    }
                }
                .com-tag {//满意度标签
                    padding-bottom:20px;
                    border-bottom:1px dashed #EEE;
                    h1{
                        font-size: 18px;
                        color: #F3A60E;
                        font-weight: 700;
                        line-height:30px;
                        margin-bottom:10px;
                    }
                    .van-tag {
                        font-size:14px;
                        padding: 5px 8px;
                        border: 1px solid #F5A50E;
                        color: #F5A50E;
                        font-weight: 400;
                        border-radius: 20px;
                        margin-right: 7px;
                        display: inline-block;
                        margin-bottom: 10px;
                    }
                }
                .self-val{//买家评价
                  padding:10px 0;
                  p{
                    padding:10px 0;
                    font-size:16px;
                    color:#767676;
                    line-height:20px;
                  }
                  .self-head{
                      padding-top:10px;
                      display:flex;
                      justify-content: space-between;
                      img {
                          width:25px;
                          height:25px;
                          margin-right:10px;
                      }
                      p{
                        flex:1;
                        color:#b6b6b6;
                        font-size:14px;
                        padding:0;
                        i{
                            color:#F3A60E;
                        }
                      }
                      span{
                          color:#b6b6b6;
                          font-size:14px;
                      }
                  }
                }
            }

            .journey {//行程
                margin:0 20px;
                padding:20px 0;
                h1{
                    font-size:16px;
                    font-weight: bold;
                    margin-bottom:10px;
                    i{
                      font-size:18px;
                      margin-right:10px;
                    }
                }
                p {
                    line-height:20px;
                    color:#767676;
                    span{
                        color:red !important;
                    }
                }

            }

            .notice {//须知
                padding:0 20px;
                border-top:10px solid #ececec;
                margin-bottom: 100px;
            }
        }

        .foot-bar {//底部导航栏
            width:100%;
            position: fixed;
            bottom:0;
            height:74px;
            display:flex;
            align-items: center;
            box-shadow: 0 -3px 11px rgba(0,0,0,.1);
            background-color: #fff;
            color:#363636;
            .collect {//收藏、咨询
                flex:1;
                height:90%;
                ul{
                    display:flex;
                    height:100%;
                    align-items: center;
                    border-right:1px solid #eee;
                    li{
                        flex:1;
                        text-align:center;
                        i{
                          font-size:20px;
                          font-weight: bold;
                          color:#363636;
                        }
                        .red{
                            color: red;
                        }
                        p{
                          margin-top:5px;
                        }
                    }
                }
            }
            .card {//购物车
                flex:1;
                text-align: center;
                font-size:20px;
            }
            .order {//立即预定
                flex:1;
                display:flex;
                flex-direction: column;
                justify-content: center;
                font-size:20px;
                text-align:center;
                color:#fff;
                background: linear-gradient(120deg,#FE7600,#FF5750);
                height:100%;
                p{
                  font-size:12px;
                  line-height:20px;
                }
            }
        }
    }
</style>
