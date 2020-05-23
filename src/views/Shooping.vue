<template>
  <div id="shopping">
    <div class="head">
      <div class="reback">
        <i class="iconfont icon-jiantouarrowhead7"></i> 返回
      </div>
      <div class="title">购物车</div>
      <div class="circle">
        <i class="iconfont icon-more"></i>
      </div>
    </div>
    <div class="commodity" v-for="(item, i) in list" :key="i" v-show="item.isShow">
      <mt-cell-swipe
        :right="[
    {
      content: '删除',
      style: { background: 'red', color: '#fff',lineHeight:'190px' ,textAlign:'center'
      ,fontSize: '28px', padding: '10px', width: '149px' },
      handler() {del(i)}
    }
  ]"
      >
        <div class="wrapper">
          <div class="selectd">
            <div class="select-circle" @click="select(i)">
              <i class="iconfont icon-dui3" v-show="item.check"></i>
            </div>
          </div>
          <div class="photo">
            <img src="../assets/logo.png" alt />
          </div>
          <div class="desc">
            <div class="name">
              <p style="fontSize:32px">{{item.desc}}</p>
            </div>
            <div class="price" style="fontSize:32px; color: #ff3300">
              <span>
                <span style="fontSize:22px">￥</span>
                {{item.price | setPoint}}
                <span
                  style="fontSize:22px"
                >.{{item.price | point}}</span>
              </span>
            </div>
            <div class="mes" style="fontSize:22px; color: #999999">规格：16枝 丨 颜色：红色</div>
          </div>
          <div class="num">
            <div class="number">{{item.number}}</div>
          </div>
          <!-- <div class="del">删除</div> -->
        </div>
      </mt-cell-swipe>
    </div>

    <div class="footer">
      <div class="all-price">
        <div>
          <span style="fontSize:22px">￥</span>
          <span style="fontSize:32px">{{allprice | setPoint}}</span>
          <span style="fontSize:22px">.{{allprice | point}}</span>
          <span style="fontSize:24px; color:#999999; marginLeft:20px">|不含配送费</span>
        </div>
      </div>
      <div class="pay">
        <div class="gotopay">去支付</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Shooping",
  data() {
    return {
      list: [
        {
          check: false,
          label: "1",
          desc: "满天星鲜花束 1束",
          price: 100.06,
          number: 1,
          isShow: true
        },
        {
          check: true,
          label: "2",
          desc: "99朵红玫瑰花束",
          price: 200.05,
          number: 3,
          isShow: true
        },
        {
          check: false,
          label: "3",
          desc: "33朵香槟玫瑰 1束",
          price: 30.3,
          number: 5,
          isShow: true
        }
      ]
    };
  },
  filters: {
    setPoint(val) {
      return parseInt(val);
      // let str = parseFloat(val).toFixed(2);
      // s = str + ""
      // s.substring(0,s.indexOf(".") + 3);
      // return parseFloat(val).toFixed(2)
    },
    point(val) {
      let number = parseFloat(val).toFixed(2);
      let str = number.toString();
      // console.log(str);
      str = str.split(".");
      // console.log(str[1]);
      return str[1];
    }
  },
  methods: {
    select(index) {
      this.list[index].check = !this.list[index].check;
    },
    del(index) {
      // console.log(index);
      this.list[index].isShow = false;
      this.list[index].check = false;
    }
  },
  computed: {
    allprice: function() {
      let ALLPRICE = 0;
      for (let i = 0; i < this.list.length; i++) {
        if (this.list[i].check == true) {
          ALLPRICE += this.list[i].price * this.list[i].number;
        }
      }
      return ALLPRICE;
    }
  }
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
/* 删除滑块 */

/* 底部 */
.footer {
  width: 100%;
  height: 105px;
  background-color: #444444;
  position: absolute;
  left: 0;
  bottom: 0;
  display: flex;
}
.all-price {
  width: 100%;
  height: 100%;
  flex: 3;
  font-size: 32px;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.all-price div {
  height: 34px;
}
.pay {
  width: 100%;
  height: 100%;
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ef2b67;
}
.gotopay {
  height: 34px;
  font-size: 32px;
  color: #ffffff;
}
/* 商品 */

.commodity {
  width: 100%;
  height: 190px;
  background-color: #fff;
  margin-bottom: 1px;
  display: flex;
  border-bottom: 1px solid #e0e0e0;
}
.wrapper {
  width: 750px;
  /* width: 100%; */
  height: 190px;
  display: flex;
  align-items: center;
}
.selectd {
  flex: 1;
  /* width: 105px; */
}
.select-circle {
  width: 46px;
  height: 46px;
  border: 1px solid #cccccc;
  border-radius: 50%;
  margin-left: 30px;
}
.select-circle .iconfont {
  font-size: 45px;
  color: #ed8f03;
  cursor: pointer;
}
.photo {
  width: 100%;
  height: 100%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
.desc {
  flex: 4;
  margin-left: 30px;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
.photo img {
  width: 130px;
  height: 130px;
  border-radius: 3px;
}
.num {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.number {
  width: 20px;
  height: 20px;
  font-size: 24px;
}
.price {
  margin: 20px 0px 20px 0px;
}

/* head */
#shooping {
  width: 100%;
  height: 50px;
  background-color: red;
}
.head {
  width: 100%;
  height: 80px;
  background-color: #1b1b1f;
  display: flex;
  color: white;
  font-size: 38px;
  align-items: center;
  margin-bottom: 30px;
}
.reback {
  margin-left: 20px;
  flex: 1;
}
.reback .iconfont {
  height: 100%;
  font-size: 23px;
  padding-bottom: 15px;
}
.title {
  text-align: center;
  flex: 3;
}
.circle {
  margin-right: 30px;
  text-align: center;
  justify-content: end;
  flex: 1;
}
.circle .iconfont {
  margin-left: 90px;
  font-size: 23px;
}
</style>