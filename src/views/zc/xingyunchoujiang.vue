<template>
  <div id="app">
    <div class="ProBorder">
      <router-link :to="{}">
        <div class="picbor">
          <!--<img src="../../../static/images/banana.jpg" alt="">-->
        </div>
      </router-link>
      <div class="Pdescr">
        <el-link target="_blank" :underline="false">【仅限深圳同城地区】新鲜水果上市 大荔冬枣  5斤/箱 </el-link>
      </div>
      <div class="ProInfo">
        <div class="chengtuan floatL">5人成团</div>
        <div class="price floatL">￥1</div>
        <div class="Btn floatL">
          <el-button type="primary" style="width: 100%;">去抽奖</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "xingyunchoujiang",
    }
</script>

<style scoped>
  #app{
    color: #606266;
  }
  .floatL{
    float: left;
  }
  .ProBorder{
    width: 20%;
    height: 380px;
    /*border: 1px solid red;*/
    padding: 5px;
  }
  .picbor{
    width: 100%;
    height: 78%;
    /*border: 1px solid deepskyblue;*/
  }
  .picbor>img{
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .Pdescr{
    text-align: left;
  }
  .ProInfo{
    padding: 5px 0 0 0;
  }
  .chengtuan{
    width: 30%;
    padding: 10px 0;
  }
  .price{
    width: 30%;
    padding: 10px 0;
    color: red;
  }
  .Btn{
    width: 40%;
  }
</style>
