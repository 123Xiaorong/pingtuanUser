<template>
  <div style="margin-top: 25px">
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="未使用" name="first">
        <weishiong></weishiong>
      </el-tab-pane>
      <el-tab-pane label="已使用" name="second">
        <yishiyong></yishiyong>
      </el-tab-pane>
      <el-tab-pane label="已过期" name="third">
        <overdue></overdue>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import weishiong from './youhuijuan/weishiong'
  import yishiyong from './youhuijuan/yishiyong'
  import overdue from './youhuijuan/overdue'
  export default {
    name: "Addend",
    data(){
      return {
        activeName: 'first'

      };
    },
    components:{
      yishiyong:yishiyong,
      weishiong:weishiong,
      overdue:overdue,
    },
    methods: {


    }
  }
</script>

<style scoped>
  .t_liebiao{
    /*border: 1px solid rebeccapurple;*/
    font-size: 18px;
    margin:20px 0 0 30px;
  }
  .t_guanli{
    /*border: 1px solid red;*/
    font-size: 16px;
    margin:15px 0 0 30px;
  }
</style>