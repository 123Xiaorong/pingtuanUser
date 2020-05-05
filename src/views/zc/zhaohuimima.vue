<template>
    <div class="Pass" style="overflow: hidden">
      <el-form ref="Personinfo" :model="Personinfo" label-width="80px"
               style="width: 450px;position: relative;left: 50%;border: 1px solid #ddd;
               margin-top: 6%;text-align: center;background-color: white">
        <div style="font-size: 18px;color: rgb(96, 98, 102);margin-top: 15px">
          <span >找回密码</span>
        </div>
        <el-form-item label="手机号:"  label-width="100px" style="margin-top: 20px;">
          <el-input class="inputSize"
                    placeholder="请输入手机号"
                    size="small"
                    @blur="telBlur()"
                    v-model="Personinfo.phone"
                    clearable>
          </el-input>
        </el-form-item>
        <div style="color: #ff4001;font-size: 12px">{{tel}}</div>
        <el-form-item label="验证码:" style="margin-bottom: 35px" label-width="100px">
          <el-input class="inputSize" style="width: 42%;margin-right:2%;"
          placeholder="请输入验证码"
          size="small"
          v-model="Personinfo.yanzhengma"
          clearable>
          </el-input>
            <el-button type="warning" size="small" @click="getMyCode">获取验证码
            </el-button
            >
        </el-form-item>
        <div style="color: #ff4001;font-size: 12px">{{code1}}</div>
        <el-form-item label="新密码:"  label-width="100px" v-if="NewCode">
          <el-input class="inputSize"
                    placeholder="请输入新密码"
                    type="password"
                    size="small"
                    v-model="Personinfo.passowrd"
                    clearable>
          </el-input>
        </el-form-item>
        <el-form-item label="确认密码:"  label-width="100px" v-if="NewCode">
          <el-input class="inputSize"
                    placeholder="请确认密码"
                    size="small"
                    type="password"
                    @blur="passBlur"
                    v-model="Personinfo.confirm"
                    clearable>
          </el-input>
        </el-form-item>
        <div style="color: #ff4001;font-size: 12px">{{pas}}</div>
        <el-form-item style="margin-left: -50px">
          <el-button type="primary" @click="onSubmit" style="width: 70%;">提交</el-button>
        </el-form-item>
        <div style="margin-bottom: 15px;height: 20px">
          <el-link @click="toLogin()" target="_blank" id="zhuce1" class="zhuce1" style="color: #409Eff;float: right; margin-right: 40px;">已有密码</el-link>
        </div>
      </el-form>
    </div>
</template>

<script>
    export default {
        name: "zhaohuimima",
      data(){
        return{
          NewCode:false,
          tel:'',
          tt:'',
          // ttt:'',
          code1:'',
          pas:'',
          myState:'true',
          Personinfo:{
            username:'',
            passowrd:'',
            confirm:'',
            phone:'',
            yanzhengma:''
          },
        }
      },
      methods:{
        toLogin(){
          this.$router.push('/login')
        },
        telBlur(){
          this.$data.tel='';
          if(!(/^1[34578]\d{9}$/.test(this.$data.Personinfo.phone))){
            this.$data.tel="* 手机号输入错误";
            // this.$data.myState='true';
          }
        },
        passBlur(){
          this.$data.pas='';
          if(this.$data.Personinfo.passowrd!==this.$data.Personinfo.confirm){
            this.$data.pas="* 两次密码不一样"
          }
        },
        getMyCode(){
          if(this.$data.tel==''&&this.$data.Personinfo.phone!=''){
            // console.log("13223423")
            this.$axios({
              url:this.$host+"/groupmall/user/sendCodeForFindPwd",
              method:'post',
              headers:{"Content-Type":"application/x-www-form-urlendcoded"},
              access_token:this.token,
              params:{
                callNum:this.$data.Personinfo.phone,
              }
            }).then(resp=>{
              // console.log(resp.data);
              if(resp.data==1){
                setTimeout(()=>{
                  this.$alert("验证码发送成功，请注意查收！", "提示", {
                    confirmButtonText: "确定",
                    callback: action => {
                      this.$data.tt='11';
                      // this.$data.ttt='11';
                      // this.$data.NewCode=true;
                      }
                  });
                },0)
              }
            });
          }
          },
        onSubmit(){
            if(this.$data.tel==''&&this.$data.Personinfo.phone!=''
              &&this.$data.Personinfo.yanzhengma!=''&&this.$data.tt!=''){
                // console.log("提交");
              this.$axios({
                url:this.$host+"/groupmall/user/authFindPwdCode",
                method:'post',
                headers:{"Content-Type":"application/x-www-form-urlendcoded"},
                access_token:this.token,
                params:{
                  defAuthCode:this.$data.Personinfo.yanzhengma,
                }
              }).then(resp=>{
                // console.log(resp.data);//true
                if(resp.data==true){
                  this.$data.NewCode=true;
                  if(this.$data.pas==''&&this.$data.Personinfo.passowrd!=''&&this.$data.Personinfo.confirm!=''){
                    this.$axios({
                      url:this.$host+"/groupmall/user/userModefidPwd",
                      method:'post',
                      headers:{"Content-Type":"application/x-www-form-urlendcoded"},
                      access_token:this.token,
                      params:{
                        Pwd:this.$data.Personinfo.passowrd,
                      }
                    }).then(resp=>{
                      // console.log(resp.data);
                      if(resp.data==true){
                        // console.log("密码修改成功")
                        this.$alert("密码修改成功，前往登录页面！", "提示", {
                          confirmButtonText: "确定",
                          callback: action => {
                            this.$router.push("/login")
                          }
                        });
                      }
                    })
                  }
                }

              });
            }
        },
        // code1
        // onSubmit(){
        //     if(this.$data.tel==''&&this.$data.Personinfo.phone!=''&&this.$data.pas==''
        //       &&this.$data.Personinfo.passowrd!=''&&this.$data.Personinfo.confirm!=''
        //       &&this.$data.Personinfo.yanzhengma!=''&&this.$data.tt!=''){
        //         console.log("提交");
        //       this.$axios({
        //         url:"http://172.16.14.132:80/user/sendCodeForFindPwd",
        //         method:'post',
        //         headers:{"Content-Type":"application/x-www-form-urlendcoded"},
        //         access_token:this.token,
        //         params:{
        //           callNum:this.$data.Personinfo.phone,
        //           userPwd:this.$data.form.password,
        //           checkCode:this.$data.form.yanzhengma,
        //         }
        //       }).then(resp=>{
        //         console.log(resp.data);//true
        //
        //
        //       });
        //     }
        // },
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
  .Pass{
    width: 100%!important;
    height: 100%!important;
    /* style="background-image:url('../../assets/back1.jpg');background-size: cover" */
    background-image: url('../../assets/back11.jpg');
    background-size: cover;
  }
  .el-form-item{
    margin-bottom: 15px;
  }
  .inputSize{
    width: 70%;
  }
</style>
