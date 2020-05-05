<template>
  <div class="specialSale">
    <Header />
    <div class="banner" style="width:100%;">
      <img style="width:100%" src="../../assets/baner5.jpg" />
    </div>
    <div class="specialTop">
      <p style="font-size:25px;text-align:center;padding:10px 0;">
        <span style="border-bottom:1px solid black;padding:0 20px;"
          >精品推荐</span
        >
      </p>
      <a href="#"><img src="./img/SS1.jpg" alt="" /></a>
      <a href="#">
        <img src="./img/SS2.jpg" alt="" />
        <img src="./img/SS3.jpg" alt="" />
      </a>
      <a href="#">
        <img src="./img/SS4.jpg" alt="" />
        <img src="./img/SS5.jpg" alt="" />
      </a>
      <a href="#">
        <img src="./img/SS6.jpg" alt="" />
        <img src="./img/SS7.jpg" alt="" />
      </a>
      <a href="#">
        <img src="./img/SS8.jpg" alt="" />
      </a>
    </div>
    <div class="specialSaleing">
      <p style="padding:5px 10px;font-size:25px;border-bottom:1px solid #cccccc;margin: 20px 0 10px">降价促销</p>
      <div class="specialProduct" v-for="items in goodsList" :key="items.key">
        <span style="display:none">{{items.pro_id}}</span>
        <img :src="items.pro_img" />
        <!--<p>【新品推广】WEWE 2019年新款毛领蓝色羽绒服</p>-->
         <p>{{items.pro_name}}</p>
        <!-- <p><span>￥899</span><span>￥1399</span><button @click="toDetail($event)">立即购买</button></p> -->
        <p><span>￥{{items.price}}</span><span>￥{{items.price*1.5}}</span><button class="buyButton" @click="toDetail($event)">立即购买</button></p>
      </div>
    </div>
    <weibu />
    <storeNav thisPage="5" class="storeNav"/>
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
    return {
      goodsList:[]
    };
  },
  created(){
    this.$axios({
      method:"post",
      url:this.$host+"/groupmall/power/mainList/getPage",
      headers:{
        "Content-Type":"application/x-wwww-form-urlendcoded",
      },
      params:{page:1,limit:3}
    }).then(response=>{console.log(response.data);this.$data.goodsList=response.data.data;}).catch(error=>{console.log(error)});
  },
  methods:{
    toDetail(event){
      // console.log(event.target.parentElement.parentElement.firstElementChild.innerText);
      sessionStorage.setItem("goodsId",event.target.parentElement.parentElement.firstElementChild.innerText)
      this.$router.push("/goodsDetail")
    }
  }
};
</script>
<style scoped>
.specialTop {
  width: 92%;
  margin: 0 auto;
  /* height: 300px; */
  /* background-color: red; */
  /* border: 1px solid #cccccc; */
  overflow: hidden;
}
.specialTop img {
  width: 100%;
  display: block;
}
.specialTop > a {
  float: left;
}
.specialTop > a:nth-of-type(1) {
  width: calc(100% / 3);
}
.specialTop > a:nth-of-type(2) {
  width: calc(100% / 6);
}
.specialTop > a:nth-of-type(3) {
  width: calc(100% / 6);
}
.specialTop > a:nth-of-type(4) {
  width: calc(100% / 6);
}
.specialTop > a:nth-of-type(5) {
  width: calc(100% / 6 - 0.9px);
}
.specialSaleing {
  width: 92%;
  margin: 30px auto 0;
}
.specialProduct{
  width: 270px;
  height: 330px;
  border: 1px solid #cccccc;
  margin: 10px calc((25% - 272px)/2);
  position: relative;
  float: left;
}
.specialProduct img{
  width: 100%;
}
.specialProduct>p:nth-of-type(1){
  position: absolute;
  top:230px;
  width: 100%;
  background-color: white;
  padding: 5px;
  box-sizing: border-box;
  min-height: 52px;
}
.specialProduct>p:nth-of-type(2){
  position: absolute;
  top:290px;
  padding-left: 10px;
  width: 100%;
  box-sizing: border-box;
}
.specialProduct>p:nth-of-type(2)>span:nth-of-type(1){
  font-size: 25px;
  color: red;
}
.specialProduct>p:nth-of-type(2)>span:nth-of-type(2){
  text-decoration: line-through;
  margin: 0 5px;
}
.specialProduct>p:nth-of-type(2)>button{
  position: absolute;
  /* margin-left: 30px; */
  background: linear-gradient(to right, rgb(255, 214, 50), rgb(251, 149, 21));
  outline: none;
  border: 0;
  color: white;
  padding: 5px 10px;
  cursor: pointer;
  /* position: relative;
  bottom: 5px; */
  bottom: 5px;
  right: 20px;
}
.storeNav{
  position: fixed;
  bottom: 50px;
  right: 30px;
}
</style>
