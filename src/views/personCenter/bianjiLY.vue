<template>
   <div>
       <el-radio-group v-model="labelPosition" size="small">
           <!--<el-radio-button label="left">左对齐</el-radio-button>-->
           <!--<el-radio-button label="right">右对齐</el-radio-button>-->
           <!--<el-radio-button label="top">顶部对齐</el-radio-button>-->
       </el-radio-group>
       <!--<div style="margin: 20px;"></div>-->
       <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" style="width: 50%">
           <el-form-item label="姓名">
               <el-input v-model="formLabelAlign.name"></el-input>
           </el-form-item>
           <el-form-item label="电话">
               <el-input v-model="formLabelAlign.region"></el-input>
           </el-form-item>
           <el-form-item label="地址">
               <el-input v-model="formLabelAlign.type"></el-input>
           </el-form-item>
           <el-form-item>
               <el-button type="primary" @click="onSubmit">立即修改</el-button>
               <el-button>取消</el-button>
           </el-form-item>
       </el-form>
   </div>
</template>

<script>
    // var ID;
  export default {
    name: "编辑LY",
    data(){
      return{
        myIndex:'',
        labelPosition: 'right',
        formLabelAlign: {
          name: '',
          region: '',
          type: ''
        }
      };
    },
    created(){
      this.$data.myIndex=this.$route.query.id;
      console.log(this.$data.myIndex)
      this.$axios.get(this.$host+"/groupmall/order/MyAddress/selectAddressById",{params:{addressId:this.$data.myIndex}})
        .then(response=>{
          console.log(response.data.addressName)
          console.log()
          this.formLabelAlign={
            name:response.data.addressName,
            region:response.data.addressTel,
            type:response.data.address,
            // ID:response.data.addressId,
          }
        })
    },
    methods:{
      onSubmit(){
        console.log("修改")
        console.log(this.formLabelAlign.name)
        console.log(this.formLabelAlign.region)
        console.log(this.formLabelAlign.type)
        console.log(this.$data.myIndex)
        this.$axios.post(this.$host+"/groupmall/order/MyAddress/update",  JSON.stringify({
            userId:sessionStorage.getItem("myUserId"),
            addressId:this.$data.myIndex,
            addressName:this.formLabelAlign.name,
            addressTel:this.formLabelAlign.region,
            address:this.formLabelAlign.type,


          }))
          .then(response=>{
            console.log(response.data)

          })
        this.$router.push({path:'/personal/myaddress'})
        this.$router.go(0)
      },
    }
  };
</script>

<style scoped>

</style>