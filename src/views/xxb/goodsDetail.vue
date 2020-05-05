<template>
  <div class="goodsDetail">
    <Header />
    <div style="width: 92%;margin: 0 auto">
      <h3
        style="border-bottom:1px solid #d2d2d2;text-align:left;padding:10px 0;margin-top: 10px"
      >
        <b style="font-size: 16px">
          <span>首页</span>
          <span style="color: #999999"> > </span>
          <span style="color: #999">{{ goodsData.proName }}</span>
        </b>
      </h3>
      <div class="goodsData" style="margin-top: 20px">
        <div class="dataImg floatL">
          <!-- <img src="../../assets/product1.jpg" alt="" /> -->
          <img :src=goodsData.proImg alt="" />
        </div>
        <div class="dataDetail floatL">
          <p style="font-size:24px;color: #333">
            <!-- 仅限深圳同城地区 新鲜水果上市大荔冬枣 -->
            {{ goodsData.proName }}
          </p>
          <p style="color: #999;font-size: 14px;margin-top: 10px">
            <!-- 享有“南荔枝，北冬枣，百果王”的盛名。状如苹果，有“小苹果”之称。果皮赭红光亮、皮薄肉脆、甘甜清香、营养丰富，可食率达95%。 -->
            {{ goodsData.intro }}
          </p>
          <p style="margin: 20px 0">
            <span style="font-size:30px;color:#d33a31;margin-right:10px;"
              >¥{{ goodsData.price }}</span
            >
            <span
              style="text-decoration:line-through;color: #999;margin-left: 15px"
              >¥{{ goodsData.marketPrice }}</span
            >
          </p>
          <table style="width:100%;display:none" cellpadding="0" cellspacing="0">
            <tbody>
              <tr>
                <td>团购人数</td>
                <td>2人团</td>
                <td>3人团</td>
                <td>4人团</td>
              </tr>
              <tr>
                <td>团购价格</td>
                <td style="color: #d33a31">
                  {{ goodsData.marketPrice * 0.7 }}
                </td>
                <td style="color: #d33a31">
                  {{ goodsData.marketPrice * 0.6 }}
                </td>
                <td style="color: #d33a31">
                  {{ goodsData.marketPrice * 0.5 }}
                </td>
              </tr>
            </tbody>
          </table>
          <p
            class="hintLogo"
            style="color: #666;font-size: 14px;margin: 10px 0 "
          >
            <span>服务</span>
            <span><i class="el-icon-info"></i>正品保证</span>
            <span class="el-icon-s-ticket">坏果包赔</span>
            <span class="el-icon-s-comment">24小时退还</span>
          </p>
          <p
            class="hintLogo"
            style="color: #666;font-size: 14px;margin-bottom: 20px"
          >
            <span>数量</span>
            <span>
              <el-input-number
                v-model="num"
                :disabled="false"
                size="small"
                style="border: 0px;outline: 0px"
              ></el-input-number>
            </span>
          </p>
          <p class="groupButton" style="text-align:left;">
            <!-- <router-link to="/buylist"> -->
              <button
                @click="tiaozhuan" style="outline:none;border:2px solid #d33a31;padding:15px 45px;margin-right:20px;background-color:white;color:#d33a31;font-size:19px"
              >
                立即购买
              </button>
            <!-- </router-link> -->

            <!-- <router-link to="/gouwu"> -->
              <button
                style="outline:none;border:2px solid #d33a31;padding:15px 45px;margin-right:20px;background-color:#d33a31;color:white;font-size:19px;display:none"
              >
                立即参团
              </button>
            <!-- </router-link> -->
          </p>
        </div>
      </div>
      <div class="goodsInfo">
        <div class="infoDetail floatL">
          <p
            style="font-size:16px;font-weight:bolder;text-align:left;border-bottom:1px solid rgb(210, 210, 210);padding:5px 0;margin-bottom: 15px"
          >
            商品详情
          </p>
          <!--<img src="../../assets/product1.jpg" />-->
          <img :src=goodsData.proImg />
          <p
            style="font-size:16px;font-weight:bolder;margin-top:20px;text-align:left;border-bottom:1px solid rgb(210, 210, 210);padding:5px 0;position:relative"
          >
            用户评论
            <span style="position:absolute;right:0;font-size:15px">
              共{{commentList.length}}条
            </span>
          </p>
          <div>
            <div
              class="goodsComment"
              style="position:relative;border-bottom:1px solid #e1e1e1;padding:10px;color: #333"
              v-for="items in commentList" :key="items.key"
            >
              <div class="userData" style="width:40%">
                <div
                  class="userDataL floatL"
                  style="width:50px;background-color:red"
                >
                  <img
                    src="../../assets/product1.jpg"
                    alt=""
                    style="width:50px;height:50px;display:block"
                  />
                </div>
                <div
                  class="userDataR floatL"
                  style="height:50px;text-align:left;padding:0 0 0 10px;box-sizing: border-box;"
                >
                  <span style="height:50%;line-height:25px;">某先生</span><br />
                  <span style="height:50%;line-height:25px;"
                    >{{items.comDate}}</span
                  >
                </div>
              </div>
              <p
                class="userComment"
                style="clear:both;text-align:left;padding:5px 0;margin:0;"
              >
                {{items.content}}
              </p>
              <el-rate
                v-model="value"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}"
                style="position:absolute;right:20px;top:10px"
              >
              </el-rate>
            </div>
            <div class="emptyCommit" v-if="commentList.length===0">
              暂无评论信息
            </div>
          </div>
        </div>
        <div class="infoHot floatL">
          <p
            style="font-size:16px;font-weight:bolder;text-align:left;border-bottom:1px solid rgb(210, 210, 210);padding:5px 0;margin-bottom: 15px"
          >
            热门商品
          </p>
          <div class="hotProduct">
            <div class="floatL hotL">
              <img src="./img/H1.jpg" style="width:100%" />
            </div>
            <div class="floatL hotR">
              <p class="hotText">
                <span>大牌促销</span
                ><span>i12触控真无线蓝牙耳机 蓝牙5.0苹果安卓通用</span>
              </p>
              <p class="hotPrice"><span>￥129</span><span>￥199</span></p>
            </div>
          </div>
          <div class="hotProduct">
            <div class="floatL hotL">
              <img src="./img/H2.jpg" style="width:100%" />
            </div>
            <div class="floatL hotR">
              <p class="hotText">
                <span>大牌促销</span
                ><span>【圣诞新品】网易云音乐·复古毛线本</span>
              </p>
              <p class="hotPrice"><span>￥49</span><span>￥89</span></p>
            </div>
          </div>
          <div class="hotProduct">
            <div class="floatL hotL">
              <img src="./img/H3.jpg" style="width:100%" />
            </div>
            <div class="floatL hotR">
              <p class="hotText">
                <span>大牌促销</span><span> 网易云音乐 运动斜挎包</span>
              </p>
              <p class="hotPrice"><span>￥59</span><span>￥99</span></p>
            </div>
          </div>
          <div class="hotProduct">
            <div class="floatL hotL">
              <img src="./img/H4.jpg" style="width:100%" />
            </div>
            <div class="floatL hotR">
              <p class="hotText">
                <span>大牌促销</span
                ><span>网易云音乐联名款真无线蓝牙耳机TWS1</span>
              </p>
              <p class="hotPrice"><span>￥259</span><span>￥299</span></p>
            </div>
          </div>
        </div>
      </div>
      <!--<div>-->
      <!--商品交易成功后会在2个工作日内由深圳市恒天鸿业科技有限公司发货，法定节假日顺延，请在确认商品完好后再签收。若存在质量问题，请务必在7天之内联系客服：-->

      <!--·客服账号：私信 @云音乐客服-->

      <!--·温馨提示：完整的包装、配件和保修卡是电子产品进行售后的基础，请务必查看齐全后签收并妥善保管。-->
      <!--</div>-->
    </div>
    <weibu />
  </div>
</template>

<script>
import Header from "../../components/WebHeader/index";
import weibu from "../../components/weibu";
export default {
  components: {
    Header: Header,
    weibu: weibu
  },
  props: {},
  data() {
    return {
      goodsData: {},
      commentList: [],
      goodsName: "某某商品",
      value: (Math.random()*2+3).toFixed(1),
      num: 1,
      
    };
  },
  methods: {
    tiaozhuan(){
       this.id = sessionStorage.getItem("goodsId");
   console.log(this.id)
      // this.$router.push("/buylist")
      this.$router.push({ path: "/buylist", query: { orderId: this.id } });
    },
    tiaozhuanGroup(){
       this.id = sessionStorage.getItem("goodsId");
   console.log(this.id)

      // this.$router.push("/buylist")
      // this.$router.push({ path: "/gouwu", query: { orderId: this.id } });
    }
  },
  created() {
    // this.$axios({
    //   method: "get",
    //   url: "http://172.16.14.12:8080/ehome/front/product",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   params: { porid:1 }
    // })
    //   .then(response => {
    //     console.log(response.data);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
    // console.log(window.location.href.split("?"));
    this.$axios(this.$host + "/groupmall/front/product?proid=" + sessionStorage.getItem("goodsId"))
      .then(response => {
        this.$data.goodsData = response.data.productList;
        this.$data.commentList = response.data.commentList;
        console.log(response.data.commentList);
        console.log(this.$data.goodsData)
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
<style scoped>
.goodsDetail {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.dataImg {
  width: 400px;
  font-size: 0;
}
.dataImg img {
  width: 100%;
}
.goodsData {
  width: 100%;
  min-height: 400px;
  /* background-color: blue; */
}
.dataDetail {
  width: calc(100% - 400px);
  text-align: left;
  padding: 0 50px;
  box-sizing: border-box;
}
.dataDetail table {
  border-collapse: collapse;
}
.dataDetail tr:nth-of-type(1) td {
  background-color: #f1f1f1;
}
.dataDetail td {
  border: 1px solid black;
  text-align: center;
  width: 25%;
  padding: 5px 0;
}
.hintLogo span {
  margin: 5px 10px;
}
.floatL {
  float: left;
}
.goodsInfo {
  width: 100%;
  /* height: 100px; */
  /* background-color: red; */
  margin-top: 20px;
}
.infoDetail {
  width: calc(70% - 40px);
  height: 100%;
  margin-right: 40px;
  /* background-color: blue; */
}
.infoDetail img {
  width: 100%;
}
.infoHot {
  width: 30%;
  height: 100%;
  /* background-color: blue; */
}
.userDataR {
  width: calc(100% - 50px);
}
.hotProduct {
  width: 100%;
  height: 100px;
  overflow: hidden;
  margin: 10px 0;
}
.hotL {
  width: 100px;
  background-color: #f9f9f9;
}
.hotR {
  width: calc(100% - 100px);
  height: 100px;
  /* background-color: green; */
  position: relative;
}
.hotText {
  padding: 10px;
  font-size: 15px;
  line-height: 23px;
}
.hotText > span:nth-of-type(1) {
  /* padding: 10px; */
  font-size: 13px;
  padding: 0 5px;
  margin-right: 5px;
  color: #d74d45;
  border: 1px solid #d74d45;
  box-sizing: border-box;
}
.hotText > span:nth-of-type(2):hover {
  cursor: pointer;
  text-decoration: underline;
}
.hotPrice {
  position: absolute;
  left: 0;
  bottom: 0;
  padding: 10px;
}
.hotPrice > span:nth-of-type(1) {
  font-size: 20px;
  color: #d33a31;
  margin-right: 10px;
}
.hotPrice > span:nth-of-type(2) {
  text-decoration: line-through;
  color: #999999;
  font-size: 15px;
}
  .emptyCommit{
    width: 100%;
    text-align: center;
    padding: 30px 0;
  }
</style>
