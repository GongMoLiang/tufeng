<template>
    <div class="page-home">
       <div class="content">
          <router-view></router-view>
       </div>
       <ul class="footer-bar">
           <router-link tag="li" to="/index"><i class="iconfont icon-shouye"></i><span>首页</span></router-link>
           <router-link tag="li" to="/dest"><i class="iconfont icon-dingwei"></i><span>目的地</span></router-link>
           <router-link tag="li" to="/find"><i class="iconfont icon-faxian"></i><span>发现</span></router-link>
           <router-link tag="li" to="/order"><i class="iconfont icon-single"></i><span>订单</span></router-link>
           <router-link tag="li" to="/center"><i class="iconfont icon-My"></i><span>我的</span></router-link>
       </ul>
    </div>
</template>
<style lang="scss">
    .page-home{
        height: 100%;
        display: flex;
        overflow: hidden;
        flex-direction: column;
        .content{
            flex:1;
            overflow: auto;
        }
        .footer-bar{
            height: 50px;
            background: #462b2b;
            display: flex;
            li{
                display: flex;
                flex:1;
                text-align: center;
                justify-content: center;
                flex-direction: column;
                i{
                    font-size: 24px;
                    margin-bottom: 3px;
                }
                span{
                    font-size: 12px;
                }
            }
            .router-link-active{
                background: red;
                color: #fff !important;
            }
        }
    }
</style>
