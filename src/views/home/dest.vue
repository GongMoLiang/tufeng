<template>
  <div class="dest-header">
    <div class="bg">
      <img src="../../assets/images/usa.jpg" alt />
    </div>
    <a href="#">
      <i class="iconfont icon-sousuo"></i>
    </a>
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
  height: 60vh;
  position: absolute;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.1);

  a {
    position: absolute;
    right: 18px;
    top: 24px;
    color: #fff;
  }

  .bg img {
    width: 100%;
    height: 441px;
  }
}
</style>
