<template>
    <div class="box">
        <!-- 轮播图 -->
        <van-swipe class="slide-show" :autoplay="3000" indicator-color="white" >
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" />
            </van-swipe-item>
        </van-swipe>

        <!-- 搜索框 -->
        <div class="search">
            <van-search
                placeholder="城市、景点、产品、关键字"
                show-action
                shape="round"
                >
                <div slot="action" class="iconfont icon-kefu"></div>
            </van-search>
        </div>

        <!-- 导航栏 -->
        <div class="nav-bar">
            <dl>
                <dt><img src="../../assets/images/tufengjingpin.jpg"></dt>
                <dd>途风精品</dd>
            </dl>
             <dl>
                <dt><img src="../../assets/images/duoriyou.jpg"></dt>
                <dd>多日游</dd>
            </dl>
             <dl>
                <dt><img src="../../assets/images/yiriyou.jpg"></dt>
                <dd>一日游</dd>
            </dl>
             <dl>
                <dt><img src="../../assets/images/dingzhilvxing.jpg"></dt>
                <dd>定制旅行</dd>
            </dl>
             <dl>
                <dt><img src="../../assets/images/youlunyou.jpg"></dt>
                <dd>游轮游</dd>
            </dl>
             <dl>
                <dt><img src="../../assets/images/piaowu.jpg"></dt>
                <dd>票务</dd>
            </dl>
             <dl>
                <dt><img src="../../assets/images/qianzheng.jpg"></dt>
                <dd>签证</dd>
            </dl>
             <dl>
                <dt><img src="../../assets/images/jiesong.jpg"></dt>
                <dd>接送</dd>
            </dl>

        </div>

        <!-- 抵用券图片 -->
        <div class="coupon">
            <img src="//cdn.tff.bz/f2/76/f1/750×180.jpg" alt="">
        </div>

        <!-- 热门目的地 -->
        <div class="destination">
            <h2>热门目的地</h2>
            <div class="assit-box">
                <ul>
                <li>
                    <img src="//cdn.tff.bz/f1/88/d1/20171225072550041698513.jpg?imageView2/1/w/208/h/276/q/100/format/jpg">
                    <p>纽约</p>
                </li>
                <li>
                    <img src="//cdn.tff.bz/f2/26/f5/shutterstock_1350766547.jpg?imageView2/1/w/208/h/276/q/100/format/jpg">
                    <p>加拿大赏枫</p>
                </li>
                <li>
                    <img src="//cdn.tff.bz/f2/e3/bc/1422994934641.png?imageView2/1/w/208/h/276/q/100/format/jpg">
                    <p>班芙公园</p>
                </li>
                 <li>
                    <img src="//cdn.tff.bz/f1/1e/3d/shutterstock_98530712.jpg?imageView2/1/w/208/h/276/q/100/format/jpg">
                    <p>新西兰</p>
                </li>
            </ul>
            </div>

        </div>

        <!-- 优惠专区图片 -->
        <div class="on-sale">
            <img src="//cdn.tff.bz/f2/windtour/e0/fb/banner-%E4%BC%98%E6%83%A0%E4%B8%93%E5%8C%BA.jpg?imageView2/1/w/664/h/316/q/85/format/jpg" alt="">
        </div>

        <!-- 新品上线 -->
        <div class="new-online">
            <div class="new-word">
                <h2>新品上线 </h2>
                <span>查看更多></span>
            </div>
            <ul>
                <li class="left-pic">
                    <img src="//cdn.tff.bz/public/wt/c2/0d/20190619072202890932693.jpg?imageView2/1/w/660/h/440/q/75/format/jpg">
                    <h3>【途风微旅行 主题乐园自由行】（4天3夜）加州5大乐园联玩套餐（含酒店）：迪士尼2日+入住迪士尼周边酒店+免费接送入园，环球影城、圣地亚哥海洋世界/乐高乐园</h3>
                    <p>￥1013<span>起</span></p>
                </li>
                <li>
                    <img src="//cdn.tff.bz/f2/windtour/ce/7b/873638897_0607ZY_2125MS.jpg?imageView2/1/w/660/h/440/q/75/format/jpg">
                    <h3>【途风微旅行 主题乐园自由行】（4天3夜）加州5大乐园联玩套餐（含酒店）：迪士尼2日+入住迪士尼周边酒店+免费接送入园，环球影城、圣地亚哥海洋世界/乐高乐园</h3>
                    <p>￥888<span>起</span></p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      images: [
        'https://cdn.tff.bz/f2/8c/f8/APP端banner.jpg?imageView2/1/w/750/h/562/q/90/format/jpg',
        'https://cdn.tff.bz/f1/53/2d/baibianmeixi1080809.jpg?imageView2/1/w/750/h/562/q/90/format/jpg',
        'https://cdn.tff.bz/f2/67/1c/1080809-模板MOBAN.jpg?imageView2/1/w/750/h/562/q/90/format/jpg',
        'https://cdn.tff.bz/f1/b6/9b/1080809-模板.jpg?imageView2/1/w/750/h/562/q/90/format/jpg',
        'https://cdn.tff.bz/f2/a4/a7/1080x809-190918.jpg?imageView2/1/w/750/h/562/q/90/format/jpg'

      ]
    }
  }
}
</script>

<style lang="scss">
.box {
    position:relative;
    // overflow: hidden;
    .search {//搜索框
        background: transparent;
        z-index:999;
        width:90%;
        position:absolute;
        top:5px;
        left:10px;
        .van-search{
            background: transparent !important;
        }
        .van-search__content{
             background: white;
             font-size:20px;
             color:#A1A1A1;
        }
        .van-icon-search{
            font-size:24px;
            color:#A1A1A1;
        }
       .icon-kefu {
           color:white;
           font-size:22px;
       }
    }

    .slide-show {//轮播图
        width:100%;
        height: 283px;
        overflow: hidden;
        img {
            width:100%;
            height: 100%;
        }
    }

    .nav-bar {//导航栏
        display:flex;
        flex-wrap: wrap;
        padding:20px 10px;
        dl {
            margin:5px 8px;
            width:72px;
            height:88px;
            img{
                width:100%;
            }
            dd{
                font-size:14px;
                color:#363636;
                text-align:center;
            }
        }
    }

    .coupon,.on-sale {//抵用券图片、优惠专区图片
        padding:0 26px;
        img{
            width:100%;
            border-radius: 4px;
        }
    }

    .destination{//热门目的地
        margin-top:10px;
        padding:0 26px;
        padding-bottom:30px;
        h2 {
            line-height:50px;
            font-size: 18px;
            color: #363636;
            font-weight: bolder;
        }
        .assit-box::-webkit-scrollbar {
            display: none;
        }
        .assit-box{
             flex:1;
             overflow-x:auto;
            ul{
            width:500px;
            li{
                float:left;
                margin-right:10px;
                border-radius: 10px;
                width:105px;
                height:138px;
                position:relative;
                img{
                    width:100%;
                    height:100%;
                    border-radius:4px;
                }
                p {
                    color:white;
                    width:100%;
                    line-height:37px;
                    position:absolute;
                    bottom:0;
                    left:0;
                    padding-left:10px;
                    box-sizing: border-box;
                    background: rgba(0,0,0,.4);
                    border-radius: 0 0 4px 4px;
                }
            }
        }
        }
    }

    .new-online{//新品上线
        margin:10px 0;
        padding:0 26px 20px;
        .new-word{
            display:flex;
            height:50px;
            justify-content:space-between;
            align-items: center;
            h2 {
            font-size: 18px;
            color: #363636;
            font-weight: bolder;
            }
            span{
                font-size:14px;
                color:#0090F2;
            }
        }
        ul{
            display:flex;
            li{
                width:154px;
                border-radius:4px;
                box-shadow: 0 2px 10px #e8e0e0;
                img{
                    width:100%;
                    border-radius:4px 4px 0 0;
                }
            }
            .left-pic{
                margin-right:20px;
            }
            h3 {
                font-size: 15px;
                line-height:20px;
                overflow: hidden;
                text-overflow: ellipsis;
                margin: 12px 0;
                font-weight: 700;
                display: -webkit-box;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
            p {
                text-align: right;
                font-size:20px;
                color:#fb5f10;
                font-weight: bold;
                line-height:30px;
                padding-bottom:10px;
                span {
                    font-size:14px;
                    color:#363636;
                    font-weight: normal;
                    margin-left:5px;
                }
            }
        }

    }
}

</style>
