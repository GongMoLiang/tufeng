<template>
<!-- 旅游详情页 -->
    <div class="page-detail">
        <!-- 头部导航栏 -->
      <div class="nav-bar">
          <i class="iconfont icon-fanhui"></i>
          <ul>
              <li class="active">简介</li>
              <li>评价</li>
              <li>行程</li>
              <li>须知</li>
          </ul>
          <i class="iconfont icon-weibiaoti--"></i>
      </div>

      <!-- 详情信息 -->
      <div class="content">
          <!-- 图片信息-轮播图 -->
          <div class="slide-pic">
                <van-swipe @change="onChange">
                    <van-swipe-item>
                        <img src="//cdn.tff.bz/public/wt/c2/0d/20190619072202890932693.jpg?imageView2/1/w/720/h/520/q/100/format/jpg" />
                    </van-swipe-item>
                    <van-swipe-item>
                        <img src="//tffimg.tff.bz/c5/62/bef/969/97926ed056cbd51b45b8b0.jpg?imageView2/1/w/720/h/520/q/100/format/jpg" />
                    </van-swipe-item>
                    <div class="custom-indicator" slot="indicator">
                        {{ current + 1 }}/2
                    </div>
                </van-swipe>
                <div class="number">编号:<span>607767</span></div>
          </div>
          <!-- 价格、文字信息 -->
          <div class="text-describle">
              <p class="price">￥8956.96<span>起</span></p>
              <h3>【10人小团 老美达人带你玩 三文鱼洄游】黄石公园健行+泡温泉悠闲5日游：2日纯玩黄石+私人游艇环游黄石湖+骑马穿越黄石森林+大提顿缆车登顶赏秋枫（可升级2晚黄石别墅，特色酒店大篷车住宿）</h3>
              <!-- 小标签 -->
              <div  class="tab">
                <van-tag plain type="success">途风小众</van-tag>
                <van-tag plain type="success">达人领队</van-tag>
                <van-tag plain type="success">轻奢小众游</van-tag>
                <van-tag plain type="success">温泉体验</van-tag>
                <van-tag plain type="success">途风小众</van-tag>
              </div>
              <p>出发 <span>盐湖城</span></p>
              <p>结束 <span>盐湖城</span></p>
              <div class="others">
                  <p>行程 <span>5天</span></p>
                  <p>景点 <span>14个景点</span></p>
              </div>
              <div class="others">
                  <p>自费 <span>12项自费</span></p>
                  <p>服务语言 <span>中文 英语</span></p>
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
              <img src="https://tffimg.tff.bz/bc/08/92e/fd2/0ffe177b6f7619f02efb72.jpg?imageView2/1/q/20/format/jpg" alt="">
          </div>
          <!-- 须知 -->
          <div class="notice">
              <!-- 折叠面板 -->
              <van-collapse v-model="activeName" accordion>
                <van-collapse-item title="价格须知" name="1">价格须知信息</van-collapse-item>
                <van-collapse-item title="接送机" name="2">接送机内容巴拉巴拉</van-collapse-item>
                <van-collapse-item title="注意事项" name="3">注意啦啦巴拉巴拉巴拉</van-collapse-item>
               </van-collapse>
          </div>
      </div>

      <!-- 底部导航 -->
      <div class="foot-bar">
          <!-- 收藏、咨询 -->
          <div class="collect">
              <ul>
                  <li>
                      <i class="iconfont icon-aixin"></i>
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
</template>
<script>
export default {
    data() {
        return {
            current: 0,
            activeName: '1'
        }
    },
    methods: {
        onChange(index) {
        this.current = index;
        }
  }
}
</script>

</script>
<style lang="scss" scoped>
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
                        height:100%;
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
                    i{
                      font-size:18px;
                      margin-right:10px;
                    }
                }
                img{
                    width:100%;
                }

            }

            .notice {//须知
                padding:0 20px;
                border-top:10px solid #ececec;
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
