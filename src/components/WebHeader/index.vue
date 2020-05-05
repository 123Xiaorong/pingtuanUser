<template>
  <div class="m-header f-pr">
    <div class="m-nav f-cb f-pr">
      <div class="m-logo f-fl">
        <router-link to="/">
        <!--<img src="../../assets/hello1.png" alt=""> -->
        <!--<img src="../../assets/modules.png" alt="">-->
          <a href="#"></a>
        </router-link>
          
      </div>
      <div class="m-search f-fl">
        <div>
          <div class="inputwrap">
            <form class="f-pr" action="#">
              <input type="text" class="searchbox" autocomplete="off" placeholder="汇源果汁" />
            </form>
          </div>
          <div class="wrap"></div>
        </div>
      </div>
      <!--<div class="m-shopcar f-fl f-pr">-->
        <!--<a href="#">-->
          <!--<span class="s-flag num f-pa j-cartnum">0</span>-->
        <!--</a>-->
      <!--</div>-->
        <router-link to="/login">
      <div class="m-login f-fl" style="float: right;" v-if="visName1">
          <span style="color: #ff4001">{{loginName}}</span>
      </div>
        </router-link>
      <div class="m-user f-fl" v-if="visName" style="float: right;">
        <div class="m-select f-pr" style="margin-top: -14px;margin-left: 20px">
          <router-link to="/personal/myziliao">
            <img
              class="avatar"
              :src=myImgOne
              alt
            />
          </router-link>

          <ul>
            <router-link to="/personal/mydingdan" tag="li">
              <a class="f-pr s-fc0" href="#">
                <em class="el-icon-s-order"></em>
                我的订单
                <span class="f-pa"></span>
              </a>
            </router-link>

            <router-link to="/personal/myyouhui" tag="li">
              <a class="f-pr s-fc0" href="#">
                <em class="el-icon-lollipop"></em>
                我的优惠券
                <span class="f-pa"></span>
              </a>
            </router-link>
            <router-link to="/personal/myaddress" tag="li">
              <a class="f-pr s-fc0" href="#">
                <em class="el-icon-edit-outline"></em>
                我的收货地址
                <span class="f-pa"></span>
              </a>
            </router-link>
            <li class="bort" @click="Exit()">
              <a class="f-pr s-fc0" href="#">
                <em class="el-icon-switch-button"></em>
                退出
                <span class="f-pa"></span>
              </a>
            </li>
          </ul>
          <i class="arr"></i>
        </div>
      </div>
    </div>
    <!--<div class="borderLine"></div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      // visName1:false,
      // visName:true,
      myImgOne:'http://p4.music.126.net/E52L-K724fkDU5Zdq2kobQ==/109951164228898470.jpg?param=36y36',
      visName1:true,//请登录
      visName:false,

      // visName1:true,
      // visName:false,
      loginName:'请登录'
    };
  },

  components: {},

  methods: {
    // 点击退出
    Exit(){
      sessionStorage.setItem("myUserId",'');
      sessionStorage.setItem("myUserName",'');
      sessionStorage.setItem("myUserImg",'');
      this.$data.visName1=true;//显示请登录
      this.$data.visName=false;
      this.$router.push("/");
    }

  },
  created(){
    this.$data.myImgOne=sessionStorage.getItem("myUserImg");
    // console.log("132")
    // console.log(sessionStorage.getItem("myUserName")=='')
    // console.log(sessionStorage.getItem("myUserName")==null)
    if(sessionStorage.getItem("myUserName")==null||sessionStorage.getItem("myUserName")==''){
      this.$data.visName1=true;//显示请登录
      this.$data.visName=false;
    }else{
      this.$data.visName1=false;//隐藏请登录
      this.$data.visName=true;
    }
    // if(sessionStorage.getItem("myUserName")!==null){
    //   this.$data.visName1=false;//隐藏请登录
    //   this.$data.visName=true;
    // }else{
    //   this.$data.visName1=true;//显示请登录
    //   this.$data.visName=false;
    // }
  }
};
</script>

<style scoped>
.borderLine {
  border-bottom: 0.5px #d2d2d2 solid;
}
input {
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  text-align: start;
  outline: none;
}
.f-pr {
  position: relative;
  zoom: 1;
}
.m-header .m-nav {
  /*width: 1100px;*/
  width: 90%;
  margin: 0 auto;
}
.m-logo {
  width: 290px;
  height: 70px;
  font-size: 0;
}
.border {
  bottom: 0;
  width: 100%;
  height: 1px;
  background: gray;
}
.f-fl {
  float: left;
}
.m-header .m-logo a {
  display: inline-block;
  width: 290px;
  height: 70px;
  /*margin-top: -35px;*/
  /*margin-left: -120px;*/
  /*!* background-position: 0px -48px; *!*/
   text-decoration: none;
  background: url('../../assets/modules.png') no-repeat 0 -48px;

}
.m-search {
  width: 300px;
  height: 70px;
  margin-left: 334px;
}
.inputwrap {
  width: 300px;
  height: 69px;
  padding-top: 1px;
}
.inputwrap form {
  width: 100%;
  height: 38px;
  margin-top: 15px;
  background: url("../../assets/modules.png") 0px -0px;
}
.inputwrap input {
  width: 80%;
  margin: 10px 0 0 34px;
  border: 0;
  background: transparent;
}
.m-login {
  margin-top: 23px;
  margin-left: 5px;
}
.m-header .wrap {
  position: absolute;
  z-index: 999;
  top: 56px;
  width: 300px;
  height: auto;
  background-color: #fff;
  box-shadow: 0 4px 7px #555;
  text-shadow: 0 1px rgba(255, 255, 255, 0.9);
}
.m-shopcar {
  width: 36px;
  height: 36px;
  margin: 17px 0 0 41px;
}
.m-shopcar a {
  display: inline-block;
  width: 36px;
  height: 36px;
  cursor: pointer;
  text-decoration: none;
  background: url("../../assets/modules.png") no-repeat -110px -158px;
}
.m-header .num {
  top: -8px;
  left: 26px;
  width: 18px;
  height: 18px;
  line-height: 18px;
  text-align: center;
  color: #fff;
  background: url("../../assets/modules.png") no-repeat -156px -158px;
}
.f-pa {
  position: absolute;
}
.m-header .m-user {
  width: 62px;
  height: 36px;
  margin: 37px 0 0 111px;
}
.m-header .m-select {
  z-index: 99;
  width: 62px;
  height: 36px;
}
.m-select .avatar {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #555;
}
.m-select ul {
  position: absolute;
  z-index: 100;
  top: 54px;
  left: -61px;
  width: 160px;
  height: auto;
  box-shadow: 0 4px 7px #555;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);
  opacity: 0;
}

.m-select ul li {
  padding-left: 24px;
  font-size: 12px;
  color: #333;
  background-color: #fff;
  list-style: none;
}
.s-fc0 {
  color: #000;
}
.m-select li a {
  display: block;
  width: 134px;
  padding-left: 1px;
  height: 40px;
  line-height: 40px;
  text-decoration: none;
}
.m-select li a .f-pa {
  top: 0;
  right: 0;
  bottom: 0;
  left: -24px;
}
.m-select .bort {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.m-select .arr {
  position: absolute;
  top: 36px;
  left: -61px;
  z-index: 100;
  width: 160px;
  height: 18px;
  background: url("../../assets/modules.png") 0 -128px;
  opacity: 0;
}
.m-select:hover ul {
  cursor: pointer;
  opacity: 1;
}
.m-select:hover .arr {
  cursor: pointer;
  opacity: 1;
}
.f-cb::after {
  clear: both;
  content: ".";
  display: block;
  height: 0;
  visibility: hidden;
}
.m-select ul li:hover {
  background-color: gainsboro;
}
</style>