<template>
  <div style="margin-top: 25px">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="全部" name="first">
        <el-table
                ref="multipleTable"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange">
          <el-table-column
                  type="selection"
                  width="55">
          </el-table-column>
          <el-table-column
          property="proImg"
                  label="商品图片"
                  width="120">          
            <template slot-scope="scope">
            <img :src="scope.row.proImg" min-width="50" height="50" />
          </template>
          </el-table-column>
          <el-table-column
                  property="orderId"
                  label="订单号"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="pro_name"
                  label="商品名字"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="intro"
                  label="商品介绍"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="price"
                  label="单价"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="count"
                  label="数量"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="coupAmount"
                  label="优惠卷面额"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="bestState"
                  label="订单状态"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property=""
                  label="操作"
                  show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button type="success" @click="dingdanxiangqing(scope)">查看</el-button>
            </template>
          </el-table-column>
        </el-table>

      </el-tab-pane>
      <el-tab-pane label="待付款" name="second">
        <el-table
                ref="multipleTable"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange">
          <el-table-column
                  type="selection"
                  width="55">
          </el-table-column>
          <el-table-column
                  label="商品图片"
                  width="120">
 <template slot-scope="scope">
            <img :src="scope.row.proImg" min-width="50" height="50" />
          </template>          </el-table-column>
          <el-table-column
                  property="orderId"
                  label="订单号"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="pro_name"
                  label="商品名字"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="intro"
                  label="商品介绍"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="price"
                  label="单价"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="count"
                  label="数量"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="coupAmount"
                  label="优惠卷面额"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="bestState"
                  label="订单状态"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property=""
                  label="操作"
                  show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button type="success" @click="dingdanxiangqing(scope)">查看</el-button>
            </template>        </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待成团" name="third">
        <el-table
                ref="multipleTable"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange">
          <el-table-column
                  type="selection"
                  width="55">
          </el-table-column>
          <el-table-column
                  label="商品图片"
                  width="120">
         <template slot-scope="scope">
            <img :src="scope.row.proImg" min-width="50" height="50" />
          </template>
          </el-table-column>
          <el-table-column
                  property="orderId"
                  label="订单号"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="pro_name"
                  label="商品名字"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="intro"
                  label="商品介绍"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="price"
                  label="单价"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="count"
                  label="数量"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="coupAmount"
                  label="优惠卷面额"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="bestState"
                  label="订单状态"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property=""
                  label="操作"
                  show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button type="success" @click="dingdanxiangqing(scope)">查看</el-button>
            </template>        </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待核销" name="fourth">
        <el-table
                ref="multipleTable"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange">
          <el-table-column
                  type="selection"
                  width="55">
          </el-table-column>
          <el-table-column
                  label="商品图片"
                  width="120">
          <template slot-scope="scope">
            <img :src="scope.row.proImg" min-width="50" height="50" />
          </template>
          </el-table-column>
          <el-table-column
                  property="orderId"
                  label="订单号"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="pro_name"
                  label="商品名字"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="intro"
                  label="商品介绍"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="price"
                  label="单价"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="count"
                  label="数量"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="coupAmount"
                  label="优惠卷面额"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="bestState"
                  label="订单状态"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property=""
                  label="操作"
                  show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button type="success" @click="dingdanxiangqing(scope)">查看</el-button>
            </template>        </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待发货" name="fiveth">
        <el-table
                ref="multipleTable"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange">
          <el-table-column
                  type="selection"
                  width="55">
          </el-table-column>
          <el-table-column
                  label="商品图片"
                  width="120">
            <template slot-scope="scope">
            <img :src="scope.row.proImg" min-width="50" height="50" />
          </template>
          </el-table-column>
          <el-table-column
                  property="orderId"
                  label="订单号"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="pro_name"
                  label="商品名字"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="intro"
                  label="商品介绍"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="price"
                  label="单价"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="count"
                  label="数量"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="coupAmount"
                  label="优惠卷面额"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="bestState"
                  label="订单状态"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property=""
                  label="操作"
                  show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button type="success" @click="dingdanxiangqing(scope)">查看</el-button>
            </template>        </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待收货" name="sixth">
        <el-table
                ref="multipleTable"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange">
          <el-table-column
                  type="selection"
                  width="55">
          </el-table-column>
          <el-table-column
                  label="商品图片"
                  width="120">
           <template slot-scope="scope">
            <img :src="scope.row.proImg" min-width="50" height="50" />
          </template>
          </el-table-column>
          <el-table-column
                  property="orderId"
                  label="订单号"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="pro_name"
                  label="商品名字"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="intro"
                  label="商品介绍"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="price"
                  label="单价"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="count"
                  label="数量"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="coupAmount"
                  label="优惠卷面额"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="bestState"
                  label="订单状态"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property=""
                  label="操作"
                  show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button type="success" @click="dingdanxiangqing(scope)">查看</el-button>
            </template>        </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="待评价" name="seventh"><el-table
              ref="multipleTable"
              :data="tableData"
              style="width: 100%"
              @selection-change="handleSelectionChange">
        <el-table-column
                type="selection"
                width="55">
        </el-table-column>
        <el-table-column
                label="商品图片"
                width="120">
         <template slot-scope="scope">
            <img :src="scope.row.proImg" min-width="50" height="50" />
          </template>
        </el-table-column>
        <el-table-column
                property="orderId"
                label="订单号"
                width="120">
        </el-table-column>
        <el-table-column
                property="pro_name"
                label="商品名字"
                width="120">
        </el-table-column>
        <el-table-column
                property="intro"
                label="商品介绍"
                width="120">
        </el-table-column>
        <el-table-column
                property="price"
                label="单价"
                width="120">
        </el-table-column>
        <el-table-column
                property="count"
                label="数量"
                width="120"
                show-overflow-tooltip>
        </el-table-column>
        <el-table-column
                property="coupAmount"
                label="优惠卷面额"
                width="120"
                show-overflow-tooltip>
        </el-table-column>
        <el-table-column
                property="bestState"
                label="订单状态"
                width="120"
                show-overflow-tooltip>
        </el-table-column>
        <el-table-column
                property=""
                label="操作"
                show-overflow-tooltip>
          <template slot-scope="scope">
            <el-button type="success" @click="dingdanxiangqing(scope)">查看</el-button>
          </template>      </el-table-column>
      </el-table>
      </el-tab-pane>
      <el-tab-pane label="交易成功" name="eighth">
        <el-table
                ref="multipleTable"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange">
          <el-table-column
                  type="selection"
                  width="55">
          </el-table-column>
          <el-table-column
                  label="商品图片"
                  width="120">
           <template slot-scope="scope">
            <img :src="scope.row.proImg" min-width="50" height="50" />
          </template>
          </el-table-column>
          <el-table-column
                  property="orderId"
                  label="订单号"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="pro_name"
                  label="商品名字"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="intro"
                  label="商品介绍"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="price"
                  label="单价"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="count"
                  label="数量"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="coupAmount"
                  label="优惠卷面额"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="bestState"
                  label="订单状态"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property=""
                  label="操作"
                  show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button type="success" @click="dingdanxiangqing(scope)">查看</el-button>
            </template>        </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="退款中" name="nineth">
        <el-table
                ref="multipleTable"
                :data="tableData"
                style="width: 100%"
                @selection-change="handleSelectionChange">
          <el-table-column
                  type="selection"
                  width="55">
          </el-table-column>
          <el-table-column
                  label="商品图片"
                  width="120">
            <template slot-scope="scope">
            <img :src="scope.row.proImg" min-width="50" height="50" />
          </template>
          </el-table-column>
          <el-table-column
                  property="orderId"
                  label="订单号"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="pro_name"
                  label="商品名字"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="intro"
                  label="商品介绍"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="price"
                  label="单价"
                  width="120">
          </el-table-column>
          <el-table-column
                  property="count"
                  label="数量"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="coupAmount"
                  label="优惠卷面额"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property="bestState"
                  label="订单状态"
                  width="120"
                  show-overflow-tooltip>
          </el-table-column>
          <el-table-column
                  property=""
                  label="操作"
                  show-overflow-tooltip>
            <template slot-scope="scope">
              <el-button type="success" @click="dingdanxiangqing(scope)">查看</el-button>
            </template>        </el-table-column>
        </el-table>
      </el-tab-pane>

    </el-tabs>
  </div>
</template>

<script>
import { log } from 'util';
  export default {
    data () {
      return {
        activeName: 'first',
        tableData: [],
        id:""
      }
    },

    components: {},

    methods: {
      handleClick(tab, event) {
        console.log(tab.label);
        if(tab.label=="待付款"){
          this.$axios.post(this.$host+'/groupmall/power/order/frontSelectOfList',JSON.stringify({page:0,limit:10,userId:this.id,bestState:1})).then((resp)=>{
            console.log(resp.data.data)
            this.tableData=resp.data.data
            for(var i=0;i<this.tableData.length;i++){
              if(this.tableData[i].bestState==1){
                this.tableData[i].bestState="待付款"
              }
              if(this.tableData[i].bestState==2){
                this.tableData[i].bestState="待核销"
              }
              if(this.tableData[i].bestState==3){
                this.tableData[i].bestState="待发货"
              }
              if(this.tableData[i].bestState==4){
                this.tableData[i].bestState="待收货"
              }
              if(this.tableData[i].bestState==5){
                this.tableData[i].bestState="待评价"
              }
              if(this.tableData[i].bestState==6){
                this.tableData[i].bestState="交易成功"
              }
              if(this.tableData[i].bestState==7){
                this.tableData[i].bestState="退款中"
              }
              if(this.tableData[i].bestState==8){
                this.tableData[i].bestState="待成团"
              }
            }
            // this.totalchangdu=resp.data.count
            // console.log(this.tableData)
            // this.totalchangdu=this.tableData.length
          })
        }
        if(tab.label=="待核销"){
          this.$axios.post(this.$host+'/groupmall/power/order/frontSelectOfList',JSON.stringify({page:0,limit:10,userId:this.id,bestState:2})).then((resp)=>{
            console.log(resp.data.data)
            this.tableData=resp.data.data
            for(var i=0;i<this.tableData.length;i++){
              if(this.tableData[i].bestState==1){
                this.tableData[i].bestState="待付款"
              }
              if(this.tableData[i].bestState==2){
                this.tableData[i].bestState="待核销"
              }
              if(this.tableData[i].bestState==3){
                this.tableData[i].bestState="待发货"
              }
              if(this.tableData[i].bestState==4){
                this.tableData[i].bestState="待收货"
              }
              if(this.tableData[i].bestState==5){
                this.tableData[i].bestState="待评价"
              }
              if(this.tableData[i].bestState==6){
                this.tableData[i].bestState="交易成功"
              }
              if(this.tableData[i].bestState==7){
                this.tableData[i].bestState="退款中"
              }
              if(this.tableData[i].bestState==8){
                this.tableData[i].bestState="待成团"
              }
            }
            // this.totalchangdu=resp.data.count
            // console.log(this.tableData)
            // this.totalchangdu=this.tableData.length
          })
        }
        if(tab.label=="待发货"){
          this.$axios.post(this.$host+'/groupmall/power/order/frontSelectOfList',JSON.stringify({page:0,limit:10,userId:this.id,bestState:3})).then((resp)=>{
            console.log(resp.data.data)
            this.tableData=resp.data.data
            for(var i=0;i<this.tableData.length;i++){
              if(this.tableData[i].bestState==1){
                this.tableData[i].bestState="待付款"
              }
              if(this.tableData[i].bestState==2){
                this.tableData[i].bestState="待核销"
              }
              if(this.tableData[i].bestState==3){
                this.tableData[i].bestState="待发货"
              }
              if(this.tableData[i].bestState==4){
                this.tableData[i].bestState="待收货"
              }
              if(this.tableData[i].bestState==5){
                this.tableData[i].bestState="待评价"
              }
              if(this.tableData[i].bestState==6){
                this.tableData[i].bestState="交易成功"
              }
              if(this.tableData[i].bestState==7){
                this.tableData[i].bestState="退款中"
              }
              if(this.tableData[i].bestState==8){
                this.tableData[i].bestState="待成团"
              }
            }
            // this.totalchangdu=resp.data.count
            // console.log(this.tableData)
            // this.totalchangdu=this.tableData.length
          })
        }
        if(tab.label=="待收货"){
          this.$axios.post(this.$host+'/groupmall/power/order/frontSelectOfList',JSON.stringify({page:0,limit:10,userId:this.id,bestState:4})).then((resp)=>{
            console.log(resp.data.data)
            this.tableData=resp.data.data
            for(var i=0;i<this.tableData.length;i++){
              if(this.tableData[i].bestState==1){
                this.tableData[i].bestState="待付款"
              }
              if(this.tableData[i].bestState==2){
                this.tableData[i].bestState="待核销"
              }
              if(this.tableData[i].bestState==3){
                this.tableData[i].bestState="待发货"
              }
              if(this.tableData[i].bestState==4){
                this.tableData[i].bestState="待收货"
              }
              if(this.tableData[i].bestState==5){
                this.tableData[i].bestState="待评价"
              }
              if(this.tableData[i].bestState==6){
                this.tableData[i].bestState="交易成功"
              }
              if(this.tableData[i].bestState==7){
                this.tableData[i].bestState="退款中"
              }
              if(this.tableData[i].bestState==8){
                this.tableData[i].bestState="待成团"
              }
            }
            // this.totalchangdu=resp.data.count
            // console.log(this.tableData)
            // this.totalchangdu=this.tableData.length
          })
        }
        if(tab.label=="待评价"){
          this.$axios.post(this.$host+'/groupmall/power/order/frontSelectOfList',JSON.stringify({page:0,limit:10,userId:this.id,bestState:5})).then((resp)=>{
            console.log(resp.data.data)
            this.tableData=resp.data.data
            // this.totalchangdu=resp.data.count
            // console.log(this.tableData)
            // this.totalchangdu=this.tableData.length
          })
        }
        if(tab.label=="交易成功"){
          this.$axios.post(this.$host+'/groupmall/power/order/frontSelectOfList',JSON.stringify({page:0,limit:10,userId:this.id,bestState:6})).then((resp)=>{
            console.log(resp.data.data)
            this.tableData=resp.data.data
            for(var i=0;i<this.tableData.length;i++){
              if(this.tableData[i].bestState==1){
                this.tableData[i].bestState="待付款"
              }
              if(this.tableData[i].bestState==2){
                this.tableData[i].bestState="待核销"
              }
              if(this.tableData[i].bestState==3){
                this.tableData[i].bestState="待发货"
              }
              if(this.tableData[i].bestState==4){
                this.tableData[i].bestState="待收货"
              }
              if(this.tableData[i].bestState==5){
                this.tableData[i].bestState="待评价"
              }
              if(this.tableData[i].bestState==6){
                this.tableData[i].bestState="交易成功"
              }
              if(this.tableData[i].bestState==7){
                this.tableData[i].bestState="退款中"
              }
              if(this.tableData[i].bestState==8){
                this.tableData[i].bestState="待成团"
              }
            }
            // this.totalchangdu=resp.data.count
            // console.log(this.tableData)
            // this.totalchangdu=this.tableData.length
          })
        }
        if(tab.label=="退款中"){
          this.$axios.post(this.$host+'/groupmall/power/order/frontSelectOfList',JSON.stringify({page:0,limit:10,userId:this.id,bestState:7})).then((resp)=>{
            console.log(resp.data.data)
            this.tableData=resp.data.data
            // this.totalchangdu=resp.data.count
            // console.log(this.tableData)
            // this.totalchangdu=this.tableData.length
          })
        }
        if(tab.label=="待成团"){
          this.$axios.post(this.$host+'/groupmall/power/order/frontSelectOfList',JSON.stringify({page:0,limit:10,userId:this.id,bestState:8})).then((resp)=>{
            console.log(resp.data.data)
            this.tableData=resp.data.data
            for(var i=0;i<this.tableData.length;i++){
              if(this.tableData[i].bestState==1){
                this.tableData[i].bestState="待付款"
              }
              if(this.tableData[i].bestState==2){
                this.tableData[i].bestState="待核销"
              }
              if(this.tableData[i].bestState==3){
                this.tableData[i].bestState="待发货"
              }
              if(this.tableData[i].bestState==4){
                this.tableData[i].bestState="待收货"
              }
              if(this.tableData[i].bestState==5){
                this.tableData[i].bestState="待评价"
              }
              if(this.tableData[i].bestState==6){
                this.tableData[i].bestState="交易成功"
              }
              if(this.tableData[i].bestState==7){
                this.tableData[i].bestState="退款中"
              }
              if(this.tableData[i].bestState==8){
                this.tableData[i].bestState="待成团"
              }
            }
            // this.totalchangdu=resp.data.count
            // console.log(this.tableData)
            // this.totalchangdu=this.tableData.length
          })
        }
        if(tab.label=="全部"){
          this.$axios.post(this.$host+'/groupmall/power/order/frontSelectOfList',JSON.stringify({page:0,limit:10,userId:this.id,bestState:null})).then((resp)=>{
            console.log(resp.data.data)
            this.tableData=resp.data.data
            for(var i=0;i<this.tableData.length;i++){
              if(this.tableData[i].bestState==1){
                this.tableData[i].bestState="待付款"
              }
              if(this.tableData[i].bestState==2){
                this.tableData[i].bestState="待核销"
              }
              if(this.tableData[i].bestState==3){
                this.tableData[i].bestState="待发货"
              }
              if(this.tableData[i].bestState==4){
                this.tableData[i].bestState="待收货"
              }
              if(this.tableData[i].bestState==5){
                this.tableData[i].bestState="待评价"
              }
              if(this.tableData[i].bestState==6){
                this.tableData[i].bestState="交易成功"
              }
              if(this.tableData[i].bestState==7){
                this.tableData[i].bestState="退款中"
              }
              if(this.tableData[i].bestState==8){
                this.tableData[i].bestState="待成团"
              }
            }
            // this.totalchangdu=resp.data.count
            // console.log(this.tableData)
            // this.totalchangdu=this.tableData.length
          })
        }
      },
      dingdanxiangqing(a){
        console.log(a.row)
        this.$router.push({path:"/personal/mydingdanxiangqing",query:{orderId:a.row.orderId}});

        // this.$router.push("/personal/mydingdanxiangqing")
      }
    },
    created(){
      this.id=sessionStorage.getItem("myUserId")
      console.log(this.id)
      this.$axios.post(this.$host+'/groupmall/power/order/frontSelectOfList',JSON.stringify({page:0,limit:10,userId:this.id,bestState:null})).then((resp)=>{
        console.log(resp.data.data)
        // this.totalchangdu=resp.data.count
        this.tableData=resp.data.data
        for(var i=0;i<this.tableData.length;i++){
          if(this.tableData[i].bestState==1){
            this.tableData[i].bestState="待付款"
          }
          if(this.tableData[i].bestState==2){
            this.tableData[i].bestState="待核销"
          }
          if(this.tableData[i].bestState==3){
            this.tableData[i].bestState="待发货"
          }
          if(this.tableData[i].bestState==4){
            this.tableData[i].bestState="待收货"
          }
          if(this.tableData[i].bestState==5){
            this.tableData[i].bestState="待评价"
          }
          if(this.tableData[i].bestState==6){
            this.tableData[i].bestState="交易成功"
          }
          if(this.tableData[i].bestState==7){
            this.tableData[i].bestState="退款中"
          }
          if(this.tableData[i].bestState==8){
            this.tableData[i].bestState="待成团"
          }
        }
        // console.log(this.tableData)
        // this.totalchangdu=this.tableData.length
      })

    }
  }
</script>

<style scoped>
</style>