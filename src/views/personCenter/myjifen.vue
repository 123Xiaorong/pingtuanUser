<template>
  <div style="margin-top: 25px">
    <div class="jifen-head">
      <div class="jifen-count">
        <p>可用积分</p>
        <p style="margin-left: 20px">{{Kyjifen}}</p>
      </div>
      <div class="jifen-rule">
        <el-button style="margin-left: 30px;" round @click="dialogVisible = true">如何获取积分</el-button>
        <el-button style="margin-left: 30px;" round @click="dialogTableVisible = true">积分明细</el-button>
      </div>
    </div>
    <div>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="name" label="优惠券名称" width="180"></el-table-column>
        <el-table-column prop="tiaojian" label="使用条件" width="180"></el-table-column>
        <el-table-column prop="date" label="有效日期"></el-table-column>
        <el-table-column prop="jianshao" label="消费积分数"></el-table-column>
        <el-table-column label="操作" width="150">
          <template slot-scope="scope">
            <el-button type="danger" size="mini" :plain="true" @click="open2(scope.row.ID)">立即兑换</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <el-dialog title="积分规则" :visible.sync="dialogVisible" width="30%">
      <div>
        <span>购物</span>
        <br />
        <hr />
        <span>●购买商品可获得积分</span>
        <el-divider></el-divider>
        <span>签到</span>
        <br />
        <hr />
        <span>●每日签到可获得积分</span>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>

    <el-dialog title="积分明细" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="name" width="150"></el-table-column>
        <el-table-column property="time" width="200"></el-table-column>
        <el-table-column property="data"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
var ID;
export default {
  data() {
    return {
      dialogVisible: false,
      dialogTableVisible: false,
      Kyjifen: 0,
      gridData: [],
      tableData: []
    };
  },

  components: {},

  methods: {
    open2(ID) {
      // console.log("xixi")
      // console.log(ID)

      // this.$message({
      //   showClose: true,
      //   message: '兑换成功',
      //   type: 'success'
      // });
      this.$axios
        .get(this.$host + "/groupmall/member/getCoupon", {
          params: { userid: sessionStorage.getItem("myUserId"), coupid: ID }
        })
        .then(response => {
        this.$axios.get(this.$host + "/groupmall/member/myPoints", {
        params: { userid: sessionStorage.getItem("myUserId") }
      }).then(response=>{
        this.Kyjifen = response.data.myPoints;
console.log(response.data);
        })
          
        });
      // console.log(response)
    }
  },

  // 初始化
  created() {
    this.$axios
      .get(this.$host + "/groupmall/member/myPoints", {
        params: { userid: sessionStorage.getItem("myUserId") }
      })
      .then(response => {
        console.log(response.data);
        
          this.Kyjifen = response.data.myPoints;
        

        for (var i = 0; i < response.data.couponList.length; i++) {
          this.tableData.push({
            name: response.data.couponList[i].coupName,
            tiaojian: "满" + response.data.couponList[i].orderAmount + "元可用",
            date: response.data.couponList[i].userEnd,
            jianshao: response.data.couponList[i].coupInteg + "积分",
            ID: response.data.couponList[i].coupId
          });
        }
        for (var i = 0; i < response.data.detailList.length; i++) {
          this.gridData.push({
            name: response.data.detailList[i].reason,
            time: response.data.detailList[i].timedate,
            data: response.data.detailList[i].consumptionPoints
          });
        }
      });
  }
};
</script>

<style scoped>
.jifen-head {
  width: 100%;
  height: 120px;
  background-color: rgb(230, 34, 37);
  margin-top: 25px;
  position: relative;
  color: white;
}
.jifen-count {
  position: absolute;
  top: 10px;
  left: 45%;
}
.jifen-count p:nth-child(1) {
  font-size: 20px;
}
.jifen-count p:nth-child(2) {
  font-size: 24px;
  letter-spacing: 2px;
  margin-left: 8px;
}
.jifen-rule {
  position: absolute;
  top: 60%;
  left: 30%;
}
</style>