<template>
    <div style="overflow: hidden" class="register">
      <div>
        <el-form ref="Personinfo" :model="Personinfo" label-width="80px"
                 style="width: 450px;position: relative;left: 50%;border: 1px solid #ddd;
               margin-top: 4%;text-align: center;background-color: white">
          <div style="font-size: 18px;color: rgb(96, 98, 102);margin-top: 15px">
            <span >用户注册</span>
          </div>
          <el-form-item label="用户名:" style="margin-top: 20px;" label-width="100px">
            <!--<el-input v-model="form.name"></el-input>-->
            <!--<div class="TitleB">账号名：</div>-->
            <el-input class="inputSize" @blur="userBlur()"
                      placeholder="请输入用户名"
                      size="small"
                      v-model="Personinfo.username"
                      clearable>
            </el-input>
          </el-form-item>
          <div style="color: #ff4001;font-size: 12px">{{tishi}}</div>
          <el-form-item label="密码:" label-width="100px">
            <!--<div class="TitleB">密码：</div>-->
            <el-input class="inputSize"
                      placeholder="请输入密码"
                      type="password"
                      size="small"
                      v-model="Personinfo.passowrd"
                      clearable>
            </el-input>
          </el-form-item>
          <el-form-item label="确认密码:" label-width="100px">
            <!--<div class="TitleB">确认密码：</div>-->
            <el-input class="inputSize"
                      placeholder="请确认密码" @blur="passBlur()"
                      v-model="Personinfo.confirm"
                      type="password"
                      size="small"
                      clearable>
            </el-input>
          </el-form-item>
          <div style="color: #ff4001;font-size: 12px">{{tishi2}}</div>
          <!--<el-form-item label="邮箱:" label-width="100px">-->
          <!--&lt;!&ndash;<div class="TitleB">邮箱：</div>&ndash;&gt;-->
          <!--<el-input class="inputSize"-->
          <!--placeholder="请输入邮箱"-->
          <!--v-model="Personinfo.email"-->
          <!--size="small"-->
          <!--clearable>-->
          <!--</el-input>-->
          <!--</el-form-item>-->
          <el-form-item label="手机号:" label-width="100px">
            <!--<div class="TitleB">手机：</div>-->
            <el-input class="inputSize"
                      placeholder="请输入手机号"
                      v-model="Personinfo.phone" @blur="telBlur()"
                      size="small"
                      clearable>
            </el-input>
          </el-form-item>
          <div style="color: #ff4001;font-size: 12px">{{tishi4}}</div>
          <el-form-item label="验证码:" label-width="100px">
            <!--<div class="TitleB">验证码：</div>-->
            <el-input style="width: 40%;margin-right: 20px"
                      placeholder="请输入验证码"
                      size="small"
                      v-model="Personinfo.yanzhengma"
                      clearable>
            </el-input>
            <el-button type="warning" size="small" @click="sendCode()">发送验证码</el-button>
          </el-form-item>
          <div style="color: #ff4001;font-size: 12px">{{tishi5}}</div>
          <div style="margin: 20px 0">
            <template>
              <el-checkbox v-model="checked">已阅读《拼少少商城服务相关协议》</el-checkbox>
            </template>
          </div>
          <div style="color: #ff4001;font-size: 12px">{{tishi3}}</div>
          <el-form-item style="margin-left: -50px">
            <el-button type="primary" @click="onSubmit" style="width: 70%;">注册</el-button>
            <!--<el-button>取消</el-button>-->
          </el-form-item>
          <div style="margin-bottom: 15px;height: 20px">
            <el-link @click="toLogin()" target="_blank" id="zhuce1" class="zhuce1" style="color: #409Eff;float: right; margin-right: 40px;">已有账号</el-link>
          </div>
        </el-form>
      </div>
    </div>
</template>



<script>
    export default {
        name: "register",
      data(){
          return{
            tishi:'',
            tishi2:'',
            tishi3:'',
            tishi4:'',
            tishi5:'',
            Personinfo:{
              username:'',
              passowrd:'',
              confirm:'',
              email:'',
              phone:'',
              yanzhengma:''
            },
            checked:false,
          }
      },
      created(){
        //   $(".register").css({
        //     // "height":$(window).screen.height
        //   })
        // console.log($(".register").offsetHeight)
        // console.log($(document.body).height())
        // console.log($(window.screen).height())
      },
      methods:{
        userBlur(){
          this.$data.tishi='';
          // console.log(this.$data.Personinfo.username);
          this.$axios({
            url:this.$host+"/groupmall/user/checkUserName",
            method:'post',
            headers:{"Content-Type":"application/x-www-form-urlendcoded"},
            access_token:this.token,
            params:{
              userName:this.$data.Personinfo.username,
            }
          }).then(resp=>{
            // console.log(resp.data);
            if(resp.data==false){
              this.$data.tishi="* 用户名已经存在"
            }

          });
        },
        passBlur(){
          this.$data.tishi2='';
          if(this.$data.Personinfo.passowrd!==this.$data.Personinfo.confirm){
            this.$data.tishi2="* 两次密码不一样"
          }
        },
        telBlur(){
          this.$data.tishi4='';
          if(!(/^1[34578]\d{9}$/.test(this.$data.Personinfo.phone))){
            this.$data.tishi4="* 手机号输入错误"
          }
        },
        toLogin(){
          this.$router.push('/login');
        },
        // 发送验证码
        sendCode(){
          this.$data.tishi5="";
          if(this.$data.tishi==""&&this.$data.tishi2==""&&this.$data.tishi4==""
          &&this.$data.Personinfo.username!=''&&this.$data.Personinfo.passowrd!=''
          &&this.$data.Personinfo.confirm!=''){

            this.$axios({
              url:this.$host+"/groupmall/user/sendCode",
              method:'post',
              headers:{"Content-Type":"application/x-www-form-urlendcoded"},
              access_token:this.token,
              params:{
                callNum:this.$data.Personinfo.phone,
                // userPwd:this.$data.form.password,
              }
            })
              .then(resp=>{
                console.log(resp.data);//true
                if(resp.data==1){
                    this.$alert("验证码发送成功，请注意查收！", "提示", {
                      confirmButtonText: "确定",
                      callback: action => {

                      }
                    });
                }
                else if(resp.data==-1){
                  //电话号码已经存在
                  this.$data.tishi4="* 电话号码已经存在"
                }

              });


            // this.$axios({
            //   url:"http://172.16.14.132:80/user/sendCode",
            //   method:'post',
            //   headers:{"Content-Type":"application/x-www-form-urlendcoded"},
            //   access_token:this.token,
            //   params:{
            //     callNum:this.$data.Personinfo.phone,
            //     // userPwd:this.$data.form.password,
            //   }
            // })
            //   .then(resp=>{
            //   console.log(resp.data);//true
            //   if(resp.data==true){
            //     this.$alert("验证码发送成功，请注意查收！", "提示", {
            //       confirmButtonText: "确定",
            //       callback: action => {
            //
            //       }
            //     });
            //   }
            //
            // });

          }else{
            this.$data.tishi5="* 请填写符合要求的数据";
          }
        },
        onSubmit(){
          this.$data.tishi3='';
          if(this.$data.tishi==""&&this.$data.tishi2==""&&this.$data.tishi4==""
            &&this.$data.Personinfo.username!=''&&this.$data.Personinfo.passowrd!=''
            &&this.$data.Personinfo.confirm!=''&&this.$data.Personinfo.phone!=''
          &&this.$data.Personinfo.yanzhengma!=''&&this.$data.Personinfo.yanzhengma!=''){
            if(this.$data.checked==true){
              this.$axios({
                url:this.$host+"/groupmall/user/register",
                method:'post',
                headers:{"Content-Type":"application/x-www-form-urlendcoded"},
                access_token:this.token,
                params:{
                  username:this.$data.Personinfo.username,
                  userPwd:this.$data.Personinfo.passowrd,
                  callNum:this.$data.Personinfo.phone,
                  checkCode:this.$data.Personinfo.yanzhengma,
                }
              }).then(resp=>{
                console.log(resp.data);
                //-1 验证码失败  0 添加失败
                if(resp.data=="1"){
                  this.$router.push("/login")
                }
                else if(resp.data=="-1"){
                  this.$data.tishi5="* 验证码验证失败";
                }
                else if(resp.data=="0"){
                  this.$alert("注册失败", "提示", {
                    confirmButtonText: "确定",
                    callback: action => {

                    }
                  });
                }


              });
            }else{
              this.$data.tishi3="* 请勾选协议"
            }
          }
          }
        }

    }
</script>

<style scoped>
  html{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  body{
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
  .register{
    width: 100%!important;
    height: 100%!important;
    /* style="background-image:url('../../assets/back1.jpg');background-size: cover" */
    background-image: url('../../assets/back11.jpg');
    background-size: cover;
  }
  /*body{*/
    /*!*background-image: url("../../assets/bann2.jpg");*!*/
    /*background-size: cover;*/
    /*!*background-color: orangered;*!*/
  /*}*/
  .el-form-item{
    margin-bottom: 15px;
  }
  .inputSize{
    width: 70%;
  }
</style>
