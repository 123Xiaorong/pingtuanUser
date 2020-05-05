<template>
  <div class="helpFree">
    <Header />
    <div class="banner" style="width:100%;">
      <img style="width:100%" src="../../assets/baner3.jpg" />
    </div>
    <div style="width: 92%;margin: 0 auto;overflow:hidden">
      <!-- <div class="banner" style="width:100%;padding:20px 0">
        <img style="width:100%" src="../../assets/baner2.jpg" />
      </div> -->
      <p style="text-align:center;font-size:25px;padding:5px 0;"><span style="border-bottom:1px solid black;padding:0 20px;">活动品牌</span></p>
      <div class="helpBrand">
        <a herf="#"><img src="./img/L1.png" alt=""/></a>
        <a herf="#"><img src="./img/L2.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L3.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L4.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L5.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L6.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L7.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L8.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L9.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L10.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L11.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L12.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L13.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L14.png" alt=""/></a>
        <a herf="#"><img src="./img/L15.jpg" alt=""/></a>
        <a herf="#"><img src="./img/L16.jpg" alt=""/></a>
      </div>
      <div style="margin:30px 0;height: 60px;border-bottom: 1px solid rgb(210, 210, 210);">
        <span class="helpTitle" style="float: left">助力推荐</span>
        <a class="helpTitle" style="float: right;color: #333;text-decoration: none" href="/personal/myzhuli">我的助力 ></a>
      </div>

      <div class="helpProduct">
        <a><img src="./img/HP1.png"/></a>
        <p>【季度精品】季候风 保暖潮流大衣 欧洲高端大牌时装</p>
        <p>
          <span>￥0</span>
          <span>￥669</span>
          <span>需20人助力</span>
          <button>发起助力</button>
        </p>
      </div>
      <div class="helpProduct">
        <a><img src="./img/HP1.png"/></a>
        <p>【季度精品】季候风 保暖潮流大衣 欧洲高端大牌时装</p>
        <p>
          <span>￥0</span>
          <span>￥669</span>
          <span>需20人助力</span>
          <button>发起助力</button>
        </p>
      </div>
      <div class="helpProduct">
        <a><img src="./img/HP1.png"/></a>
        <p>【季度精品】季候风 保暖潮流大衣 欧洲高端大牌时装</p>
        <p>
          <span>￥0</span>
          <span>￥669</span>
          <span>需20人助力</span>
          <button>发起助力</button>
        </p>
      </div>
      <div class="helpProduct">
        <a><img src="./img/HP1.png"/></a>
        <p>【季度精品】季候风 保暖潮流大衣 欧洲高端大牌时装</p>
        <p>
          <span>￥0</span>
          <span>￥669</span>
          <span>需20人助力</span>
          <button>发起助力</button>
        </p>
      </div>
      <div class="helpProduct">
        <a><img src="./img/HP1.png"/></a>
        <p>【季度精品】季候风 保暖潮流大衣 欧洲高端大牌时装</p>
        <p>
          <span>￥0</span>
          <span>￥669</span>
          <span>需20人助力</span>
          <button>发起助力</button>
        </p>
      </div>
    </div>
    <weibu />
     <storeNav thisPage="2" class="storeNav"/>
  </div>
</template>

<script>
import Header from "../../components/WebHeader/index";
import weibu from "../../components/weibu";
import storeNav from "../../views/xxb/nav"
export default {
  components: {
    Header: Header,
    weibu: weibu,
    storeNav:storeNav,
  },
  props: {},
  data() {
    return {};
  }
};
</script>
<style scoped>
.helpTitle {
  font-size: 20px;
  /* padding: 3px 0; */

  padding: 5px 10px;
  /*margin-bottom: 10px;*/
}
.helpBrand > a {
  display: inline-block;
  width: 110px;
  height: 40px;
  padding: 20px calc((100% / 8 - 118px) / 2);
  margin: 3px;
  border: 1px solid #cccccc;
  cursor: pointer;
}
/* .helpBrand>a:hover{
    border: 1px solid #999999;
} */
.helpBrand img {
  width: 100%;
  height: 100%;
}
.helpProduct {
  width: 270px;
  height: 340px;
  position: relative;
  float: left;
  margin: 10px calc((100% / 4 - 270px) / 2);
}
.helpProduct > a {
  display: inline-block;
  width: 100%;
  height: 100%;
  border: 1px solid #cccccc;
  box-sizing: border-box;
}
.helpProduct img {
  width: 100%;
  height: 100%;
}
.helpProduct p:nth-of-type(1) {
  position: absolute;
  left: 0;
  top: 230px;
  width: 100%;
  /* background-color: green; */
  /* text-align: center; */
  padding: 5px;
  box-sizing: border-box;
  /* border-bottom: 1px solid #cccccc; */
}
.helpProduct p:nth-of-type(2) {
  position: absolute;
  left: 0;
  top: 290px;
  width: 100%;
}
.helpProduct p:nth-of-type(2) > span:nth-of-type(1) {
  font-size: 30px;
  color: red;
}
.helpProduct p:nth-of-type(2) > span:nth-of-type(2) {
  text-decoration: line-through;
  margin: 0 5px;
  font-size:15px;
}
.helpProduct p:nth-of-type(2) > span:nth-of-type(3) {
  color: #cccccc;
  font-size:15px;
}
.helpProduct p:nth-of-type(2) > button {
  background: linear-gradient(to right, rgb(255, 214, 50), rgb(251, 149, 21));
  outline: none;
  border: 0;
  color: white;
  padding: 5px 10px;
  margin-left: 10px;
  cursor: pointer;
}
.storeNav{
  position: fixed;
  bottom: 50px;
  right: 30px;
}
</style>
