<template>
<div>

<el-header class="header1">
  <h2>查询</h2>
</el-header>

<el-main class="main1">

  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

  <el-form-item label="用户ID" prop="userID">
    <el-input v-model.number="ruleForm.userID"></el-input>
  </el-form-item>
  <el-form-item label="用户姓名" prop="username">
    <el-input v-model.number="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item>
    <router-link to="/AccountInq"><el-button type="primary" @click="submitForm('ruleForm')">查询</el-button></router-link>
    <el-button @click="resetForm('ruleForm')">清空</el-button>
  </el-form-item>
</el-form>
  
  
</el-main>

  
  
</div>


  
</template>

<script>

export default {
    data() {
     
      return {
        ruleForm: {
          userID:'',
          username:''
        },
        
      };
    },
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

<style >
.buttom,.main1,.header1 {
  display: flex; 
  justify-content: center; 
  align-items: center;

}
</style>