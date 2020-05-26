<template>
  <div id="footer">
    <div class="customerService">
      <i class="iconfont icon-icon_kefu"></i>
      <span style="position:absolute ; bottom: 10px; left:44px">客服</span>
    </div>
    <div class="addToCar">加入购物车</div>
    <div class="buyNow">立刻购买</div>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped lang="less">
#footer {
  width: 100%;
  height: 104px;
  background-color: red;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  text-align: center;
  font-size: 32px;
  line-height: 60px;
  color: white;
  .customerService {
    display: flex;
    flex-direction: column;
    position: relative;
    flex: 1;
    border-top: 1px solid rgb(153, 153, 153);
    // height: 100%;
    font-size: 22px;
    color: rgb(153, 153, 153);
    background-color: rgb(255, 255, 255);
    .iconfont {
      font-size: 40px;
      color: rgb(153, 153, 153);
    }
  }
  .addToCar {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 2;
    height: 100%;
    background-color: rgb(237, 143, 3);
  }
  .buyNow {
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 3;
    height: 100%;
    background-color: rgb(239, 43, 103);
  }
}
</style>
