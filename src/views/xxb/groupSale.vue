<template>
  <div class="groupSale">
    <Header />
    <div class="banner" style="width:100%">
      <img style="width:100%" src="../../assets/baner6.jpg" />
    </div>
    <div class="groupContent">
      <p style="text-align:center;font-size:25px;padding:5px 0;">
        <span style="border-bottom:1px solid black;padding:0 20px;"
          >精品推荐</span
        >
      </p>
      <div class="GCTop">
        <img src="./img/GS1.jpg" />
        <div class="GCCover">
          <p>INXX</p>
          <p>
            推荐理由：<br /><span style="margin-left:30px;">潮流制造场</span>
          </p>
          <p>
            推荐指数：
            <el-rate
              v-model="value"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
              style="margin-left:30px;"
            >
            </el-rate>
          </p>
          <span
            >已团<b style="color:red;font-size:40px;margin:0 10px;">{{
              groupNum
            }}</b
            >件</span
          >
        </div>
        <div class="GSList">
          <div class="GSproduct">
            <div><img src="./img/GS2.jpg" alt="" /></div>
            <div>
              <p>INXX</p>
              <b>INXX</b>
              <span>潮行者</span>
              <div>
                <p style="font-size:15px">推荐指数:</p>
                <el-rate
                  v-model="value1"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
                <p>已团800件</p>
              </div>
            </div>
          </div>
          <div class="GSproduct">
            <div><img src="./img/GS3.jpg" alt="" /></div>
            <div>
              <p>INXX</p>
              <b>INXX</b>
              <span>潮行者</span>
              <div>
                <p style="font-size:15px">推荐指数:</p>
                <el-rate
                  v-model="value2"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
                <p>已团1200件</p>
              </div>
            </div>
          </div>
          <div class="GSproduct">
            <div><img src="./img/GS4.jpg" alt="" /></div>
            <div>
              <p>INXX</p>
              <b>INXX</b>
              <span>潮行者</span>
              <div>
                <p style="font-size:15px">推荐指数:</p>
                <el-rate
                  v-model="value3"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                >
                </el-rate>
                <p>已团900件</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="GCMiddle">
        <p
          style="padding:5px 10px;font-size:25px;border-bottom:1px solid #cccccc;margin: 20px 0 10px"
        >
          热门拼品
        </p>
        <!-- <a href="#" class="groupSaleProduct">
          <img src="./img/GS8.jpg" />
          <p>【INXX】潮牌外套印花面料拼接连帽短款羽绒服</p>
          <p>
            <span>￥449</span><span>￥799</span
            ><button @click="toGroup">立即开团</button>
          </p>
        </a> -->
        <div class="groupSaleProduct" v-for="items in goodsList" :key="items.key">
          <span style="display:none">{{ items.pro_id }}</span>
          <img :src="items.pro_img" />
          <p>【INXX】潮牌外套印花面料拼接连帽短款羽绒服</p>
          <p>
            <span>￥449</span><span>￥799</span
            ><button class="groupButton" @click="toGroup($event)">立即开团</button>
          </p>
        </div>
        <!-- <a href="#" class="groupSaleProduct">
          <img src="./img/GS8.jpg" />
          <p>【INXX】潮牌外套印花面料拼接连帽短款羽绒服</p>
          <p><span>￥449</span><span>￥799</span><button>立即开团</button></p>
        </a>
        <a href="#" class="groupSaleProduct">
          <img src="./img/GS8.jpg" />
          <p>【INXX】潮牌外套印花面料拼接连帽短款羽绒服</p>
          <p><span>￥449</span><span>￥799</span><button>立即开团</button></p>
        </a>
        <a href="#" class="groupSaleProduct">
          <img src="./img/GS8.jpg" />
          <p>【INXX】潮牌外套印花面料拼接连帽短款羽绒服</p>
          <p><span>￥449</span><span>￥799</span><button>立即开团</button></p>
        </a>
        <a href="#" class="groupSaleProduct">
          <img src="./img/GS8.jpg" />
          <p>【INXX】潮牌外套印花面料拼接连帽短款羽绒服</p>
          <p><span>￥449</span><span>￥799</span><button>立即开团</button></p>
        </a>
        <a href="#" class="groupSaleProduct">
          <img src="./img/GS8.jpg" />
          <p>【INXX】潮牌外套印花面料拼接连帽短款羽绒服</p>
          <p><span>￥449</span><span>￥799</span><button>立即开团</button></p>
        </a> -->
      </div>
      <!-- <div class="GCMiddle">
        <p
          style="padding:5px 10px;font-size:25px;border-bottom:1px solid #cccccc;margin: 10px 0 10px"
        >
          热门拼团
        </p>
        <a class="groupSaleGroup">
          <img src="./img/GS8.jpg" />
          <p>
            【INXX】潮牌外套印花面料拼接连帽短款羽绒服<span>{{
              groupTime
            }}</span>
          </p>
          <p>
            <span><img src="./img/GS2.jpg" alt=""/></span>
            <span><img src="./img/GS2.jpg" alt=""/></span>
            <span></span>
            <span></span>
            <span></span>
          </p>
          <p><span>团后价:</span><span>￥449</span><button>立即参团</button></p>
        </a>
      </div> -->
    </div>
    <weibu />
    <storeNav thisPage="6" class="storeNav"/>
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
      value: 5,
      value1: 4.3,
      value2: 4.5,
      value3: 4.4,
      groupNum: 1000,
      groupSecond: 4000,
      groupTime: "",
      goodsList:[]
    };
  },
  created() {
    (() => {
      setInterval(() => {
        this.$data.groupNum++;
        if (this.$data.groupNum === 2000) {
          this.$data.groupNum = 1000;
        }
      }, 10);
      setInterval(() => {
        this.$data.groupSecond--;
        this.$data.groupTime =
          (String(Math.floor(this.$data.groupSecond / 3600)).length === 1
            ? "0" + String(Math.floor(this.$data.groupSecond / 3600))
            : String(Math.floor(this.$data.groupSecond / 3600))) +
          ":" +
          (String(Math.floor((this.$data.groupSecond % 3600) / 60)).length === 1
            ? "0" + String(Math.floor((this.$data.groupSecond % 3600) / 60))
            : String(Math.floor((this.$data.groupSecond % 3600) / 60))) +
          ":" +
          (String((this.$data.groupSecond % 3600) % 60).length === 1
            ? "0" + String((this.$data.groupSecond % 3600) % 60)
            : String((this.$data.groupSecond % 3600) % 60));
      }, 1000);
    })();
    this.$axios({
      method: "post",
      url: this.$host + "/groupmall/power/mainList/getPage",
      headers: {
        "Content-Type": "application/x-wwww-form-urlendcoded"
      },
      params: { page: 1, limit: 3 }
    })
      .then(response => {
        console.log(response.data);
        this.$data.goodsList = response.data.data;
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    toGroup() {
      sessionStorage.setItem("goodsId",event.target.parentElement.parentElement.firstElementChild.innerText)
      this.$router.push("/groupDetail");
    }
  }
};
</script>
<style scoped>
.groupContent {
  width: 92%;
  margin: 0 auto;
}
.GCTop {
  width: 100%;
  height: 500px;
  margin-top: 10px;
  position: relative;
}
.GCTop > img {
  width: 100%;
  height: 100%;
}
.GCCover {
  position: absolute;
  left: 0;
  top: 200px;
  width: 40%;
  height: 250px;
  background-color: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 20px 0 0 100px;
  box-sizing: border-box;
}
.GCCover > p:nth-of-type(1) {
  font-size: 40px;
  padding: 10px 0;
}
.GCCover > p:nth-of-type(2),
.GCCover > p:nth-of-type(3) {
  font-size: 15px;
  /* padding: 5px 0; */
  line-height: 30px;
}
.GCCover > span {
  font-size: 15px;
  position: absolute;
  left: 300px;
  top: 100px;
}
.GSList {
  position: absolute;
  width: 55%;
  height: 500px;
  /* background-color: red; */
  right: 0;
  top: 0;
  /* padding: 10px; */
}
.GSproduct {
  width: 70%;
  /* height: 100px; */
  background-color: white;
  /* float: left; */
  margin: 10px auto;
  overflow: hidden;
  position: relative;
  cursor: pointer;
}
.GSproduct > div {
  float: left;
}
.GSproduct > div:nth-of-type(2) {
  padding: 30px 0 0 20px;
  /* position: relative;
  width: calc(100% -150px); */
}
.GSproduct > div:nth-of-type(2) > p {
  font-size: 15px;
  margin: 5px 0;
}
.GSproduct > div:nth-of-type(2) > b {
  font-size: 20px;
  color: red;
  margin: 5px 0;
  width: 100%;
  display: block;
}
.GSproduct > div:nth-of-type(2) > span {
  background-color: black;
  color: white;
  font-size: 15px;
  padding: 3px 10px;
  box-sizing: border-box;
  margin: 5px 0;
}
.GSproduct > div:nth-of-type(2) > div {
  position: absolute;
  right: 25px;
  top: 50px;
}
.GSproduct > div:nth-of-type(2) > div > p:nth-of-type(2) {
  font-size: 13px;
  color: #c3c3c3;
}
.GSproduct img {
  display: block;
}
.GCMiddle {
  width: 100%;
  /* height: 500px; */
  margin-top: 10px;
  overflow: hidden;
}
.groupSaleProduct{
  width: 270px;
  height: 330px;
  border: 1px solid #cccccc;
  margin: 10px calc((25% - 272px)/2);
  position: relative;
  float: left;
}
.groupSaleProduct img{
  width: 100%;
}
.groupSaleProduct>p:nth-of-type(1){
  position: absolute;
  top:230px;
  width: 100%;
  background-color: white;
  padding: 5px;
  box-sizing: border-box;
}
.groupSaleProduct>p:nth-of-type(2){
  position: absolute;
  top:290px;
  padding-left: 10px;
  width: 100%;
  box-sizing: border-box;
}
.groupSaleProduct>p:nth-of-type(2)>span:nth-of-type(1){
  font-size: 25px;
  color: red;
}
.groupSaleProduct>p:nth-of-type(2)>span:nth-of-type(2){
  text-decoration: line-through;
  margin: 0 5px;
}
.groupSaleProduct>p:nth-of-type(2)>button{
  /* margin-left: 30px; */
  background: linear-gradient(to right, rgb(255, 214, 50), rgb(251, 149, 21));
  outline: none;
  border: 0;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  position: absolute;
  right: 20px;
  bottom: 5px;
}
.storeNav{
  position: fixed;
  bottom: 50px;
  right: 30px;
}
</style>
