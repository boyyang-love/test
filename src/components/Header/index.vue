<template>
  <div id="head">
    <div class="head">
      <div class="reback" @click="reback">
        <i class="iconfont icon-jiantouarrowhead7"></i> 返回
      </div>
      <div class="title">商品详情</div>
      <div class="circle">
        <i class="iconfont icon-more"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    reback() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped lang="less">
#head {
  width: 100%;
  height: 90px;
  background-color: #1b1b1f;
  color: white;
  font-size: 38px;
  line-height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  .head {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    .iconfont {
      font-size: 28px;
    }
    .reback {
      position: absolute;
      left: 20px;
    }
    .circle {
      position: absolute;
      right: 28px;
    }
  }
}
</style>
