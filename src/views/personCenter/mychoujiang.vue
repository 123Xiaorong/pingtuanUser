<template>
  <div style="margin-top: 25px">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <div>
          <el-table
                  :data="tableData"
                  style="width: 100%">
            <el-table-column
                    prop="pro_name"
                    label="商品详情"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="note"
                    label="商品描述"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="lk_price"
                    label="总价"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="quali_is_win"
                    label="中奖状态"
                    width="150">
            </el-table-column>
            <el-table-column
                    label="操作"
                    min-width="300"
            >
              <template slot-scope="scope">
                <el-button type="success" @click="chakandingdan(scope)">查看订单详情</el-button>

              </template>
            </el-table-column>

          </el-table>       </div>

      </el-tab-pane>
      <el-tab-pane label="进行中" name="second">
        <div>
          <el-table
                  :data="tableData"
                  style="width: 100%">
            <el-table-column
                    prop="pro_name"
                    label="商品详情"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="note"
                    label="商品描述"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="lk_price"
                    label="总价"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="quali_is_win"
                    label="中奖状态"
                    width="150">
            </el-table-column>
            <el-table-column
                    label="操作"
                    min-width="300"
            >
              <template slot-scope="scope">
                <el-button type="success" @click="chakandingdan(scope)">查看订单详情</el-button>

              </template>
            </el-table-column>

          </el-table>       </div>
      </el-tab-pane>
      <el-tab-pane label="已抽奖" name="fourth">

        <div>
          <el-table
                  :data="tableData"
                  style="width: 100%">
            <el-table-column
                    prop="pro_name"
                    label="商品详情"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="note"
                    label="抽奖描述"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="lk_price"
                    label="总价"
                    width="150">
            </el-table-column>
            <el-table-column
                    prop="quali_is_win"
                    label="中奖状态"
                    width="150">
            </el-table-column>
            <el-table-column
                    label="操作"
                    min-width="300"
            >
              <template  slot-scope="scope">
                <el-button type="success" @click="chakandingdan(scope)">查看订单详情</el-button>

              </template>
            </el-table-column>

          </el-table>       </div>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        activeName: 'first',
        tableData: [{
          date: '2016-05-03',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-02',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-04',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-01',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-08',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-06',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }, {
          date: '2016-05-07',
          name: 'Tom',
          address: 'No. 189, Grove St, Los Angeles'
        }],
        id:""
      }
    },

    components: {},

    methods: {
    
      chakandingdan(a){
        console.log(a.row.lk_id)
        // this.$axios.get(this.$host+'/groupmall/order/MyLucky/selectOrderByLuckyId',{params:{userId:this.id,luckyId:a.row.lkId}})
        //   .then((resp)=> {
        //     // console.log("请求成功之后的回调函数");
        //     // console.log(resp.data);
        //     // this.tableData=resp.data
        //   })
              this.$router.push({ path: "/personal/mydingdanxiangqing", query: { orderId: a.row.lk_id } });

      },
      handleClick(tab, event) {
        console.log(tab.label);
        if(tab.label=="进行中"){
          this.$axios.get(this.$host+'/groupmall/order/MyLucky/selectDoingLuck',{params:{userId:this.id}})
            .then((resp)=> {
              // console.log("请求成功之后的回调函数");
              console.log(resp.data);
              this.tableData=resp.data
              for(var i=0;i<this.tableData.length;i++){
                if(this.tableData[i].quali_is_win="true") {
                  this.tableData[i].quali_is_win = "已中奖"
                }
                if(this.tableData[i].quali_is_win="false") {
                  this.tableData[i].quali_is_win = "未中奖"
                }
              }
              console.log(this.tableData)
            })
        }
        if(tab.label=="全部"){
          this.$axios.get(this.$host+'/groupmall/order/MyLucky/selectAllLuck',{params:{userId:this.id}})
            .then((resp)=> {
              console.log(resp.data);
              this.tableData=resp.data
              for(var i=0;i<this.tableData.length;i++){
                if(this.tableData[i].quali_is_win="true") {
                  this.tableData[i].quali_is_win = "已中奖"
                }
                if(this.tableData[i].quali_is_win="false") {
                  this.tableData[i].quali_is_win = "未中奖"
                }
              }
              // for(var i=0;i<this.tableData.length;i++){
              //   if(this.tableData[i].lkState="true") {
              //     this.tableData[i].lkState = "已中奖"
              //   }
              //   if(this.tableData[i].lkState="false") {
              //     this.tableData[i].lkState = "未中奖"
              //   }
              // }
            })
        }
        if(tab.label=="已抽奖"){
          this.$axios.get(this.$host+'/groupmall/order/MyLucky/selectDoneLuck',{params:{userId:this.id}})
            .then((resp)=> {
              // console.log("请求成功之后的回调函数");
              console.log(resp.data);
              this.tableData=resp.data
              for(var i=0;i<this.tableData.length;i++){
                if(this.tableData[i].quali_is_win="true") {
                  this.tableData[i].quali_is_win = "已中奖"
                }
                if(this.tableData[i].quali_is_win="false") {
                  this.tableData[i].quali_is_win = "未中奖"
                }
              }
            })
        }
      }
    },
    created(){
      this.id=sessionStorage.getItem("myUserId")
      this.$axios.get(this.$host+'/groupmall/order/MyLucky/selectAllLuck',{params:{userId:this.id}})
        .then((resp)=> {
          // console.log("请求成功之后的回调函数");
          console.log(resp.data);
          this.tableData=resp.data
          console.log(this.tableData)
          for(var i=0;i<this.tableData.length;i++){
            if(this.tableData[i].quali_is_win="true") {
              this.tableData[i].quali_is_win = "已中奖"
            }
            if(this.tableData[i].quali_is_win="false") {
              this.tableData[i].quali_is_win = "未中奖"
            }
          }
          // this.tableData=resp.data;
          // console.log( this.tableData);
        })
    }
  }
</script>

<style scoped>
</style>