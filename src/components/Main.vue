<template>
    <div>
        <!--头部-->
        <app-head/>
        <!--轮播图-->
        <lunbo/>
        <!--活动导航-->
        <indexNavImg/>
        <!--两张图-->
        <div class="tutu" style="height: 300px;width: 90%;margin: 40px auto;">
            <div class="tutu2">
                <img src="../assets/tutu1.jpg" alt="">
            </div>
            <div class="tutu2">
                <img src="../assets/tutu2.jpg" alt="">
            </div>
        </div>
        <div class="newUp">
          <p class="mainTitle">品牌上新</p>
          <a href="/goodsDetail"><img src="../assets/HI1.jpg"></a>
          <a href="#"><img src="../assets/HI2.jpg"></a>
          <a href="#"><img src="../assets/HI3.jpg"></a>
          <a href="#"><img src="../assets/HI4.jpg"></a>
          <a href="#"><img src="../assets/HI5.png"></a>
        </div>
        <div class="brandBig">
          <p class="mainTitle">国际大牌</p>
          <a href="#" class="floatL" style="width:60%;box-sizing:border-box">
            <img style="height:650px;" src="../assets/BG1.jpg">
          </a>
          <div class="floatL" style="width:40%;box-sizing:border-box">
            <a href="#"><img src="../assets/SG1.jpg"></a>
            <a href="#"><img src="../assets/SG2.jpg"></a>
            <a href="#"><img src="../assets/SG3.jpg"></a>
            <a href="#"><img src="../assets/SG4.png"></a>
          </div>
        </div>
        <!--商品列表-->
        <!-- <div class="productList">
            <productList/>
        </div> -->
        <!--促销商品-->
        <!-- <div class="productJu">
            <productJu/>
        </div> -->
        <!--尾部-->
        <appweibu/>
    </div>
</template>

<script>
  import AppHead from "./WebHeader/index";
  import Appweibu from "./weibu";
  import lunbo from "../views/car/lunbo";
  import indexNavImg from "../views/xr/indexNavImg";
  // import productList from "../views/zc/productList";
  // import productJu from "../views/zc/productJu";

  export default {
    data() {
      return {};
    },

    components: {
      AppHead,
      Appweibu,
      lunbo,
      indexNavImg,
      // productList,
      // productJu,
    },

    methods: {}
  };
</script>

<style scoped>
.tutu2{
  float: left;
  width: 542px;
  height: 300px;
  margin: 0 calc((100% - 1084px)/4)
}
.newUp{
  width: 90%;
  margin: 0 auto 20px;
  overflow: hidden;
}
.mainTitle{
  font-size: 20px;
  padding: 5px;
  margin-bottom: 20px;
  border-bottom: 1px solid #cccccc;
}
.newUp>a{
  display: block;
  float: left;
  border: 0.5px solid #cccccc;
  width: calc(20% - 1px);
}
.newUp>a>img{
  width: 100%;
  display: block;
}
.floatL{
  float: left;
}
.brandBig{
  width: 90%;
  margin: 0 auto;
  overflow: hidden;
  /* border: 1px solid #cccccc; */
}
.brandBig img{
  display: block;
  width: 100%;
  height: 100%;
  border:0.5px solid #cccccc;
}
.floatL>a{
  float: left;
  width: 50%;
  height: 325px;
}
</style>
