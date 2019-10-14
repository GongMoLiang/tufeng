<template>
    <div class="box">
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
        <!-- 轮播图 -->
        <div class='slide-show'>
            <van-swipe :autoplay="2000" indicator-color="white" >
                <van-swipe-item v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
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
    .search {
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
    .slide-show {
        width:100%;
        position:absolute;
        top:0;
        left:0;
        img {
            width:100%;
        }
    }
}

</style>
