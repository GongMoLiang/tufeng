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
      </div>

      <!-- 底部导航 -->
      <div class="foot-bar"></div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            current: 0
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
        height:100%;
        .nav-bar{//头部导航栏
            width:100%;
            position: fixed;
            top:0;
            background:#fff;
            z-index: 999;
            display:flex;
            height:42px;
            flex-shrink: 0;
            justify-content: space-around;
            align-items: center;
            i {
                font-size:24px;
            }
            ul {
              display:flex;
              height:100%;
              align-items: center;
              li{
                 line-height:39px;
                 margin:0 5px;
                 padding:0 10px;
                 &.active{
                     color:#0190F6;
                     border-bottom: 2px solid #0190F6;
                 }
              }
            }
        }

        .content{//详情信息
            margin-top:42px;
            .slide-pic{//图片信息轮播图
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
                .number{
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
        }

        .foot-bar{//底部导航栏
            width:100%;
            position: fixed;
            bottom:0;
            background:coral;
            height:74px;
        }
    }
</style>
