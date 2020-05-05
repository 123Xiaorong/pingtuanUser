<template>
  <div class='nav'>
      <ul>
          <li v-if="thisPage==='1'?false:true" @click="toHome" style="padding-top:2px;"><span>商城首页</span><span></span></li>
          <li v-if="thisPage==='2'?false:true" @click="toHelp"><span>助力免单</span><span></span></li>
          <li v-if="thisPage==='3'?false:true" @click="toKill"><span>限时秒杀</span><span></span></li>
          <li v-if="thisPage==='4'?false:true" @click="toLucky"><span>幸运抽奖</span><span></span></li>
          <li v-if="thisPage==='5'?false:true" @click="toSpecial"><span>特卖促销</span><span></span></li>
          <li v-if="thisPage==='6'?false:true" @click="toGroup" style="padding-bottom:2px;"><span style="border-bottom:0">拼团活动</span><span></span></li>
      </ul>
  </div>
</template>

<script>
export default {
  components:{},
  props:{
      thisPage:"",
  },
  data(){
    return {
    }
  },
  methods:{
      toHome(){
          this.$router.push("/");
      },
      toHelp(){
          this.$router.push("/helpFree");
      },
      toKill(){
          this.$router.push("/timeSale");
      },
      toLucky(){
          this.$router.push("/luckDraw");
      },
      toSpecial(){
          this.$router.push("/specialSale");
      },
      toGroup(){
          this.$router.push("/groupSale");
      }
  }
}
</script>
<style scoped>
.nav{
    /* padding: 2px 0; */
    background-color: white;
    box-shadow: 0 0 1px #888888;
}
li{
    /* color: white; */
    /* margin: 5px 0; */
    padding: 0 12px;
    list-style: none;
    width: 24px;
    cursor: pointer;
    font-size: 12px;
    /* border: 1px solid black; */
    position: relative;
}
li:not(:last-of-type)::after{
    content: "";
    background: linear-gradient(270deg,white,#cccccc,#cccccc,white);
    width: 30px;
    height: 1px;
    position: absolute;
    bottom: 0;
    z-index: 103;
}
/* li:hover{
    background-color: red;
} */
li>span:nth-of-type(1){
    display: block;
    width: 100%;
    height: 100%;
    padding: 7px 1px;
    /* border-bottom:1px solid #c3c3c3;  */
    position: relative;
    z-index: 105;
}
li>span:nth-of-type(2){
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    width: 100%;
    height: 100%;
    /* padding: 5px 1px; */
    z-index: 104;
}
li:hover>span:nth-of-type(2){
    background-color: red;
}
li:hover>span:nth-of-type(1){
    color: white;
}
</style>