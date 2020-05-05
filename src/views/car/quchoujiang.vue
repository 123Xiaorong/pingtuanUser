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
                    <span style="color: #999">{{ goodsName }}</span>
                </b>
            </h3>
            <div class="goodsData" style="margin-top: 20px">
                <div class="dataImg floatL">
                    <!--隔开-->
                    <div class="block">
                        <span class="demonstration">默认 Hover 指示器触发</span>
                        <el-carousel height="400px">
                            <el-carousel-item v-for="item in lunbotu" :key="item">
                               <img :src="item.img">
                            </el-carousel-item>
                        </el-carousel>
                    </div>
                    <!--<img src="../../assets/product1.jpg" alt="" />-->
                    <!--隔开-->
                </div>
                <div class="dataDetail floatL">
                    <p style="font-size:24px;color: #333">
                        {{this.tableData.proName}}
                    </p>
                    <p style="color: #999;font-size: 15px;margin-top: 10px">
                        商品描述：{{this.tableData.intro}}
                    </p>
                    <p style="margin: 20px 0">
            <span style="font-size:16px;color:#d33a31;margin-right:10px;"
            >规则：{{this.tableData.lkRule}}</span
            >
                    </p>
                    <p
                            class="hintLogo"
                            style="color: #666;font-size: 14px;margin: 10px 0 "
                    >
                        服务：
                        【{{this.tableData.tags[0]}}】
                        【{{this.tableData.tags[1]}}】
                        【{{this.tableData.tags[2]}}】
                        【{{this.tableData.tags[3]}}】


                        <!--<span><i class="el-icon-info"></i>正品保证</span>-->
                        <!--<span class="el-icon-s-ticket">坏果包赔</span>-->
                        <!--<span class="el-icon-s-comment">24小时退还</span>-->
                    </p>
                    <p
                            class="hintLogo"
                            style="color: #666;font-size: 14px;margin-bottom: 20px"
                    >
                        说明：    支付开团并邀请4人参团，人数不足自动退款
                    </p>
                    <p class="groupButton" style="text-align:left;margin-bottom: 10px">
                        以下小伙伴正在发起团购，您可以直接参与
                        <!--<router-link to="/gouwu">-->
                        <!--<button-->
                        <!--style="outline:none;border:2px solid #d33a31;padding:15px 45px;margin-right:20px;background-color:#d33a31;color:white;font-size:19px"-->
                        <!--&gt;-->
                        <!--立即参团-->
                        <!--</button>-->
                        <!--</router-link>-->
                    </p>
                    <div style="height: 50px;position: relative;line-height: 50px" v-if="tableData.lkState!='去抽奖'">
                        暂时无用户
                    </div>
                    <div style="height: 50px;border: .5px solid #d2d2d2;position: relative" v-if="tableData.lkState=='去抽奖'">
                      <span style="position: absolute;left: 0px;border-radius: 50%">
                      <img :src="this.tableData.groupInfo[0]" style="width: 100px;height: 50px;">
                          </span>
                        <div style="float: left;margin-left:15%;height: 50px;line-height:50px;width: 20%">
                            <p style="font-size: 18px">{{aaa}}</p>
                            </div>
                            <div style="float: left;margin-left:8%;height: 50px;width: 30%">
                            <p style="color: #666;margin-top: 5px">{{bbb}}</p>
                            <p style="color: #ff4001;font-size: 14px">剩余{{this.tian}}天{{this.shi}}时{{this.fen}}分{{this.miao}}秒</p>
                        </div>
                        <span style="float: right;margin-right: 10px">
                      <el-button type="success" style="margin-top: 5px">去参团</el-button>
                          </span>
                    </div>
                    <div style="text-align: center;padding-top: 50px">
                        <!--<el-button type="text" @click="dialogTableVisible = true">open a Table nested Dialog</el-button>-->
                        <!--//隔开-->
                        <el-dialog title="中奖名单" :visible.sync="dialogTableVisible">
                            <el-table :data="gridData">
                                <el-table-column property="date" label="名字" width="150"></el-table-column>
                                <el-table-column property="name" label="订单号" width="200"></el-table-column>
                                <el-table-column property="address" label="手机号码"></el-table-column>
                            </el-table>
                        </el-dialog>
                        <!--//隔开-->
                        <span v-if="this.shibie==2"><el-button type="success" @click="quchantuan">即将开始</el-button></span>
                        <!--<span v-if="this.shibie==1"> <el-button type="success" @click="quchantuan">￥{{tableData.lkPrice}}.00<br/> <br/>&nbsp;{{tableData.lkGroupmin}}人团</el-button></span>-->
                        <!--<el-button type="success" @click="chakanzhongjiang">查看中奖名单</el-button>-->
                        <span v-if="this.shibie==4"><el-button type="success" @click="chakanzhongjiang">查看中奖名单</el-button></span>
                        <span v-if="this.shibie==3"> <el-button type="success" @click="quchantuan">即将开奖</el-button></span>
                    </div>
                </div>
            </div>
            <div class="goodsInfo">
                <div class="infoDetail floatL">
                    <p
                            style="font-size:16px;font-weight:bolder;text-align:left;border-bottom:1px solid rgb(210, 210, 210);padding:5px 0;margin-bottom: 15px"
                    >
                        商品详情
                    </p>
                    <img :src="this.lunbotu[0].img" />
                    <p
                            style="font-size:16px;font-weight:bolder;margin-top:20px;text-align:left;border-bottom:1px solid rgb(210, 210, 210);padding:5px 0;position:relative"
                    >
                        <span style="color: #333">用户评论</span>
                        <span style="position:absolute;right:0;font-size:15px">
              共10条
            </span>
                    </p>
                    <div>
                        <div
                                class="goodsComment"
                                style="position:relative;border-bottom:1px solid #e1e1e1;padding:10px;color: #333"
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
                                    <span style="height:50%;line-height:25px;font-size: 14px;color: slategrey"
                                    >2019-09-09 22:22:22</span
                                    >
                                </div>
                            </div>
                            <p
                                    class="userComment"
                                    style="clear:both;text-align:left;padding:5px 0;margin:0;margin-left: 60px;font-size: 15px;color: #666"
                            >
                                这次买的水果真心不错，推荐各位购买！下次还会继续关注购买！
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
                            <img src="../../assets/HI1.jpg" style="width:100%" />
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
                            <img src="../../assets/HI2.jpg" style="width:100%" />
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
                            <img src="../../assets/HI3.jpg" style="width:100%" />
                        </div>
                        <div class="floatL hotR">
                            <p class="hotText">
                <span>大牌促销</span
                ><span> 网易云音乐 运动斜挎包</span>
                            </p>
                            <p class="hotPrice"><span>￥59</span><span>￥99</span></p>
                        </div>
                    </div>
                    <div class="hotProduct">
                        <div class="floatL hotL">
                            <img src="../../assets/HI4.jpg" style="width:100%" />
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
        goodsName: "某某商品",
        value: 3.7,
        num: 1,
        tableData:[],
        gridData: [{
          date: '小李',
          name: '5845895874458',
          address: '13598549548'
        }, {
          date: '小明',
          name: '49578154566845',
          address: '13589468512'
        }, {
          date: '小王',
          name: '54896684522148666',
          address: '13849548754'
        }, {
          date: '小红',
          name: '485667466114566',
          address: '19945864859'
        }],
        dialogTableVisible: false,
        dialogFormVisible: false,
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
        shibie:0,
        lunbotu:[],
        miao:"",
        fen:"",
        shi:"",
        tian:"",
        aaa:"",
        bbb:""
      };
    },
    methods: {
      quchantuan(){
        this.$axios.post(this.$host+'/groupmall/power/rewards/checkUserLogin',({})).then((resp)=>{
          console.log(resp.data)
          // this.tableData=resp.data.data
          // console.log(this.tableData)
          // this.totalchangdu=this.tableData.length
        })
      },
      chakanzhongjiang(){
        this.dialogTableVisible=true
        this.$axios.post(this.$host+'/groupmall/power/rewards/selectWinUser',JSON.stringify({qualiLkId:this.$route.query.orderId})).then((resp)=>{
          console.log(resp.data)
          // this.tableData=resp.data.data
          // console.log(this.tableData)
          // this.totalchangdu=this.tableData.length
        })
      },
      shijianbiao(){
            this.miao--
        if(this.miao==0){
              this.miao=59
              if(this.fen==0){
                this.fen=59
              }
              else {
                this.fen--
              }

        }
      }
    },
    created() {
      console.log(this.$route.query.orderId)
      this.$axios.post(this.$host+'/groupmall/power/rewards/goLucking',
        JSON.stringify({lkID:this.$route.query.orderId
      })).then((resp) => {
        console.log(resp.data)
        // console.log(resp.data.groupInfo[3].substring(5,6))
        if(resp.data.lkState=="去抽奖") {
          this.aaa=resp.data.groupInfo[1]
          this.bbb=resp.data.groupInfo[2]
          this.tian=resp.data.groupInfo[3].substring(2,4)
          this.shi=resp.data.groupInfo[3].substring(5,6)
          this.fen=resp.data.groupInfo[3].substring(7,8)
          this.miao=resp.data.groupInfo[3].substring(9,11)
        }
        else {
          this.aaa=0
          this.bbb=0
          this.tian=0
          this.shi=0
          this.fen=0
          this.miao=0
        }
        for(var q=0;q<resp.data.images.length;q++){
          this.lunbotu.push({img:resp.data.images[q]})
        }
        console.log(this.lunbotu)
        if(resp.data.lkState=="去抽奖"){
          this.shibie=1
        }
        if(resp.data.lkState=="未开始"){
          this.shibie=2
        }
        if(resp.data.lkState=="已开奖"){
          this.shibie=4
        }
        if(resp.data.lkState=="待开奖"){
          this.shibie=3
        }
        console.log(this.shibie)
        this.tableData = resp.data;
        console.log(this.tableData)
        // console.log(this.tableData.tags)
        // for(var i=0;i<this.tableData.tags.length;i++){
        //   this.tableData.tags[i]
        // }
        console.log(this.tableData)


      })
    },
    mounted(){
      setInterval(this.shijianbiao, 1000);
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
    .el-carousel__item h3 {
        color: #475669;
        font-size: 14px;
        opacity: 0.75;
        line-height: 150px;
        margin: 0;
    }

    .el-carousel__item:nth-child(2n) {
        background-color: #99a9bf;
    }

    .el-carousel__item:nth-child(2n+1) {
        background-color: #d3dce6;
    }
    .bgimg{
        background-image: url(../../assets/1.png);
    }
</style>

