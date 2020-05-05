<template>
  <div>
    <Header />
    <div style="width: 100%;height: 350px">
      <img
        src="./image/luck1.png"
        alt=""
        style="width: 100%;height: 350px;font-size: 0"
      />
    </div>
    <div style="width: 100%;">
      <el-tabs
        v-model="activeName"
        type="card"
        stretch="true"
        @tab-click="handleClick"
      >
        <el-tab-pane label="全部" name="全部">
          <div v-for="item in tableData" style="width: 92%;margin: 0 auto;">
            <div
              class="productOne"
              style="width: 40%;margin: 15px 3%;height: 140px;
                        box-shadow: 5px 5px 5px rgba(210,210,210,0.74);padding: 10px 1%"
            >
              <!--商品图片-->
              <router-link :to="{ path: '/goodsDetail' }">
                <div style="float: left;width: 30%;margin-right: 5%">
                  <img :src="item.pro_img" alt="" style="width: 100%" />

                  <!--<img :src="'http://172.16.14.132/power/rewards/queryAll'+item.pro_img" alt="" style="width: 100%"/>-->
                  <!--<img :src="'http://172.16.14.132:80/power/rewards/queryAll/'+imgsrc" alt="">-->
                </div>
              </router-link>
              <div style="float: left;width: 65%;margin-top: 10px">
                <!--商品名称-->
                <div class="goodName">
                  <el-link target="_blank" :underline="false">
                    <span style="color: #333;font-size: 16px;">
                      {{ item.pro_name }}
                    </span>
                  </el-link>
                </div>
                <!--倒计时-->
                <p style="color: #6e6e6e;margin:5% 0;font-size: 12px">
                  <i
                    class="el-icon-timer"
                    style="color: #ff4001;font-size: 16px;margin-right: 5px"
                  ></i>
                  <span style="font-size: 13px">{{ item.timeState }}</span>
                  <!--<span>还剩{{item.tian}}天{{item.shi}}时{{item.fen}}分{{item.miao}}秒</span>-->
                </p>
                <!--商品价格及其他-->
                <div
                  style="margin-top: 12%;font-size: 14px;color: #333;position: relative;height: 30px;line-height: 30px"
                >
                  <span style="color: #ff4001;font-size: 16px"
                    >￥{{ item.lk_price }}</span
                  >
                  <span style="position: absolute;left: 30%"
                    >{{ item.lk_group }}人团</span
                  >
                  <div
                    style="display: inline-block;position: absolute;right: 10px;"
                  >
                    <!--<router-link :to="{path:'/quchoujiang'}">-->
                    <el-button
                      style="color:white;border:0px;padding:12px 16px;background:linear-gradient(to right, #ffd632,#fb9515);"
                      @click="choujiangxiangqing(item)"
                    >
                      {{ item.lk_state }}
                    </el-button>
                    <!--</router-link>-->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="正在进行" name="正在进行">
          <div style="width: 92%;margin: 0 auto">
            <div v-for="item in tableData" style="width: 92%;margin: 0 auto">
              <div
                class="productOne"
                style="width: 40%;margin: 15px 3%;height: 140px;
                        box-shadow: 5px 5px 5px rgba(210,210,210,0.74);padding: 10px 1%"
              >
                <!--商品图片-->
                <router-link :to="{ path: '/goodsDetail' }">
                  <div style="float: left;width: 30%;margin-right: 5%">
                    <img :src="item.pro_img" alt="" style="width: 100%" />
                    <!--<img :src="'http://172.16.14.132:80/power/rewards/queryAll/'+imgsrc" alt="">-->
                  </div>
                </router-link>
                <div style="float: left;width: 65%;margin-top: 10px">
                  <!--商品名称-->
                  <div class="goodName">
                    <el-link target="_blank" :underline="false">
                      <span style="color: #333;font-size: 16px">
                        {{ item.pro_name }}
                      </span>
                    </el-link>
                  </div>
                  <!--倒计时-->
                  <p style="color: #6e6e6e;margin:5% 0;font-size: 12px">
                    <i
                      class="el-icon-timer"
                      style="color: #ff4001;font-size: 16px;margin-right: 5px"
                    ></i>
                    <span style="font-size: 13px">{{ item.timeState }}</span>
                  </p>
                  <!--商品价格及其他-->
                  <div
                    style="margin-top: 12%;font-size: 14px;color: #333;position: relative;height: 30px;line-height: 30px"
                  >
                    <span style="color: #ff4001;font-size: 16px"
                      >￥{{ item.lk_price }}</span
                    >
                    <span style="position: absolute;left: 30%"
                      >{{ item.lk_group }}人团</span
                    >
                    <div
                      style="display: inline-block;position: absolute;right: 10px"
                    >
                      <router-link :to="{ path: '/quchoujiang' }">
                        <el-button
                          style="color:white;border:0px;padding:12px 16px;background:linear-gradient(to right, #ffd632,#fb9515);"
                          @click="choujiangxiangqing"
                        >
                          {{ item.lk_state }}
                        </el-button>
                      </router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="即将开始" name="即将开始">
          <div v-for="item in tableData" style="width: 92%;margin: 0 auto">
            <div
              class="productOne"
              style="width: 40%;margin: 15px 3%;height: 140px;
                        box-shadow: 5px 5px 5px rgba(210,210,210,0.74);padding: 10px 1%"
            >
              <!--商品图片-->
              <router-link :to="{ path: '/goodsDetail' }">
                <div style="float: left;width: 30%;margin-right: 5%">
                  <!--<img :src="'http://172.16.14.132/power/rewards/queryAll'+item.pro_img" alt="" style="width: 100%"/>-->
                  <img :src="item.pro_img" alt="" style="width: 100%" />

                  <!--<img :src="'http://172.16.14.132:80/power/rewards/queryAll/'+imgsrc" alt="">-->
                </div>
              </router-link>
              <div style="float: left;width: 65%;margin-top: 10px">
                <!--商品名称-->
                <div class="goodName">
                  <el-link target="_blank" :underline="false">
                    <span style="color: #333;font-size: 16px">
                      {{ item.pro_name }}
                    </span>
                  </el-link>
                </div>
                <!--倒计时-->
                <p style="color: #6e6e6e;margin:5% 0;font-size: 12px">
                  <i
                    class="el-icon-timer"
                    style="color: #ff4001;font-size: 16px;margin-right: 5px"
                  ></i>
                  <span style="font-size: 13px">{{ item.timeState }}</span>
                  <!--<span>还剩{{item.tian}}天{{item.shi}}时{{item.fen}}分{{item.miao}}秒</span>-->
                </p>
                <!--商品价格及其他-->
                <div
                  style="margin-top: 12%;font-size: 14px;color: #333;position: relative;height: 30px;line-height: 30px"
                >
                  <span style="color: #ff4001;font-size: 16px"
                    >￥{{ item.lk_price }}</span
                  >
                  <span style="position: absolute;left: 30%"
                    >{{ item.lk_group }}人团</span
                  >
                  <div
                    style="display: inline-block;position: absolute;right: 10px"
                  >
                    <router-link :to="{ path: '/quchoujiang' }">
                      <el-button
                        style="color:white;border:0px;padding:12px 16px;background:linear-gradient(to right, #ffd632,#fb9515);"
                        @click="choujiangxiangqing"
                      >
                        {{ item.lk_state }}
                      </el-button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
        <el-tab-pane label="已经结束" name="已经结束">
          <div v-for="item in tableData" style="width: 92%;margin: 0 auto">
            <div
              class="productOne"
              style="width: 40%;margin: 15px 3%;height: 140px;
                        box-shadow: 5px 5px 5px rgba(210,210,210,0.74);padding: 10px 1%"
            >
              <!--商品图片-->
              <router-link :to="{ path: '/goodsDetail' }">
                <div style="float: left;width: 30%;margin-right: 5%">
                  <!--<img :src="'http://172.16.14.132/power/rewards/queryAll'+item.pro_img" alt="" style="width: 100%"/>-->
                  <img :src="item.pro_img" alt="" style="width: 100%" />

                  <!--<img :src="'http://172.16.14.132:80/power/rewards/queryAll/'+imgsrc" alt="">-->
                </div>
              </router-link>
              <div style="float: left;width: 65%;margin-top: 10px">
                <!--商品名称-->
                <div class="goodName">
                  <el-link target="_blank" :underline="false">
                    <span style="color: #333;font-size: 16px">
                      {{ item.pro_name }}
                    </span>
                  </el-link>
                </div>
                <!--倒计时-->
                <p style="color: #6e6e6e;margin:5% 0;font-size: 12px">
                  <i
                    class="el-icon-timer"
                    style="color: #ff4001;font-size: 16px;margin-right: 5px"
                  ></i>
                  <span style="font-size: 13px">{{ item.timeState }}</span>
                  <!--<span>还剩{{item.tian}}天{{item.shi}}时{{item.fen}}分{{item.miao}}秒</span>-->
                </p>
                <!--商品价格及其他-->
                <div
                  style="margin-top: 12%;font-size: 14px;color: #333;position: relative;height: 30px;line-height: 30px"
                >
                  <span style="color: #ff4001;font-size: 16px"
                    >￥{{ item.lk_price }}</span
                  >
                  <span style="position: absolute;left: 30%"
                    >{{ item.lk_group }}人团</span
                  >
                  <div
                    style="display: inline-block;position: absolute;right: 10px"
                  >
                    <router-link :to="{ path: '/quchoujiang' }">
                      <el-button
                        style="color:white;border:0px;padding:12px 16px;background:linear-gradient(to right, #ffd632,#fb9515);"
                        @click="choujiangxiangqing"
                      >
                        {{ item.lk_state }}
                      </el-button>
                    </router-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
    <Footer />
    <storeNav thisPage="4" class="storeNav" />
  </div>
</template>

<script>
import Header from "../../components/WebHeader/index";
import Footer from "../../components/weibu";
import storeNav from "../../views/xxb/nav";

export default {
  name: "luckDraw",
  tableData: "",
  components: {
    Header: Header,
    Footer: Footer,
    storeNav: storeNav
  },
  data() {
    return {
      activeName: "全部",
      tian: "24",
      shi: "23",
      fen: "35",
      miao: "15",
      tableData: []
      // tableData:[{
      //       img:require("../../assets/product1.jpg"),
      //   tian:23,
      //   shi:22,
      //   fen:34,
      //   miao:30
      // },
      //   {
      //     img:require("../../assets/product1.jpg"),
      //     tian:21,
      //     shi:20,
      //     fen:30,
      //     miao:50
      //   }]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab.name);
      if (tab.name == "正在进行") {
        this.$axios
          .post(
            this.$host + "/groupmall/power/rewards/queryAll",
            JSON.stringify({ code: "去抽奖" })
          )
          .then(resp => {
            console.log(resp.data);
            this.tableData = resp.data;
            this.tableData = resp.data;
            this.tian = this.tableData[0].timeState.substring(2, 4);
            this.shi = this.tableData[0].timeState.substring(5, 6);
            this.fen = this.tableData[0].timeState.substring(7, 9);
            this.miao = this.tableData[0].timeState.substring(10, 12);

            for (var i = 0; i < this.tableData.length; i++) {
              if (this.tableData[i].lk_state == "去抽奖") {
                this.tian = this.tableData[i].timeState.substring(2, 4);
                this.shi = this.tableData[i].timeState.substring(5, 6);
                this.fen = this.tableData[i].timeState.substring(7, 9);
                this.miao = this.tableData[i].timeState.substring(10, 12);
                this.tableData[i]["tian"] = this.tableData[
                  i
                ].timeState.substring(2, 4);
                this.tableData[i]["shi"] = this.tableData[
                  i
                ].timeState.substring(5, 6);
                this.tableData[i]["fen"] = this.tableData[
                  i
                ].timeState.substring(7, 9);
                this.tableData[i]["miao"] = this.miao = this.tableData[
                  i
                ].timeState.substring(10, 12);
                this.tableData[i].timeState =
                  "剩余" +
                  this.tableData[i].tian +
                  "天" +
                  this.tableData[i].shi +
                  "时" +
                  this.tableData[i].fen +
                  "分" +
                  this.tableData[i].miao +
                  "秒";
              }
            }
          });
      }
      if (tab.name == "即将开始") {
        this.$axios
          .post(
            this.$host + "/groupmall/power/rewards/queryAll",
            JSON.stringify({ code: "未开始" })
          )
          .then(resp => {
            console.log(resp.data);
            this.tableData = resp.data;
          });
      }
      if (tab.name == "已经结束") {
        this.$axios
          .post(
            this.$host + "/groupmall/power/rewards/queryAll",
            JSON.stringify({ isFinish: true })
          )
          .then(resp => {
            console.log(resp.data);
            this.tableData = resp.data;
          });
      }
      if (tab.name == "全部") {
        this.$axios
          .post(
            this.$host + "/groupmall/power/rewards/queryAll",
            JSON.stringify({})
          )
          .then(resp => {
            console.log(resp.data);
            this.tableData = resp.data;
            this.tableData = resp.data;
            this.tian = this.tableData[0].timeState.substring(2, 4);
            this.shi = this.tableData[0].timeState.substring(5, 6);
            this.fen = this.tableData[0].timeState.substring(7, 9);
            this.miao = this.tableData[0].timeState.substring(10, 12);

            for (var i = 0; i < this.tableData.length; i++) {
              if (this.tableData[i].lk_state == "去抽奖") {
                this.tian = this.tableData[i].timeState.substring(2, 4);
                this.shi = this.tableData[i].timeState.substring(5, 6);
                this.fen = this.tableData[i].timeState.substring(7, 9);
                this.miao = this.tableData[i].timeState.substring(10, 12);
                this.tableData[i]["tian"] = this.tableData[
                  i
                ].timeState.substring(2, 4);
                this.tableData[i]["shi"] = this.tableData[
                  i
                ].timeState.substring(5, 6);
                this.tableData[i]["fen"] = this.tableData[
                  i
                ].timeState.substring(7, 9);
                this.tableData[i]["miao"] = this.miao = this.tableData[
                  i
                ].timeState.substring(10, 12);
                this.tableData[i].timeState =
                  "剩余" +
                  this.tableData[i].tian +
                  "天" +
                  this.tableData[i].shi +
                  "时" +
                  this.tableData[i].fen +
                  "分" +
                  this.tableData[i].miao +
                  "秒";
              }
            }
          });
      }
    },
    choujiangxiangqing(a) {
      // this.$axios.post('http://172.16.14.132/power/rewards/goLucking', JSON.stringify({lkID:a.LkId
      // })).then((resp) => {
      //   console.log(resp.data)
      // this.$router.push("/quchoujiang")
      this.$router.push({ path: "/quchoujiang", query: { orderId: a.LkId } });
      // })
      //   this.$router.push("/quchoujiang")
      // this.$router.push({path:"/quchoujiang",query:{orderId:this.a.LkId}});
    },
    shijianbiao() {
      for (var i = 0; i < this.tableData.length; i++) {
        if (this.tableData[i].lk_state == "去抽奖") {
          this.tableData[i].miao--;
          this.tableData[i].timeState =
            "剩余" +
            this.tableData[i].tian +
            "天" +
            this.tableData[i].shi +
            "时" +
            this.tableData[i].fen +
            "分" +
            this.tableData[i].miao +
            "秒";
        }
      }
      for (var k = 0; k < this.tableData.length; k++) {
        if (this.tableData[k].lk_state == "去抽奖") {
          if (this.tableData[k].miao == -1) {
            this.tableData[k].miao = 59;
            this.tableData[k].fen--;
            this.tableData[k].timeState =
              "剩余" +
              this.tableData[k].tian +
              "天" +
              this.tableData[k].shi +
              "时" +
              this.tableData[k].fen +
              "分" +
              this.tableData[k].miao +
              "秒";
          }
        }
      }
    }
  },
  created() {
    console.log(this.activeName);
    this.$axios
      .post(
        this.$host + "/groupmall/power/rewards/queryAll",
        JSON.stringify({})
      )
      .then(resp => {
        console.log(resp.data);
        this.tableData = resp.data;
        this.tian = this.tableData[0].timeState.substring(2, 4);
        this.shi = this.tableData[0].timeState.substring(5, 6);
        this.fen = this.tableData[0].timeState.substring(7, 9);
        this.miao = this.tableData[0].timeState.substring(10, 12);

        for (var i = 0; i < this.tableData.length; i++) {
          if (this.tableData[i].lk_state == "去抽奖") {
            this.tian = this.tableData[i].timeState.substring(2, 4);
            this.shi = this.tableData[i].timeState.substring(5, 6);
            this.fen = this.tableData[i].timeState.substring(7, 9);
            this.miao = this.tableData[i].timeState.substring(10, 12);
            this.tableData[i]["tian"] = this.tableData[i].timeState.substring(
              2,
              4
            );
            this.tableData[i]["shi"] = this.tableData[i].timeState.substring(
              5,
              6
            );
            this.tableData[i]["fen"] = this.tableData[i].timeState.substring(
              7,
              9
            );
            this.tableData[i]["miao"] = this.miao = this.tableData[
              i
            ].timeState.substring(10, 12);
            this.tableData[i].timeState =
              "剩余" +
              this.tableData[i].tian +
              "天" +
              this.tableData[i].shi +
              "时" +
              this.tableData[i].fen +
              "分" +
              this.tableData[i].miao +
              "秒";
          }
        }
      });
    // for(var i=0;i<this.tableData.length;i++){
    //     if(this.tableData[i].lk_state=="去抽奖"){
    //       // this.tableData[i].timeState
    //     }
    // }
  },
  mounted() {
    setInterval(this.shijianbiao, 1000);
  }
};
</script>

<style scoped>
.productOne {
  float: left;
}
.storeNav {
  position: fixed;
  bottom: 50px;
  right: 30px;
}
</style>
