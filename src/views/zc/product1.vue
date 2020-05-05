<template>
  <div id="app">
    <div class="ProBorder">
      <router-link :to="{}">
        <div class="picbor">
          <!--<img src="../../assets/banana.jpg" alt="" />-->
        </div>
      </router-link>
      <div class="Pdescr">
        <el-link target="_blank" :underline="false" style="font-size:15px;color:black;font-weight:bolder"
          >【新品上市】新鲜大香蕉</el-link
        >
      </div>
      <p style="font-size:12px;">
          温馨提示:至少2-4人可成团,可参团
        </p>
      <div class="ProInfo">
        <!-- <div class="chengtuan floatL">2-4人成团</div>
        <div class="price floatL">￥75</div>
        <div class="Btn floatL">
          <el-button type="primary" size='mini'>去开团</el-button>
        </div> -->
        <span style="font-size:25px;color:red">￥75</span>/斤
        <!-- <span>2-4人成团</span> -->
        <!-- <span>去开团</span> -->
        <div style="position:absolute;right:0;top:5px">
          <el-button
            type="primary"
            size="mini"
            style="padding:7px 10px"
            >去开团</el-button
          >
          <el-button
            type="primary"
            size="mini"
            style="padding:7px 10px"
            >去参团</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product1"
};
</script>

<style scoped>
#app {
  color: #606266;
}
.floatL {
  float: left;
}
.ProBorder {
  width: 20%;
  /* height: 380px; */
  /*border: 1px solid red;*/
  padding: 5px;
}
.picbor {
  width: 100%;
  height: 78%;
  /*border: 1px solid deepskyblue;*/
}
.picbor > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.Pdescr {
  text-align: left;
}
.ProInfo {
  /* padding: 5px 0 0 0; */
  /* height: 30px; */
  /* line-height: 30px; */
  position: relative;
  margin-top: 10px;
}
.chengtuan {
  width: 35%;
  padding: 10px 0;
}
.price {
  width: 30%;
  padding: 10px 0;
  color: red;
}
.Btn {
  width: 35%;
}
</style>
