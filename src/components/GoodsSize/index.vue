<template>
  <div id="mask" @click="hidden" v-show="isShow">
    <div class="content" @click.stop>
      <div class="mes">
        <div class="img">
          <img src="../../assets/img/图层 7.png" alt />
        </div>
        <div class="desc">
          <h3>红玫瑰花束 送女友 送老婆 镇店之...</h3>
          <p>
            <span style="fontSize: 22px">￥</span> 189
            <span style="fontSize : 22px">.00</span>
          </p>
          <div class="sale">
            <ul>
              <li class="fis">库存 1525</li>
              <li>销量 1452</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="Specifications">
        <div class="number">
          <h4>规格:</h4>
          <ul>
            <li @click="tab = '11支'" :class="{ active: tab == '11支' }">11支</li>
            <li @click="tab = '16支'" :class="{ active: tab == '16支' }">16支</li>
            <li @click="tab = '22支'" :class="{ active: tab == '22支' }">22支</li>
            <li @click="tab = '99支'" :class="{ active: tab == '99支' }">99支</li>
            <li @click="tab = '111支'" :class="{ active: tab == '111支' }">111支</li>
            <li @click="tab = '166支'" :class="{ active: tab == '166支' }">166支</li>
            <li @click="tab = '999支'" :class="{ active: tab == '999支' }">999支</li>
          </ul>
        </div>
        <div class="color">
          <h4>颜色:</h4>
          <ul>
            <li :class="{ active: color == '红色' }" @click="color = '红色'">红色</li>
            <li :class="{ active: color == '白色' }" @click="color = '白色'">白色</li>
            <li :class="{ active: color == '粉色' }" @click="color = '粉色'">粉色</li>
          </ul>
        </div>
      </div>
      <div class="buy">
        <h4>购买数量:</h4>
        <div class="btn">
          <div class="reduce" @click="reduce">-</div>
          <span>{{ num }}</span>
          <div class="add" @click="add">+</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Detail",
  props: {
    isShow: Boolean
  },
  data() {
    return {
      tab: "11支",
      color: "红色",
      num: 1
    };
  },
  methods: {
    hidden() {
      // this.isShow = !this.isShow;
      this.$emit("change", false);
    },
    add() {
      this.num++;
    },
    reduce() {
      if (this.num == 0) {
        this.num = 0;
      } else {
        this.num--;
      }
    }
  }
};
</script>

<style scoped lang="less">
* {
  margin: 0;
  padding: 0;
}
.active {
  background-color: rgb(239, 43, 103);
}
#mask {
  width: 100%;
  // display: none;
  height: 1105px;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  left: 0;
  bottom: 104px;
  z-index: 1000;
  .content {
    width: 100%;
    height: 844px;
    background-color: white;
    position: absolute;
    left: 0;
    bottom: 0;
    .mes {
      width: 100%;
      height: 210px;
      box-sizing: border-box;
      border-bottom: 1px solid rgb(224, 224, 224);
      display: flex;
      .img {
        flex: 1;
        height: 100%;
        align-items: center;
        img {
          width: 130px;
          height: 130px;
          border-radius: 2px;
          margin: 40px 30px 40px 30px;
        }
      }
      .desc {
        flex: 4;
        h3 {
          font-size: 32px;
          width: 100%;
          height: 32px;
          text-overflow: ellipsis;
          margin-top: 39px;
          margin-right: 42px;
        }
        p {
          font-size: 32px;
          color: red;
          margin-top: 23px;
        }
        .sale {
          ul {
            display: flex;
            li {
              font-size: 22px;
              color: rgb(153, 153, 153);
              margin-right: 48px;
              margin-top: 26px;
            }
          }
        }
      }
    }
    .Specifications {
      width: 100%;
      height: 472px;
      .number,
      .color {
        h4 {
          font-size: 28px;
          margin-left: 31px;
        }
        ul {
          display: flex;
          flex-wrap: wrap;
          margin-left: 16px;
          li {
            width: 150px;
            height: 60px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 2px;
            border: 1px solid rgb(102, 102, 102);
            margin: 15px;
            font-size: 28px;
            text-align: center;
          }
        }
      }
    }
    .buy {
      width: 100%;
      height: 160px;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: center;
      h4 {
        font-size: 28px;
        display: flex;
        margin-left: 31px;
        align-items: center;
        flex: 1;
      }
      .btn {
        flex: 2;
        display: flex;
        font-size: 32px;
        line-height: 34px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        div {
          width: 100px;
          height: 60px;
          border: 1px solid rgb(102, 102, 102);
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0px 47px;
        }
        .add {
          margin-right: 30px;
        }
      }
    }
  }
}
</style>
