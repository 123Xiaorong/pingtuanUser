<template>
    <div>
    <el-table
            :data="tableData"
            style="width: 100%">
        <el-table-column
                prop=""
                label="商品图片"
                width="120" show-overflow-tooltip
        ><div>
            <img :src=" this.tableData[0].proImg" style="height: 50px;width: 50px"/>
        </div>
        </el-table-column>
        <el-table-column
                prop="pro_name"
                label="商品名字"
                width="180" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
                prop="intro"
                label="商品描述" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
                prop="count"
                label="数量" show-overflow-tooltip>
        </el-table-column>
        <el-table-column
            prop="price"
            label="单价" show-overflow-tooltip>
    </el-table-column>
        <el-table-column
                prop="zongjia"
                label="总价"
        show-overflow-tooltip>
        </el-table-column>
    </el-table>
        <el-row>
            <el-col :span="24" style="text-align: center;padding-top: 20px"><div class="grid-content bg-purple-light"><span v-if="this.tableData[0].bestState==1"><el-button type="success" plain @click="quzhifu">去支付</el-button>  <el-button type="success" plain @click="quxiaodingdan">取消订单</el-button></span><span v-if="this.tableData[0].bestState==8"><el-button type="success" plain>待成团</el-button></span>
                <span v-if="this.tableData[0].bestState==2"><el-button type="success" plain>去核销</el-button></span>
                <span v-if="this.tableData[0].bestState==3"></span>
                <span v-if="this.tableData[0].bestState==4"><el-button type="success" plain>查看物流</el-button><el-button type="success" plain @click="okreceive(scope)">确认收货</el-button></span>
                <span v-if="this.tableData[0].bestState==5"><el-button type="success" plain>去评价</el-button></span>
            </div></el-col>
        </el-row>
        <el-dialog
                title="提示"
                :visible.sync="dialogVisible"
                width="30%"
                :before-close="handleClose">
            <span>{{xinxi}}</span>
            <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取消</el-button>
    <el-button type="primary" @click="shanchudingdan">确定</el-button>
  </span>
        </el-dialog>
    </div>
</template>

<script>
  export default {
    name: "dingdanxiangqing",
    data(){
      return{
        tableData: [],
        dialogVisible: false,
        tishi:"",
        xinxi:""
      }
    },
    created(){
    
      console.log(this.$route.query.orderId)
      this.$axios.get(this.$host+'/groupmall/power/order/frontSelectOfListDetail',{params:{id:this.$route.query.orderId}})
        .then((resp)=> {
          // console.log("请求成功之后的回调函数");
          console.log(resp.data);
          this.tableData=resp.data.data
          for(var i=0;i<this.tableData.length;i++){
            this.tableData[i]["zongjia"]=0
          }
          for(var k=0;k<this.tableData.length;k++){
            this.tableData[k].zongjia=this.tableData[k].count*this.tableData[k].price-this.tableData[k].coupAmount
          }
          // this.tableData=resp.data;
          console.log( this.tableData);
        })
    },
    methods:{
      quxiaodingdan(){
        this.dialogVisible=true
        // this.$axios.get('http://172.16.14.41:8080/groupmall/power/order/deleteOrder',{params:{id:this.$route.query.orderId}})
        //   .then((resp)=> {
        //     // console.log("请求成功之后的回调函数");
        //     console.log(resp);
        //   })
      },
      shanchudingdan(){
        console.log(111)
        this.dialogVisible=false;
        if(this.dialogVisible==false&&this.xinxi=="确认收货吗?"){
          this.$axios.get(this.$host+'/groupmall/power/order/updateOk',{params:{id:this.tableData[0].orderId}})
            .then((resp)=> {

            })
        }
        if(this.dialogVisible==false&&this.xinxi=="你确定支付吗?"){
          this.$axios.post(this.$host+'/groupmall/power/mainList/setPayed?orderId='+this.tableData[0].orderId).then((resp)=>{
            console.log(resp)
            // this.$router.push("/"+resp.config.url)
            // this.tableData=resp.data.data
          })
        }
        this.$router.push("/personal/mydingdan")
      },
      okreceive(a){
        this.dialogVisible=true;
        this.xinxi="确认收货吗?"
        // console.log(this.tableData[0].orderId)
        // this.$axios.get('http://172.16.14.41:8080/groupmall/power/order/deleteOrder',{params:{id:this.$route.query.orderId}})
        //   .then((resp)=> {
        //     // console.log("请求成功之后的回调函数");
        //     console.log(resp);
        //   })
      },
      quzhifu(){
        this.dialogVisible=true;
        this.xinxi="你确定支付吗?"
        console.log(this.tableData[0].pro_name)
        console.log(typeof parseInt(this.tableData[0].zongjia))
        // this.$axios.post('http://172.16.14.94:8080/groupmall/power/mainList/setPayed?orderId='+this.tableData[0].orderId).then((resp)=>{
        //   console.log(resp)
        //   // this.$router.push("/"+resp.config.url)
        //   // this.tableData=resp.data.data
        // })
      }
    }
  };
</script>

<style scoped>

</style>