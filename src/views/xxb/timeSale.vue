<template>
  <div class="timeSale">
    <Header />
    <div class="banner" style="width:100%;">
      <img style="width:100%" src="../../assets/baner4.jpg" />
    </div>
    <div style="width: 92%;margin: 0 auto;overflow:hidden">
      <!-- <div class="banner" style="width:100%;padding:20px 0">
        <img style="width:100%" src="../../assets/baner2.jpg" />
      </div> -->
      <p style="text-align:center;padding:5px 10px 10px;font-size:25px;">
        <span style="border-bottom:1px solid black;padding:0 20px;"
          >精品预告</span
        >
      </p>
      <div class="timeAdvance" style="width:100%">
        <a href="#"><img src="./img/TS1.jpg" alt=""/></a>
        <!-- <a href="#"><img src="./img/TS2.jpg" alt=""></a> -->
        <a href="#"><img src="./img/TS3.jpg" alt=""/></a>
        <a href="#"><img src="./img/TS4.jpg" alt=""/></a>
        <a href="#"><img src="./img/TS5.jpg" alt=""/></a>
        <a href="#"><img src="./img/TS6.jpg" alt=""/></a>
        <a href="#"><img src="./img/TS7.jpg" alt=""/></a>
      </div>
      <div class="timeSaleing" style="overflow: hidden;width:100%">
        <p>
          <span>{{ timeH }}点场火热进行中</span
          ><span style="font-size:17px;color:red">结束倒计时:{{ timeE }}</span>
        </p>
        <div class="saleingProduct">
          <a href="#">
            <img src="./img/MS1.png" />
          </a>
          <p>【新品热销】木棉森 冬季短款气质简约羽绒服</p>
          <p><span>￥699</span><span>￥1299</span><button>立即秒杀</button></p>
        </div>
        <div class="saleingProduct">
          <a href="#">
            <img src="./img/MS1.png" />
          </a>
          <p>【新品热销】木棉森 冬季短款气质简约羽绒服</p>
          <p><span>￥699</span><span>￥1299</span><button>立即秒杀</button></p>
        </div>
        <div class="saleingProduct">
          <a href="#">
            <img src="./img/MS1.png" />
          </a>
          <p>【新品热销】木棉森 冬季短款气质简约羽绒服</p>
          <p><span>￥699</span><span>￥1299</span><button>立即秒杀</button></p>
        </div>
        <div class="saleingProduct">
          <a href="#">
            <img src="./img/MS1.png" />
          </a>
          <p>【新品热销】木棉森 冬季短款气质简约羽绒服</p>
          <p><span>￥699</span><span>￥1299</span><button>立即秒杀</button></p>
        </div>
        <div class="saleingProduct">
          <a href="#">
            <img src="./img/MS1.png" />
          </a>
          <p>【新品热销】木棉森 冬季短款气质简约羽绒服</p>
          <p><span>￥699</span><span>￥1299</span><button>立即秒杀</button></p>
        </div>
        <div class="saleingProduct">
          <a href="#">
            <img src="./img/MS1.png" />
          </a>
          <p>【新品热销】木棉森 冬季短款气质简约羽绒服</p>
          <p><span>￥699</span><span>￥1299</span><button>立即秒杀</button></p>
        </div>
        <div class="saleingProduct">
          <a href="#">
            <img src="./img/MS1.png" />
          </a>
          <p>【新品热销】木棉森 冬季短款气质简约羽绒服</p>
          <p><span>￥699</span><span>￥1299</span><button>立即秒杀</button></p>
        </div>
      </div>
    </div>
    <weibu />
     <storeNav thisPage="3" class="storeNav"/>
  </div>
</template>

<script>
import Header from "../../components/WebHeader/index";
import weibu from "../../components/weibu";
import storeNav from "../../views/xxb/nav"
export default {
  components: {
    Header: Header,
    weibu: weibu,
    storeNav:storeNav,
  },
  props: {},
  data() {
    return {
      timeH: "00",
      timeE: "00:00"
    };
  },
  created() {
    (() => {
      setInterval(() => {
        let timeAll =
          3600 -
          Number(
            new Date()
              .toString()
              .split(" G")[0]
              .split(":")[
              new Date()
                .toString()
                .split(" G")[0]
                .split(":").length - 2
            ]
          ) *
            60 +
          Number(
            new Date()
              .toString()
              .split(" G")[0]
              .split(":")[
              new Date()
                .toString()
                .split(" G")[0]
                .split(":").length - 1
            ]
          );
        let timeF =
          String(Math.floor(timeAll / 60)).length === 1
            ? "0" + String(Math.floor(timeAll / 60))
            : String(Math.floor(timeAll / 60));
        let timeM =
          String(59 - (timeAll % 60)).length === 1
            ? "0" + String(59 - (timeAll % 60))
            : String(59 - (timeAll % 60));
        // console.log(typeof timeM)
        this.$data.timeE = timeF + ":" + timeM;
        // console.log();
        let hour = new Date()
          .toString()
          .split(" G")[0]
          .split(":")
          [
            new Date()
              .toString()
              .split(" G")[0]
              .split(":").length - 3
          ].split(" ")[
          new Date()
            .toString()
            .split(" G")[0]
            .split(":")
            [
              new Date()
                .toString()
                .split(" G")[0]
                .split(":").length - 3
            ].split(" ").length - 1
        ];
        this.$data.timeH = hour.length === 1 ? "0" + hour : hour;
      }, 1000);
    })();
  }
};
</script>
<style scoped>
.timeAdvance {
  overflow: hidden;
}
.timeAdvance a {
  float: left;
  border: 1px solid #cccccc;
  margin: 0 calc((100% / 6 - 182px) / 2);
}
.timeAdvance img {
  width:180px;
  height: 450px;
  display: block;
}
.timeSaleing {
  width: 100%;
  /* height: 300px; */
  /* background-color: red; */
  margin-top: 30px;
}
.timeSaleing > p {
  font-size: 25px;
  padding: 5px 10px;
  margin: 20px 0 10px;
  box-sizing: border-box;
  border-bottom: 1px solid #cccccc;
  position: relative;
}
.timeSaleing > p > span:nth-of-type(2) {
  position: absolute;
  right: 10px;
  bottom: 5px;
}
.saleingProduct {
  /* display: block; */
  width: 270px;
  height: 340px;
  /* background-color: blue; */
  float: left;
  border: 1px solid #cccccc;
  margin: 10px calc((25% - 272px) / 2);
  position: relative;
}
.saleingProduct a {
  width: 100%;
  height: 100%;
  display: block;
}
.saleingProduct img {
  width: 100%;
  height: 100%;
  display: block;
}
.saleingProduct > p:nth-of-type(1) {
  position: absolute;
  width: 100%;
  top: 240px;
  padding: 0 10px;
  box-sizing: border-box;
}
.saleingProduct > p:nth-of-type(2) {
  position: absolute;
  width: 100%;
  top: 290px;
  padding: 0 5px;
  box-sizing: border-box;
}
.saleingProduct > p:nth-of-type(2) > span:nth-of-type(1) {
  font-size: 30px;
  color: red;
}
.saleingProduct > p:nth-of-type(2) > span:nth-of-type(2) {
  text-decoration: line-through;
  margin: 0 10px;
}
.saleingProduct > p:nth-of-type(2) > button {
  background: linear-gradient(to right, rgb(255, 214, 50), rgb(251, 149, 21));
  outline: none;
  border: 0;
  color: white;
  padding: 5px 10px;
  margin: 0 0 0 25px;
  cursor: pointer;
  position: relative;
  bottom: 5px;
}
.storeNav{
  position: fixed;
  bottom: 50px;
  right: 30px;
}
</style>
