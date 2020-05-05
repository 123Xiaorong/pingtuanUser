<template>
  <div style="margin-top: 25px">
    <el-form style="width: 50%" :model="ruleForm"  ref="ruleForm" label-width="100px" class="demo-ruleForm">

      <el-form-item  prop="myImage">
        <img :src=ruleForm.myImage alt="" style="width: 80px;height: 80px">
        <!--<form action="" enctype="multipart/form-data" method="post">-->
          <!--<input class="file" name="file" type="file" accept="image/png,image/gif,image/jpeg" @change="update"/>-->
          <!--<em @click="mySub" style="background-color: orangered">提交图片</em>-->
        <!--</form>-->
        <form action='' method='post' enctype="multipart/form-data" id='form1'>
          <el-button type="info" size="mini" @click="clickButton">更换头像</el-button>
          <input type='file' name='proImg' id="proImg" @change="Img" style="width: 100%;display: none">
          <input type="text" name="userId" :value=userId style="display: none">
          <!--<button type='button' class='but'  @click="Img">更换头像</button>-->
        </form>


      </el-form-item>
      <el-form-item label="昵称:" prop="name">
        <el-input v-model="ruleForm.name" size="small" clearable ></el-input>
      </el-form-item>
      <el-form-item label="姓名:" prop="delivery">
        <el-input v-model="ruleForm.userName" size="small" clearable></el-input>
      </el-form-item>


      <el-form-item label="性别:" prop="sex">
        <el-select v-model="ruleForm.sex" size="small"
                   clearable placeholder="请选择性别"
                   style="width: 100%">
          <el-option
          v-for="item in sexArr"
          :key="item.sexId"
          :label="item.sexName"
          :value="item.sexId">
          </el-option>
        </el-select>
        <!--<el-input v-model="ruleForm.sex" size="small"></el-input>-->
      </el-form-item>

      <el-form-item label="手机:" prop="desc">
        <el-input v-model="ruleForm.tel" size="small" clearable></el-input>
      </el-form-item>

      <el-form-item label="密码:" prop="mima">
        <el-input v-model="ruleForm.mima" type="password" size="small" clearable></el-input>
      </el-form-item>


      <el-form-item>
        <el-button type="primary" @click="submitForm()">更改设置</el-button>
        <!--<router-link to="/mygengaiziliao" active-class="active">-->
        <!--<el-button type="primary" @click="submitForm()">更改设置</el-button>-->
        <!--</router-link>-->
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
  import $ from 'jquery'
export default {
  data () {
    return {
      // myDis:true,
      myImg:'',
      userId:'',
      sexArr:[{
        sexId:1,
        sexName:'男'
      },{
        sexId:2,
        sexName:'女'
      }],
      ruleForm: {
        // 昵称
        name: '',
        mima:'',
        sex: '',
        // 名字
        userName: '',
        tel: '',
        myImage:"",
        // myImage:"http://172.16.14.10:8080/GroupMall/static/upload/145e67e8-970a-49a4-a8dd-2d56f3abc050.png",
      },

    };
  },

  components: {},
created(){
  this.$data.ruleForm.myImage=sessionStorage.getItem("myUserImg")
  this.$axios({
    url:this.$host+"/groupmall/userDate/selectByUserId",
    method:'get',
    // headers:{"Content-Type":"application/x-www-form-urlencoded"},
    access_token:this.token,
    params:{
      userId:sessionStorage.getItem("myUserId")
    }
  }).then(resp=>{
  // console.log(resp.data.img);
  // console.log(typeof resp.data.userId);
    this.$data.userId=resp.data.userId;
  // console.log(resp.data.img.split("\\"))
  this.$data.ruleForm.name=resp.data.username;
  this.$data.ruleForm.userName=resp.data.name;
  this.$data.ruleForm.mima=resp.data.userPwd;
  this.$data.ruleForm.sex=resp.data.sex;
  this.$data.ruleForm.tel=resp.data.callNum;
  this.$data.ruleForm.myImage=(resp.data.img);
  // console.log(resp.data.img);
  // console.log(this.$host+"/groupmall/"+resp.data.img)
  // this.$data.ruleForm.myImage=(resp.data.img);
  //   console.log(resp.data.img)
  // this.$data.ruleForm.myImage=(resp.data.img);
  })
    .catch(error=>{
      console.log(error)
    })

},
  methods: {
    clickButton(){
      $("#proImg").click();
    },
    Img(){

      var data = new FormData($('#form1')[0]);
      // console.log(data);
      // $.post('up.php',{p:2},function(data){
      //    alert(data);
      //  })
      $.ajax({
        url: this.$host+"/groupmall/userDate/saveUserImg",
        type: 'POST',
        data: data,
        dataType: 'JSON',
        cache: false,
        processData: false,  //不处理发送的数据，因为data值是FormData对象，不需要对数据做处理
        contentType: false,  //不设置Content-type请求头
        success:data=> {
          console.log(data[0]);
          // console.log(this);
          // this.$data.ruleForm.myImage=(this.$host+"/GroupMall/"+data[0]);
          // this.$data.ruleForm.myImage=(this.$host+"/groupmall/"+data[0]);
          this.$data.ruleForm.myImage=(data[0]);
          // console.log(this.$data.ruleForm.myImage)
          sessionStorage.setItem("myUserImg",this.$data.ruleForm.myImage);
          // this.$router.go('/#/personal/myziliao')
          this.$router.go(0)
          // this.$set()
        }
      })
    },

    submitForm() {
      if(this.$data.ruleForm.sex==1){
        this.$data.ruleForm.sex="男"
      }else if(this.$data.ruleForm.sex==2){
        this.$data.ruleForm.sex="女"
      }
      // console.log(this.$data.ruleForm.name)
      // console.log(this.$data.ruleForm.userName)
      // console.log(this.$data.ruleForm.mima)
      // console.log(this.$data.ruleForm.sex)
      // console.log(this.$data.ruleForm.tel)
      this.$axios({
        url:this.$host+"/groupmall/userDate/modifyUserDate",
        method:'post',
        headers:{"Content-Type":"application/json"},
        access_token:this.token,
        data:JSON.stringify({
          userId:this.$data.userId,
          username:this.$data.ruleForm.name,
          name:this.$data.ruleForm.userName,
          userPwd:this.$data.ruleForm.mima,
          sex:this.$data.ruleForm.sex,
          callNum:this.$data.ruleForm.tel,
        })
      }).then(resp=>{
        this.$alert('修改成功', '温馨提示', {
          confirmButtonText: '确定',
          callback: action => {
            // this.$message({
            //   type: 'info',
            //   message: `action: ${ action }`
            // });
          }
        });
      }).catch(error=>{console.log(error)})
      // console.log(this.$data.myImg)
    },

  }

}
</script>

<style scoped>
  .upload {
    margin: 20px;
    font-size: 18px;
    color: #2ca6e0;
    display: flex;
    justify-content: space-between;

  }
  .up-img {
    color: #333;
  }
  .t_touxiang{
    width: 70px;
    height: 70px;
    border: 1px solid #ddd;
    border-radius: 50%;
    margin-left: 20px;
  }
</style>