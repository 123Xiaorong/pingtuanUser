<template>
  <div>
    <el-table
      :highlight-current-row="isDialog"
      @current-change="clickCurrentChange"
      :data="tableData"
      style="width: 100%"
    >
      <el-table-column show-overflow-tooltip prop="id" label="ID"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
    </el-table>
  </div>
</template>

<script>
var myUserId = sessionStorage.getItem("myUserId");
var myGoodsId = sessionStorage.getItem("goodsId")
export default {
  props: {
    isDialog: Boolean
  },
  data() {
    return {
      tableData: []
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
          console.log(response.data.address);
          const resp = response.data;
          for (var i = 0; i < resp.address.length; i++) {
            this.tableData.push({
              address: resp.address[i].address,
              id: resp.address[i].address_id
            });
          }
        });
    },

    //当点击某一行的时候会调用这个函数进行处理
    clickCurrentChange(currentRow) {
      console.log(currentRow);
      // 点击后,要将点击的数据传递到父组件(商品管理中),
      // 则可以通过触发父组件中的option-supplier, 触发之后 ,
      //父组件可以在 option-supplier 这个事件对应的处理函数中进行接收数据currentRow
      this.$emit("option-supplier", currentRow);
    }
  }
};
</script>

<style scoped>
</style>