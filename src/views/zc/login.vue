<template>
    <div class="loginBg">
        <div style="overflow: hidden">
            <div
                    style="width: 400px;position: relative;left: 50%;margin-top:8%;outline: 1px solid #d2d2d2;background-color: white"
            >
                <div
                        style="text-align: center;font-size: 18px;padding-top: 15px;color: #606266;margin-bottom: 10px;
            "
                >
                    欢迎登录拼少少商城
                </div>
                <el-tabs
                        v-model="activeName"
                        @tab-click="handleClick"
                        style="width: 400px"
                        stretch="stretch"
                >
                    <el-tab-pane label="用户名登录" name="first">
                        <div class="formBor">
                            <el-form ref="form" :model="form" label-width="100px">
                                <el-form-item label="用户名:" style="margin-top: 10px">
                                    <el-input
                                            v-model="form.username"
                                            class="inputSize"
                                            size="small"
                                            placeholder="请输入用户名"
                                            clearable
                                    ></el-input>
                                </el-form-item>
                                <el-form-item label="密码:">
                                    <el-input
                                            v-model="form.password"
                                            class="inputSize password"
                                            size="small"
                                            type="password"
                                            placeholder="请输入密码"
                                            clearable
                                    ></el-input>
                                </el-form-item>
                                <el-form-item label="验证码:">
                                    <div class="code">
                                        <!--<el-input v-model="form.yanzhengma" style="width: 50%" class="input-val" size="small" placeholder="请输入验证码" ></el-input>-->
                                        <input
                                                type="text"
                                                value=""
                                                placeholder="请输入验证码"
                                                class="input-val"
                                                id="myInputOne"
                                                style="width: 43%;margin-right:2%;border-radius: 4px;outline: 0;padding: 0 15px;color: #606266"
                                        />
                                        <canvas id="canvas" width="100" height="30"></canvas>
                                        <!--<button class="btn">提交</button>-->
                                    </div>
                                </el-form-item>
                                <div style="color: #ff4001;font-size: 12px">{{yanzheng}}</div>
                                <el-link
                                        @click="zhaohui"
                                        target="_blank"
                                        id="zhaohuimima"
                                        style="color: #409Eff"
                                >忘记密码？
                                </el-link
                                >
                                <el-link
                                        @click="zhuce"
                                        target="_blank"
                                        id="zhuce"
                                        style="color: #409Eff"
                                >免费注册
                                </el-link
                                >
                                <div style="clear: both;">
                                    <el-button
                                            type="danger"
                                            @click="onSubmitUser"
                                            id="login"
                                            style=""
                                    >登录
                                    </el-button
                                    >
                                </div>
                            </el-form>
                        </div>
                    </el-tab-pane>

                    <el-tab-pane label="手机号登录" name="second">
                        <div class="formBor" style="height: 270px">
                            <el-form ref="form" :model="form" label-width="100px">
                                <el-form-item label="手机号:" style="margin:40px 0">
                                    <!--<input type="text" name="phone" id="phone" value="" placeholder="请输入手机号" maxlength="11" />-->
                                    <el-input
                                            v-model="form.tel"
                                            class="inputSize"
                                            size="small"
                                            placeholder="请输入手机号"
                                            clearable
                                            @blur="telCheck()"
                                    ></el-input>
                                </el-form-item>
                                <div style="color: #ff4001;font-size: 12px">{{myTel}}</div>
                                <el-form-item label="验证码:" style="margin-bottom: 35px">
                                    <div>
                                        <!--<el-input v-model="form.yanzhengma" style="width: 50%" class="input-val" size="small" placeholder="请输入验证码" ></el-input>-->
                                        <!--<button class="btn">提交</button>-->
                                        <input
                                                type=""
                                                name="verCode"
                                                id="verCode"
                                                value=""
                                                placeholder="请输入验证码"
                                                style="width: 46%;margin-right:4%;outline:0;border-radius: 4px;outline: 0;padding: 0 15px;
                          height: 32px;border: 1px solid #ddd;box-sizing: border-box;color: #606266"
                                        />
                                        <!--<input type="button" name="" id="verCodeBtn" value="获取验证码" @click="settime(this);"/>-->
                                        <el-button type="warning" size="small" @click="myYanzheng()"
                                        >获取验证码
                                        </el-button
                                        >
                                    </div>
                                </el-form-item>
                                <!--<div style="color: #ff4001;font-size: 12px">{{myTTT}}</div>-->
                                <!--<el-link @click="zhaohui" target="_blank" id="zhaohuimima1" class="zhaohuimima" style="color: #409Eff">忘记密码？</el-link>-->
                                <el-link
                                        @click="zhuce"
                                        target="_blank"
                                        id="zhuce1"
                                        class="zhuce1"
                                        style="color: #409Eff"
                                >免费注册
                                </el-link>
                                <div style="clear: both;margin-bottom: -30px">
                                    <el-button
                                            type="danger"
                                            @click="onSubmitTel"
                                            id="login1"
                                            style=""
                                    >登录
                                    </el-button
                                    >
                                </div>
                                <!--</el-form-item>-->
                                <!--<div style="color: #ff4001;font-size: 12px">{{tishi}}</div>-->
                                <!--<el-link @click="zhaohui" target="_blank" id="zhaohuimima1" class="zhaohuimima" style="color: #409Eff">忘记密码？</el-link>-->
                                <!--<el-link @click="zhuce" target="_blank" id="zhuce1" class="zhuce1" style="color: #409Eff">免费注册</el-link>-->
                                <!--<div style="clear: both;">-->
                                <!--<el-button type="danger" @click="onSubmitTel" id="login1" style="">登录</el-button>-->
                                <!--</div>-->
                            </el-form>
                        </div>
                    </el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>

<script>
  import $ from "jquery";
  export default {
    name: "login",
    data() {
      return {
        yanzheng:'',
        tt:'',
        myTTT:'',
        myTel:'',
        activeName: "first",
        show_num: [],
        form: {
          username: "",
          password: "",
          tel: ""
        }
      };
    },
    created() {
      var that = this;
      $(function() {
        that.$data.show_num = ["2", "2", "t", "u"];

        draw(that.$data.show_num);
        $("#canvas").on("click", function() {
          draw(that.$data.show_num);
        });
        // $(".btn").on('click',function(){
        // })
      });
      //生成并渲染出验证码图形
      function draw(show_num) {
        // console.log(show_num)
        var canvas_width = $("#canvas").width();
        var canvas_height = $("#canvas").height();
        var canvas = document.getElementById("canvas");//获取到canvas的对象，演员
        var context = canvas.getContext("2d");//获取到canvas画图的环境，演员表演的舞台
        canvas.width = canvas_width;
        canvas.height = canvas_height;
        var sCode = "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
        var aCode = sCode.split(",");
        var aLength = aCode.length;//获取到数组的长度
        for (var i = 0; i < 4; i++) { //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
          var j = Math.floor(Math.random() * aLength);//获取到随机的索引值
          // var deg = Math.random() * 30 * Math.PI / 180;//产生0~30之间的随机弧度
          var deg = Math.random() - 0.5; //产生一个随机弧度
          var txt = aCode[j];//得到随机的一个内容
          show_num[i] = txt.toLowerCase();
          var x = 10 + i * 20;//文字在canvas上的x坐标
          var y = 20 + Math.random() * 8;//文字在canvas上的y坐标
          context.font = "bold 23px 微软雅黑";
          context.translate(x, y);
          context.rotate(deg);
          context.fillStyle = randomColor();
          context.fillText(txt, 0, 0);
          context.rotate(-deg);
          context.translate(-x, -y);
        }
        for (var i = 0; i <= 5; i++) { //验证码上显示线条
          context.strokeStyle = randomColor();
          context.beginPath();
          context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
          context.lineTo(Math.random() * canvas_width, Math.random() * canvas_height);
          context.stroke();
        }
        for (var i = 0; i <= 30; i++) { //验证码上显示小点
          context.strokeStyle = randomColor();
          context.beginPath();
          var x = Math.random() * canvas_width;
          var y = Math.random() * canvas_height;
          context.moveTo(x, y);
          context.lineTo(x + 1, y + 1);
          context.stroke();
        }
      }
      //得到随机的颜色值
      function randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + "," + g + "," + b + ")";
      }
    },
    methods: {
      // 用户名和密码登录
      onSubmitUser() {
        // 验证码的信息
        var val = $(".input-val").val().toLowerCase();
        var num = this.$data.show_num.join("");
        this.$data.yanzheng='';
        if (val == "") {
          // console.log("请输入验证码");
          this.$data.yanzheng='* 请输入验证码';
        } else if (val == num) {
          this.$axios({
            url: this.$host+"/groupmall/user/login",
            method: "post",
            headers: { "Content-Type": "application/x-www-form-urlendcoded" },
            access_token: this.token,
            params: {
              username: this.$data.form.username,
              userPwd: this.$data.form.password
            }
          }).then(resp => {
            // console.log(resp.data);
            if (resp.data == null) {
              this.$alert("登录失败", "提示", {
                confirmButtonText: "确定",
                callback: action => {

                }
              });
            } else {
              // console.log(resp.data);
              // console.log(resp.data[0]);
              // console.log(resp.data[2]);
              this.$router.push("/");
              sessionStorage.setItem("myUserId", resp.data[0]);
              sessionStorage.setItem("myUserName",this.$data.form.username);
              sessionStorage.setItem("myUserImg",resp.data[2]);
            }
          });
        }
        else {
          // console.log("验证码错误！请重新输入！");
          this.$data.yanzheng='* 验证码错误！请重新输入！';
          // $(".input-val").val('');
          // draw(show_num);
          // this.$data.tishi="验证码错误！请重新输入!"

        }
        // 其他信息

      },
      // 手机验证码登录
      telCheck(){
        // console.log(111)
        this.$data.myTel='';
        if(!(/^1[34578]\d{9}$/.test(this.$data.form.tel))){
          this.$data.myTel="* 手机号输入错误";
          // this.$data.myState='true';
        }
      },
      myYanzheng(){
        if(this.$data.myTel==''&&this.$data.form.tel!=''){
          // console.log(11111)
          this.$axios({
            url:this.$host+"/groupmall/user/sendCodeForFindPwd",
            method:'post',
            headers:{"Content-Type":"application/x-www-form-urlendcoded"},
            access_token:this.token,
            params:{
              callNum:this.$data.form.tel,
            }
          }).then(resp=>{
            console.log(resp.data);
            if(resp.data==1){
              setTimeout(()=>{
                this.$alert("验证码发送成功，请注意查收！", "提示", {
                  confirmButtonText: "确定",
                  callback: action => {
                    this.$data.myTTT='11'
                  }
                });
              },0)
            }else if(resp.data==-1){
              this.$data.myTel="* 手机号未注册";
            }
          })


        }
      },
      // 电话号码登录
      onSubmitTel() {
        // console.log(this.$data.form.tel);
        console.log($("#verCode").val()!='');
        console.log((this.$data.form.tel!=''&&this.$data.myTTT!=''&&($("#verCode").val())!='')==true)
        if(this.$data.form.tel!=''&&this.$data.myTTT!=''&&($("#verCode").val())!=''){
        // console.log("提交1")
  this.$axios({
    url:this.$host+"/groupmall/user/loginOfCallNum",
    method:'post',
    headers:{"Content-Type":"application/x-www-form-urlendcoded"},
    access_token:this.token,
    params:{
      CallLoginCode:$("#verCode").val(),
    }
  }).then(resp=>{
    console.log(resp.data);
    if(resp.data==''){
      // console.log("null");
      this.$alert("登录失败！", "提示", {
        confirmButtonText: "确定",
        callback: action => {

        }
      });
    }else{
      // sessionStorage.setItem("myUserId", resp.data[0]);
      // sessionStorage.setItem("myUserName",resp.data[1]);
      this.$router.push("/")
      sessionStorage.setItem("myUserId", resp.data[0]);
      sessionStorage.setItem("myUserName",resp.data[1]);
      sessionStorage.setItem("myUserImg",resp.data[2]);
    }
  })
}

      },

      // 点击注册
      zhuce() {
        this.$router.push("/register");
      },
      // 点击找回密码
      zhaohui() {
        this.$router.push("/zhaohuimima");
      },
      // 点击切换
      handleClick(tab, event) {
        // console.log(tab, event);
      }
    }

  };
</script>

<style scoped>
    html {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    body {
        width: 100%;
        height: 100%;
        padding: 0;
        margin: 0;
    }

    input:-ms-input-placeholder {
        color: #bfbfbf;
    }

    input::-webkit-input-placeholder {
        color: #bfbfbf;
    }

    .input-val {
        width: 200px;
        height: 32px;
        border: 1px solid #ddd;
        box-sizing: border-box;
    }

    #canvas {
        vertical-align: middle;
        box-sizing: border-box;
        border: 1px solid #ddd;
        cursor: pointer;
    }

    .formBor {
        width: 400px;
        height: 300px;
        text-align: center;
    }

    .inputSize {
        width: 80%;
    }

    #zhaohuimima {
        float: left;
        margin-left: 40px;
    }

    #zhuce {
        float: right;
        margin-right: 40px;
    }

    .zhuce1 {
        float: right;
        margin-right: 40px;
    }

    #login {
        width: 70%;
        margin-top: 30px;
    }

    #login1 {
        width: 70%;
        margin-top: 30px;
    }

    .loginBg {
        width: 100% !important;
        height: 100% !important;
        /* style="background-image:url('../../assets/back1.jpg');background-size: cover" */
        background-image: url('../../assets/back1.jpg');
        background-size: cover;
    }
</style>
