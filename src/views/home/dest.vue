<template>
  <div class="dest-header">
    <a href="#">
      <i class="iconfont icon-sousuo"></i>
    </a>
    <div class="city-container">
      <div class="city">
        <h1>美国</h1>
        <i class="iconfont icon-xialajiantou"></i>
      </div>
      <span class="tag">冬季国家公园</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dest'
}
</script>


<style lang="scss">
.dest-header {
  width: 100%;
  height: 441px;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);
  z-index: 999;

  a {
    position: absolute;
    right: 18px;
    top: 24px;
    color: #fff;
    font-size: 26px;

    .icon-sousuo {
      font-size: 22px;
      font-weight: bold;
    }
  }

  .bg img {
    width: 100%;
    height: 441px;
    z-index: -1;
  }

  .city-container {
    position: absolute;
    width: 100%;
    top: 15vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
    box-pack: center;
    box-align: center;

    .city {
      display: flex;
      justify-content: center;
      align-items: center;

      h1 {
        color: #fff;
        font-size: 49px;
        font-weight: bolder;
        letter-spacing: 5px;
        margin-bottom: 20px;
      }

      .icon-xialajiantou {
        font-size: 18px;
        margin-left: 6px;
        color: #fff;
      }
    }

    span {
      font-size: 14px;
      color: #fff;
      padding: 8px 15px;
      background: rgba(0, 0, 0, 0.35);
      border-radius: 15px;
      display: block;
    }
  }
}
</style>
