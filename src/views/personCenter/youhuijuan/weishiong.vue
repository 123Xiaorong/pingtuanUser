<template>
    <el-table
            :data="tableData"
            style="width: 100%"
            :default-sort = "{prop: 'date', order: 'descending'}"
    >
        <el-table-column
                label="优惠卷名称"

        >
            <template slot-scope="scope">
                <span >￥{{ scope.row.mycoupAmount}}满减卷</span>
            </template>
        </el-table-column>
        <el-table-column
                label="截止时间"

                >
            <template slot-scope="scope">
                <span >{{ scope.row.myuserEnd}}</span>
            </template>
        </el-table-column>

        <el-table-column
                label="条件"

                width="180">
            <template slot-scope="scope">
                <span >满足{{ scope.row.myorderAmount}}元可用</span>
            </template>
        </el-table-column>
        <el-table-column
                label="状态"

                >
            <template slot-scope="scope">
                <span >{{ scope.row.state}}</span>
            </template>
        </el-table-column>
    </el-table>
</template>

<script>
  export default {
    name: "weishiong",
    created(){
      var ID = sessionStorage.getItem('myUserId');
      this.$axios.get(this.$host+'/groupmall/order/MyCoupon/UnUsedCoupon?userId='+ID+'', ({
      })).then(response => {
        console.log(response.data);
        const resp = response;
        for( var i=0;i<resp.data.length;i++){
          this.tableData.push({
            myuserEnd:resp.data[i].userEnd,
            mycoupAmount:resp.data[i].coupAmount,
            myorderAmount: resp.data[i].orderAmount,
            state:"未使用",
          })
        }
      })
    },
    data(){
      return{
        tableData: []
      };
    },
    methods: {
      formatter(row, column) {
        return row.address;
      }
    },
  };
</script>

<style scoped>

</style>