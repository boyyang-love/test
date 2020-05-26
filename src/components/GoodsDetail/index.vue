<template>
  <div id="detail">
    <Header />
    <div class="img">
      <img src="../../assets/img/花1.png" alt @click="buy" />
    </div>
    <div class="des">
      <h3>玫瑰花束 玫瑰花 爱情的精灵！</h3>
      <h4>特别提醒：此鲜花由于制作时间较长，请提前 5 小时下单！</h4>
      <div class="sale">
        <ul>
          <li class="fis">库存 1525</li>
          <li>销量 1452</li>
          <li>三环内免费配送</li>
        </ul>
      </div>
      <div class="price">
        <div class="salePrice" style="color: red; lineHeight:50px">
          <span style="fontSize: 34px;">￥</span>
          <span style="fontSize: 48px;">45</span>
          <span style="fontSize: 34px;">.50</span>
        </div>
        <div class="card">
          <ul>
            <li>新鲜采摘</li>
            <li>支付保证</li>
            <li>配送保证</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="separate"></div>
    <div class="goodsDetail">
      <div class="title">
        <div class="box"></div>
        <div class="descript">商品详情:</div>
      </div>
    </div>
    <div class="img">
      <img src="../../assets/img/图片详情.png" alt="tupian" />
    </div>
    <div class="shoopingCar">
      <i class="iconfont icon-gouwuche1" @click="gotocar"></i>
    </div>
    <GoodsSize :isShow="isShow" @change="change" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoodsSize from "@/components/GoodsSize";
export default {
  name: "GoodsDetail",
  data() {
    return {
      isShow: false
    };
  },
  components: {
    Header,
    Footer,
    GoodsSize
  },
  methods: {
    gotocar() {
      this.$router.push({ path: "shooping" });
    },
    buy() {
      this.isShow = !this.isShow;
    },
    change(data) {
      // console.log(data);
      this.isShow = data;
    }
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
#detail {
  margin-top: 90px;
  min-height: 100%;
  margin-bottom: 104px;
  .img {
    width: 100%;
    height: 401px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .des {
    width: 100%;
    // height: 265px;
    h3 {
      font-size: 36px;
      line-height: 50px;
      font-family: "PingFang-SC-Bold";
      margin-top: 29px;
      margin-left: 32px;
    }
    h4 {
      font-size: 24px;
      line-height: 60px;
      font-family: "PingFang-SC-Mediu";
      color: rgb(255, 51, 0);
      margin-top: 20px;
      margin-left: 32px;
    }
    .sale {
      margin-top: 31px;
      width: 100%;
      ul {
        width: 100%;
        display: flex;
        li {
          font-size: 22px;
          color: rgb(153, 153, 153);
          margin-left: 48px;
        }
        .fis {
          margin-left: 32px;
        }
      }
    }
    .price {
      margin-top: 33px;
      margin-left: 32px;
      display: flex;
      justify-content: start;
      .card {
        margin-right: 29px;
        color: rgb(237, 143, 3);
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        ul {
          display: flex;
          padding-bottom: 32px;
          li {
            box-sizing: border-box;
            width: 111px;
            height: 44px;
            border: 1px solid rgb(237, 143, 3);
            text-align: center;
            margin-left: 21px;
            font-size: 22px;
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
  .separate {
    width: 100%;
    height: 30px;
    background-color: rgb(224, 224, 224);
  }
  .goodsDetail {
    .title {
      display: flex;
      align-items: center;
      .box {
        width: 10px;
        height: 50px;
        margin-top: 16px;
        margin-bottom: 16px;
        background-color: rgb(237, 143, 3);
      }
      .descript {
        font-size: 28px;
        line-height: 60px;
        // margin-top: 16px;
        margin-left: 32px;
        font-family: " PingFang-SC-Bold ";
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  }
  .img {
    width: 100%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .shoopingCar {
    position: fixed;
    right: 31px;
    bottom: 194px;
    .iconfont {
      font-size: 100px;
      color: rgb(0, 0, 0);
      opacity: 0.5;
    }
  }
}
</style>
