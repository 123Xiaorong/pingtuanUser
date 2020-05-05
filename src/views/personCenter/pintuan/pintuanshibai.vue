<template>
  <el-table :data="tableData2" style="width: 100%">
    <el-table-column prop="group_id" label="ID" width="100"> </el-table-column>
    <el-table-column prop="pro_name" label="产品名称" width="200">
    </el-table-column>

    <el-table-column prop="tupian" label="产品图片" width="150">
      <template slot-scope="scope">
        <img style="width:70px;height:70px;" :src="scope.row.pro_img" />
      </template>
    </el-table-column>
    <el-table-column prop="people_count" label="拼团人数" width="150">
    </el-table-column>
    <el-table-column prop="price" label="拼团价格" width="110">
    </el-table-column>
    <!-- <el-table-column
                prop="zhuangtai"
                label="失败原因"
                width="110">
        </el-table-column> -->
    <el-table-column label="操作" width="150">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
          >重新开团</el-button
        >
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  name: "mypintuanzhong",
  data() {
    return {
      tableData2: [
        {
          id: "1",
          date: "说了很多很多的话，我很无聊的在写垃圾代码",
          tupian: "",
          renshu: "3/4",
          jiage: "70元",
          zhuangtai: "人数不够"
        },
        {
          id: "2",
          date: "说了很多很多的话，我很无聊的在写垃圾代码",
          tupian: "",
          renshu: "1/4",
          jiage: "70元",
          zhuangtai: "人数不够"
        }
      ]
    };
  },
  methods: {
    formatter(row, column) {
      return row.address;
    }
  },
  methods: {
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    }
  },
  created() {
    this.$axios({
      method: "delete",
      url: "http://172.16.14.127:8080/groupmall/order/MyGroupDetail",
      headers: {
        "Content-Type": "application/x-wwww-form-urlendcoded"
      },
      params: { userId: 1 }
    })
      .then(response => {
        console.log(response.data);
        let groupIamge =
          response.data[0].group_img.split("\\")[7] +
          "/" +
          response.data[0].group_img.split("\\")[8] +
          "/" +
          response.data[0].group_img.split("\\")[9];
          this.$data.tableData2=[];
        this.$data.tableData2=response.data;
        for (let i = 0; i < this.$data.tableData2.length; i++) {
          // console.log(this.$data.tableData2[i].pro_img)
          this.$data.tableData2[i].pro_img = "http://172.16.14.94:8080/groupmall/" + groupIamge;
        }
        // console.log(this.$data.tableData2);
      })
      .catch(error => {
        // console.log(error);
      });
  }
};
</script>

<style scoped></style>
