<template>
  <div style="margin-top: 25px">
    <el-button style="margin-top:20px;" type="primary" @click="handleAdd" icon="el-icon-plus">新增地址</el-button>
    <el-table :data="tableData" stripe style="width: 100%;margin-top:25px;">
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="phone" label="手机号码" width="180"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column label="操作" width="200">
        <template slot-scope="scope">
          <router-link
                  :to="{path:'./bianjiLY',
                                query:{id:scope.row.id,}}"
                  active-class="active" icon="el-icon-edit">
          <el-button size="small" @click="handleAdds(scope.row.id)"
                     icon="el-icon-edit" title="编辑" style="margin-right: 10px"></el-button>
          </router-link>
          <!--<el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>-->
          <!--<el-button size="mini" @click="handleEdit(scope.row.id)">编辑</el-button>-->
          <!--<el-button size="mini" type="danger" @click="handleDelete(scope.row.id)">删除</el-button>-->
          <!--<el-button size="mini" @click="handleEdit(scope.row.id)" icon="el-icon-edit">编辑</el-button>-->
          <el-button size="small" type="danger" @click="handleDelete(scope.row.id)" icon="el-icon-delete"
          title="删除"></el-button>
        </template>
      </el-table-column>
    </el-table>


    <!--新增-->
    <el-dialog title="新增收货地址" :visible.sync="dialogFormVisible" width="500px">
      <el-form
        :rules="rules"
        ref="pojoForm"
        label-width="100px"
        label-position="right"
        style="width:400px"
        :model="pojo"
      >
        <el-form-item label="姓名" prop="name">
          <el-input v-model="pojo.name"></el-input>
        </el-form-item>
        <el-form-item label="号码" prop="phone">
          <el-input v-model="pojo.phone"></el-input>
        </el-form-item>
        <el-form-item label="地址" prop="address">
          <el-input
            type="textarea"
            v-model="pojo.address"
            :autosize="{minRows:2,maxRows:4}"
            placeholder="请输入地址"
          ></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
         <el-button type="primary" @click="addData('pojoForm')">确 定</el-button>
        <!--<el-button-->
          <!--type="primary"-->
          <!--@click="pojo.id === null?addData('pojoForm'):updateData('pojoForm')"-->
        <!--&gt;确 定</el-button>-->
      </div>
    </el-dialog>


    <!--编辑-->

    <!--<el-dialog title="收货地址编辑" :visible.sync="diagFormVisible" width="500px">-->
      <!--<el-form-->
              <!--:rules="rules"-->
              <!--ref="pojoForm"-->
              <!--label-width="100px"-->
              <!--label-position="right"-->
              <!--style="width:400px"-->
              <!--:model="pojos"-->
      <!--&gt;-->
        <!--<el-form-item label="姓名" prop="names">-->
          <!--<el-input v-model="pojos.names"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="号码" prop="phones">-->
          <!--<el-input v-model="pojos.phones"></el-input>-->
        <!--</el-form-item>-->
        <!--<el-form-item label="地址" prop="addresss">-->
          <!--<el-input-->
                  <!--type="textarea"-->
                  <!--v-model="pojos.addresss"-->
                  <!--:autosize="{minRows:2,maxRows:4}"-->
                  <!--placeholder="请输入地址"-->
          <!--&gt;</el-input>-->
        <!--</el-form-item>-->
      <!--</el-form>-->
      <!--<div slot="footer" class="dialog-footer">-->
        <!--<el-button @click="dialogFormVisible = false">取 消</el-button>-->
        <!--<el-button type="primary" @click="addDatas()">确 定</el-button>-->
        <!--&lt;!&ndash;<el-button&ndash;&gt;-->
        <!--&lt;!&ndash;type="primary"&ndash;&gt;-->
        <!--&lt;!&ndash;@click="pojo.id === null?addData('pojoForm'):updateData('pojoForm')"&ndash;&gt;-->
        <!--&lt;!&ndash;&gt;确 定</el-button>&ndash;&gt;-->
      <!--</div>-->
    <!--</el-dialog>-->

  </div>
</template>

<script>
  var id;
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false, //控制对话框
      diagFormVisible:false,
      pojo: {
        // id: null, //新增id
        name: "",
        phone: "",
        address: ""
      }, //提交的对象
      pojos: {
        // id: null, //新增id
        names: "",
        phones: "",
        addresss: ""
      }, //提
      rules: {
        //校验规则
        name: [{ required: true, message: "姓名不能为空", trigger: "blur" }]
      }
    };
  },

  components: {},

  methods: {
    // 编辑
    handleAdds(id){
      this.diagFormVisible = true;
      this.$nextTick(() => {
        //this.$nextTick()它是一个异步事件，当渲染结束之后，它的回调函数才会被执行
        //弹出窗口打开后，需要加载DOM，就需要花费一点时间，我们就应该等待它加载完DOM之后，再进行调用resetFields方法，重置表单和清除样式
        this.$refs["pojoForm"].resetFields();
      });
      // console.log(id)
      // this.$axios.get("http://172.16.14.127:8080/groupmall/order/MyAddress/selectAddressById",{params:{addressId:id}})
      //   .then(response=>{
      //     console.log(response.data)
      //   })
    },
    //弹出新增窗口
    handleAdd() {
      // this.pojo = {}
      this.dialogFormVisible = true;
      this.$nextTick(() => {
        //this.$nextTick()它是一个异步事件，当渲染结束之后，它的回调函数才会被执行
        //弹出窗口打开后，需要加载DOM，就需要花费一点时间，我们就应该等待它加载完DOM之后，再进行调用resetFields方法，重置表单和清除样式
        this.$refs["pojoForm"].resetFields();
      });
    },
    //打开编辑窗口
    handleEdit(id) {
      console.log("编辑", id);
      //清空原数据
      this.handleAdd()
      memberApi.getById(id).then(response=>{
        const resp = response.data
        if(resp.flag){
          this.pojo = resp.data
        }
      })
    },
    // 删除
    handleDelete(id){
      this.$confirm('确认删除这条记录吗?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        }).then(()=>{
          console.log("删除")
        console.log(id)

        this.$axios.delete(this.$host+"/groupmall/order/MyAddress",{params:{addressId:id}})
          .then(response=>{
            console.log(response.data)

          })
        this.$router.go(0)
      })
    },
    // 新增
    addData(){
      // console.log(111)
      console.log(this.pojo.name)
      console.log(this.pojo.phone)
      console.log(this.pojo.address)


      this.$axios.post(this.$host+'/groupmall/order/MyAddress',
        JSON.stringify({
            userId:sessionStorage.getItem("myUserId"),
            addressName:this.pojo.name,
            addressTel:this.pojo.phone,
            address:this.pojo.address,



        })
      ).then(response=>{
      console.log(response)

      })
      this.$router.go(0)
    },

   // 编辑
    addDatas(id){
      console.log(id)
    }
  },

  // 初始化
  created(){
    console.log(111)
    console.log(sessionStorage.getItem("myUserId"));
    this.$axios.get(this.$host+"/groupmall/order/MyAddress",
      {params:{userId:sessionStorage.getItem("myUserId")}})
      .then(response=>{
     console.log(response.data)
        for(var i=0;i<response.data.length;i++){
          this.tableData.push({
            name:response.data[i].addressName,
            phone:response.data[i].addressTel,
            address:response.data[i].address,
            id:response.data[i].addressId,
          })
        }

      })

  }
};
</script>

<style scoped>
</style>