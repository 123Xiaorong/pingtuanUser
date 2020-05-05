<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="id" label="ID" width="100"> </el-table-column>
    <el-table-column prop="date" label="产品名称" width="200">
    </el-table-column>

    <el-table-column prop="tupian" label="产品图片" width="150">
    </el-table-column>
    <el-table-column prop="renshu" label="参团人数" width="150">
    </el-table-column>
    <el-table-column prop="jiage" label="拼团价格" width="110">
    </el-table-column>
    <!-- <el-table-column
                    prop="zhuangtai"
                    label="拼团状态"
                    width="120">
            </el-table-column> -->
    <el-table-column prop="timeString" label="倒计时" width="150">
      <!-- <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >邀请好友</el-button
        >
      </template> -->
    </el-table-column>
  </el-table>
</template>

<script>
// import groupShare from "../../xxb/groupShare"
export default {
  name: "mypintuanzhong",
  components:{
    // groupShare:groupShare
  },
  data() {
    return {
      tableData: [
        {
          id: "1",
          date: "说了很多很多的话，我很无聊的在写垃圾代码",
          tupian: "",
          renshu: "3/4",
          jiage: "70元",
          zhuangtai: "拼团中",
          time:3000,
          timeString:""
        },
        {
          id: "2",
          date: "说了很多很多的话，我很无聊的在写垃圾代码",
          tupian: "",
          renshu: "2/4",
          jiage: "70元",
          zhuangtai: "拼团中",
          time:2000,
          timeString:""
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  created(){
    (()=>{
      setInterval(()=>{
        for(let i=0;i<this.$data.tableData.length;i++){
          this.$data.tableData[i].time--;
          this.$data.tableData[i].timeString=String(Math.floor(this.$data.tableData[i].time/60))+":"+String(this.$data.tableData[i].time%60)
        }
      },1000)
    })()
  }
};
</script>

<style scoped></style>
