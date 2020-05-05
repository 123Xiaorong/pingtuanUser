<template>
    <div style="margin-top: 25px">
        <el-form style="width: 50%" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

            <el-form-item label="头像" prop="">
                <div  class="t_touxiang">

                </div>
            </el-form-item>

            <el-form-item label="昵称" prop="name">
                <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="mima">
                <el-input v-model="ruleForm.mima"></el-input>
            </el-form-item>

            <el-form-item label="性别" prop="region">
                <el-input v-model="ruleForm.region"></el-input>
            </el-form-item>

            <el-form-item label="姓名" prop="delivery">
                <el-input v-model="ruleForm.delivery"></el-input>
            </el-form-item>

            <el-form-item label="手机" prop="desc">
                <el-input v-model="ruleForm.desc"></el-input>
            </el-form-item>
            <el-form-item>
                <router-link to="/mygengaiziliao" active-class="active">
                    <el-button type="primary" @click="submitForm('ruleForm')">更改设置</el-button>
                </router-link>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        ruleForm: {
          name: '',
          mima:'',
          region: '',
          delivery: '',
          desc: ''
        },
        rules: {
          name: [
            { required: true, message: '请输入昵称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          mima: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10个字符', trigger: 'blur' }
          ],
          region: [
            { required: true, message: '请输入姓别', trigger: 'blur' },
          ],
          delivery: [
            { required: true, message: '请输入姓名', trigger: 'blur' },
            { min:2, max:5, message: '长度在 2 到 5个字符', trigger: 'blur' }
          ],

          desc: [
            { required: true, message: '请输入手机号', trigger: 'blur' },
            { min:11, max:11, message: '请输入11位号码', trigger: 'blur' }
          ],
        }
      };

    },

    components: {},

    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }

  }
</script>

<style scoped>
    .t_touxiang{
        width: 100px;
        height: 100px;
        border: 1px solid red;
        border-radius: 50%;

    }
</style>