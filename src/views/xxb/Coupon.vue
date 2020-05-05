<template>
  <div>
    <el-table
      :highlight-current-row="isCouponlog"
      @current-change="clickCouponChange"
      :data="CouponData"
      style="width: 100%"
    >
      <el-table-column show-overflow-tooltip prop="CouponId" label="优惠券ID" width="180"></el-table-column>
      <el-table-column prop="CouponName" label="优惠券名称" width="180"></el-table-column>
      <el-table-column prop="CouponPrice" label="优惠券金额"></el-table-column>
    </el-table>
  </div>
</template>

<script>
var myUserId = sessionStorage.getItem("myUserId");
var myGoodsId = sessionStorage.getItem("goodsId")
export default {
  props: {
    isCouponlog: Boolean
  },
  data() {
    return {
      CouponData: []
    };
  },

  components: {},

  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.$axios
        .post(
          this.$host+"/groupmall/power/mainList/pay?userId="+myUserId+"&proId="+myGoodsId
        )
        .then(response => {
          console.log(response.data.coupons);
          const resp = response.data;
          for (var i = 0; i < resp.coupons.length; i++) {
            this.CouponData.push({
              CouponId:resp.coupons[i].coup_id,
              CouponName:resp.coupons[i].coup_name,
              CouponPrice:resp.coupons[i].coup_amount
            });
          }
        });
    },
    //当点击某一行的时候会调用这个函数进行处理
    clickCouponChange(couponRow) {
      console.log(couponRow);
      // 点击后,要将点击的数据传递到父组件(商品管理中),
      // 则可以通过触发父组件中的option-supplier, 触发之后 ,
      //父组件可以在 option-supplier 这个事件对应的处理函数中进行接收数据currentRow
      this.$emit("option-coupon", couponRow);
    }
  }
};
</script>

<style scoped>
</style>