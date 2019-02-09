<template>
  <div class="contarint">
    <div class="loginForm">
      <div class="loginTitle"/>
      <el-form :model="ruleForm" status-icon :rules="rules2" ref="ruleForm2" label-width="80px" class="demo-ruleForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model.number="ruleForm.username" class="lginput"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="region">
          <el-input v-model="ruleForm.validateCode" autocomplete="off":style="{float:'left',width:'200px'}" ></el-input>
          <img id="vCode" v-bind:src='img_url' @click="getValidateCode()"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm2')" class="lgbutton" :style="{float:'left'}">登陆
          </el-button>
          <el-button @click="resetForm('ruleForm2')" class="lgbutton" :style="{float:'right'}">重置</el-button>
        </el-form-item>

      </el-form>

    </div>
  </div>

</template>
<script>
  export default {
    data() {
      var checkUsername = (rule, value, callback) => {
        if (!value) {
          return callback(new Error('用户名不能为空'));
        }
        callback();
      };
      var validatePass = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入密码'));
        }
        callback();
      };
      return {
        img_url:"/api/validatecode",
        ruleForm: {
          pass: '',
          username: '',
          validateCode:''
        },
        rules2: {
          pass: [
            {validator: validatePass, trigger: 'blur'}
          ],
          username: [
            {validator: checkUsername, trigger: 'blur'}
          ]
        }
      };
    },
    methods: {
      getValidateCode:function () {
       this.img_url= '/api/validatecode?'+Math.random()
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          const ref = this;
          if (valid) {
            this.$http.post('/api/user/login', {
              'password': ref.ruleForm.pass,
              'userName': ref.ruleForm.username,
              'checkCode':ref.ruleForm.validateCode
            })
              .then(function (response) {
                if(response.data.status===200){
                  ref.$router.push({path:'/'})
                }else {
                  ref.$message({
                    message: response.data.msg,
                    type: 'warning'
                  });
                }
              })
          } else {
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

  .loginForm {

    width: 500px;
    height: 250px;
    position: absolute;
    top: -400px;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

  }

  .lginput {
    background: rgba(0, 0, 0, 0);
  }

  .lgbutton {
    width: 150px;

  }

  .loginTitle {
    width: 100px;
    height: 100px;
    border-radius: 50px;
    margin: auto;
    position: relative;
    left: 30px;
    bottom: 30px;
    background-image: url("../../../static/image/LUFFY.jpg");
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;
  }

  .contarint {

    width: 100%;
    height: 100%;
    background-image: url('../../../static/image/bg.jpg');
    background-size: 100% 100%;
    -moz-background-size: 100% 100%;

  }

</style>
