<template>
  <div>
    <Header />
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="line">确认商品信息</el-breadcrumb-item>
      </el-breadcrumb>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="Image" label="图片" width="180" align="center">
          <!-- 图片显示 :src="scope.row.image" -->
          <!-- slot-scope="scope" -->
          <template slot-scope="scope">
            <img :src="scope.row.Image" min-width="180" height="180" />
          </template>
        </el-table-column>
        <el-table-column prop="goodsInformation" label="商品信息" width="300" align="center"></el-table-column>
        <el-table-column prop="specs" label="规格" align="center"></el-table-column>
        <el-table-column prop="price" label="单价" align="center"></el-table-column>
        <el-table-column prop="count" label="数量" align="center"></el-table-column>
      </el-table>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="line">确认收货地址</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="addressContent">
        <el-form
          ref="searchForm"
          :inline="true"
          :model="searchMap"
          class="demo-form-inline"
          style="padding-top:60px;margin-left:65px"
        >
          <span class="personInfo">收货人:</span>
          <el-form-item prop="name">
            <el-input v-model="searchMap.name" placeholder="张三" :disabled="true"></el-input>
          </el-form-item>
          <span class="personInfo">手机号码:</span>
          <el-form-item prop="phone">
            <el-input placeholder="13888888888" :disabled="true"></el-input>
          </el-form-item>
          <span class="personInfo">收货地址:</span>
          <el-form-item prop="address">
            <el-input
              readonly
              placeholder="请选择收货地址"
              v-model="searchMap.address"
              @click.native="dialogAddressVisible=true"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item class="line">请选择优惠券</el-breadcrumb-item>
      </el-breadcrumb>
      <div class="addressContent">
        <el-form
          ref="CouponForm"
          :inline="true"
          :model="CouponMap"
          class="demo-form-inline"
          style="padding-top:60px;margin-left:70px"
        >
          <span class="personInfo">优惠券:</span>
          <el-form-item prop="coupon">
            <el-input
              readonly
              placeholder="请选择优惠券"
              v-model="CouponMap.coupon"
              @click.native="dialogCouponVisible=true"
            ></el-input>
          </el-form-item>
        </el-form>
      </div>

      <div class="payfor">
        <el-form
          :rules="rules"
          ref="pojoForm"
          label-width="100px"
          label-position="right"
          style="width:400px;padding-top: 45px;margin-left:50px"
          :model="pojo"
        >
          <template>
            <div class="liexing">支付类型:</div>
            <el-radio v-model="radio" label="微信" class="Zhifuleixing">微信</el-radio>
            <el-radio v-model="radio" label="支付宝">支付宝</el-radio>
          </template>
          <el-form-item label="订单留言:" prop="message">
            <el-input
              type="textarea"
              v-model="pojo.message"
              :autosize="{ minRows: 2, maxRows: 5}"
              placeholder="请输入订单留言"
            ></el-input>
          </el-form-item>
        </el-form>

        <div class="payButton">
          <div class="payMoney">
            应付金额:
            <span>{{endPrice}}</span>
          </div>
          <el-button type="primary" @click="onSubmit">立即支付</el-button>
          <a id="payTurn" style="display:none"
            :href="hrefAddress"
            >跳转</a
          >
        </div>
      </div>

      <!-- 选择收货地址对话框 -->
      <el-dialog title="选择收货地址" :visible.sync="dialogAddressVisible" width="500px">
        <Address :isDialog="true" @option-supplier="optionAddress" />
      </el-dialog>

      <!-- 选择优惠券对话框 -->
      <el-dialog title="选择优惠券" :visible.sync="dialogCouponVisible" width="500px">
        <Coupon :isCouponlog="true" @option-coupon="optionCoupon" />
      </el-dialog>
    </div>
    <weibu />
  </div>
</template>

<script>
var diZhi;
var YouhuiJuan;
import Header from "../../components/WebHeader/index";
import weibu from "../../components/weibu";
import Address from "../xxb/address";
import Coupon from "../xxb/Coupon";

//支付类型
// const payTypeOptions = [
//   { type: "1", name: "支付宝" },
//   { type: "2", name: "微信" }
// ];
var endPrice, Price, youhui;
var myUserId = sessionStorage.getItem("myUserId");
var myUserName = sessionStorage.getItem("myUserName")
// var myGoodsId = sessionStorage.getItem("goodsId")
export default {
  data() {
    return {
      hrefAddress:"http://172.16.14.94:8080/groupmall/power/alipay/alipay?price=100.00&proName=apple",
      tableData: [],
      // payTypeOptions,
      input: "",
      dialogAddressVisible: false,
      searchMap: {
        name: myUserName,
        address: ""
      },
      dialogCouponVisible: false,
      CouponMap: {
        coupon: ""
      },
      pojo: {
        payType: "",
        message: ""
      },
      rules: {
        message: [
          { min: 1, max: 200, message: "长度在200个字符以内", trigger: "blur" }
        ]
      },
      radio: "微信",
      endPrice: 100,
      Price: 0,
      youhui: 0
      //  endPrice: this.Price - this.youhui
    };
  },

  components: {
    Header,
    weibu,
    Address,
    Coupon
  },

  created() {
    // console.log(this.$route.query.orderId)
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$axios
        .post(
          this.$host +
            "/groupmall/power/mainList/pay?userId="+myUserId+"&proId="+this.$route.query.orderId
        )
        .then(response => {
          console.log(response);
          // console.log(response.data.product.groupImg.split('\\')[7]);
          // let groupIamge =
          //   response.data.product.groupImg.split("\\")[7] +
          //   "/" +
          //   response.data.product.groupImg.split("\\")[8] +
          //   "/" +
          //   response.data.product.groupImg.split("\\")[9];
          // console.log(groupIamge)
          // console.log(scope);
          
          const resp = response.data;
          this.tableData.push({
            Image: resp.product.groupImg,
            goodsInformation: resp.product.proName,
            specs: resp.product.weight,
            price: resp.product.price,
            count: "1"
          });
          this.Price = resp.product.price;
          console.log(this.Price);
          this.endPrice = this.Price;
        });
    },
    optionAddress(currentRow) {
      //currentRow子组件传递的数据
      diZhi = currentRow;
      console.log("parent", diZhi);

      this.searchMap.address = currentRow.address; //收货地址

      this.dialogAddressVisible = false; //关闭窗口
    },
    optionCoupon(couponRow) {
      //currentRow子组件传递的数据
      YouhuiJuan = couponRow;
      // console.log("parent", YouhuiJuan);

      this.CouponMap.coupon = couponRow.CouponName; //优惠券名字

      this.dialogCouponVisible = false; //关闭窗口
      this.youhui = YouhuiJuan.CouponPrice;
      console.log(this.youhui);
      this.endPrice = this.Price - this.youhui;
    },
    onSubmit() {
      // payWay:this.radio,
      // addressId:diZhi.id,
      // couponId:YouhuiJuan.CouponId,
      // note:this.pojo.message,
      // finalPirce:this.endPrice
      // console.log(diZhi.id);
      console.log(YouhuiJuan);
      // console.log(this.radio);
      console.log(this.pojo.message);
      // console.log(typeof this.endPrice);
      this.$axios
        .post(
          this.$host +
            "/groupmall/power/mainList/newGroupOrder?userId="+myUserId+"&proId="+this.$route.query.orderId+"&buyNum=1" +
            "&payWay=" +
            this.radio +
            "&addressId=" +
            diZhi.id +
            "&couponId=" +
            (YouhuiJuan === undefined ? "" : YouhuiJuan.CouponId) +
            "&note=" +
            this.pojo.message +
            "&finalPrice=" +
            this.endPrice
        )
        .then(response => {
          // if (status === 200) {
            document.getElementById('payTurn').click();
          // console.log(response);
          // this.$alert("支付成功返回首页!", "支付信息", {
          //   confirmButtonText: "确定",
          //   callback: action => {
          //     this.$router.push("/");
          //   }
          // });
          // }else {
          //   this.$message({
          //     type: 'warning',
          //     message: resp.message
          //   })
          // }
        });
    }
  },
  filters: {
    //fliters中的this指向的不是vue实例,所以不能将数据定义在data,无法直接获取data数据
    payTypeFilter(type) {
      //全局payTypeOptions,返回一个满足条件的对象 find():查找一条满足条件的数据
      const payObj = payTypeOptions.find(obj => obj.type === type);
      //非空返回类型名称
      return payObj ? payObj.name : null;
    }
  }
};
</script>

<style scoped>
.el-breadcrumb {
  height: 20px;
  padding: 20px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  margin-bottom: 50px;
  margin-top: 20px;
}
.line {
  border-left: 3px solid rgb(211, 58, 49);
  padding-left: 10px;
  font-size: 20px;
}
.addressContent {
  width: 100%;
  height: 150px;
  background-color: rgb(243, 248, 251);
}
.personInfo {
  display: inline-block;
  padding-top: 10px;
  padding-left: 10px;
  padding-right: 10px;
}
.payfor {
  width: 100%;
  height: 200px;
  margin-top: 20px;
  background-color: rgb(250, 250, 250);
}
.payButton {
  float: right;
  margin-right: 10%;
  margin-top: -8%;
}
.Zhifuleixing {
  margin-left: 120px;
}
.liexing {
  margin-left: 30px;
  font-size: 14px;
}
</style>