<template>
  <div class="indexNavImg">
    <div style="width: 100%;border-bottom: 0.5px #d2d2d2 solid;">
      <div
        class="homeNavAll"
        style="width: 100%;height: 70px;margin: 0 auto;
        font-size: 18px;line-height: 70px;color: #333333;text-align:center"
      >
        <div
          class="activityBox"
          @click="toHelp"
        >
          <i class="el-icon-magic-stick"></i>
          <span style="margin-left: 5px">助力免单</span>
        </div>

        <div
          class="activityBox"
          @click="toKill"
        >
          <i class="el-icon-s-goods"></i>
          <span style="margin-left: 5px">限时秒杀</span>
        </div>
        <router-link to="/luckDraw">
          <div
            class="activityBox"
          >
            <i class="el-icon-s-finance"></i>
            <span style="margin-left: 5px">幸运抽奖</span>
          </div>
        </router-link>
        <div
          class="activityBox"
          @click="toSpecial"
        >
          <i class="el-icon-s-shop"></i>
          <span style="margin-left: 5px">特卖促销</span>
        </div>
        <div
          class="activityBox"
          @click="toGroup"
          style="border-right:0"
        >
          <i class="el-icon-s-shop"></i>
          <span style="margin-left: 5px">拼团活动</span>
        </div>
      </div>
    </div>

    <!--订单结算时的商品表-->
    <!-- <el-table
        :data="tableData"
        stripe
        style="width: 100%">
        <el-table-column
          prop="goodName"
          label="商品名称"
          width="180">
        </el-table-column>
        <el-table-column
          prop="goodMoney"
          label="金额"
          width="180">
        </el-table-column>
        <el-table-column
          prop="goodsNum"
          label="数量">
        </el-table-column>
        <el-table-column
          prop="totalNum"
          label="小计">
        </el-table-column>
      </el-table> -->
  </div>
</template>
<script>
export default {
  name: "indexNavImg",
  data() {
    return {
      tableData: [
        {
          goodName: "i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用",
          goodMoney: "219",
          goodsNum: "1",
          totalNum: "219"
        },
        {
          goodName: "i12触控真无线蓝牙耳机蓝牙5.0苹果安卓通用",
          goodMoney: "219",
          goodsNum: "1",
          totalNum: "219"
        }
      ]
    };
  },
  methods: {
    toHelp() {
      this.$router.push({ path: "/helpFree" });
    },
    toKill() {
      this.$router.push({ path: "/timeSale" });
    },
    toSpecial() {
      this.$router.push({ path: "/specialSale" });
    },
    toGroup() {
      this.$router.push({ path: "/groupSale" });
    }
  }
};
</script>

<style scoped>
.activityBox{
  width: calc((100% - 4px)/5);
  float: left;
  text-align:center;
  border-right:1px solid silver;
  color: #333;
}
.activityBox:hover {
  /* color: red; */
  cursor: pointer;
  /* color: red; */
}
</style>
