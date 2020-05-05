<template>
  <div id="app">
    <div class="ProBorder">
      <router-link :to="{}">
        <div class="picbor">
          <!--<img src="../../../static/images/banana.jpg" alt="">-->
        </div>
      </router-link>
      <div class="Pdescr">
        <el-link target="_blank" :underline="false">【仅限深圳同城地区】新鲜水果上市 大香蕉  5斤/箱 枣香枣脆 等你抢购【商品名称】</el-link>
      </div>
      <div class="ProInfo">
        <div class="Time">还剩25天21时32分42秒</div>
        <div>
          <div class="chengtuan floatL">剩余11件</div>
          <div class="price floatL">￥75</div>
          <div class="Btn floatL">
            <el-button type="primary" style="width: 100%;">马上抢</el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "xianshimiaosha"
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
  .Time{
    font-size: 14px;
    text-align: left;
  }
</style>

