
<template>
<!-- 表单 -->
<el-container>
 <el-header style="text-align:left; font-size:20px">
 <b>登录</b>
 <el-divider></el-divider>
 </el-header >
 <el-row :gutter="10">
  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" ><div class="grid-content bg-purple" style="margin-bottom:50px" ></div></el-col>
  
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" ><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   系统ID：<el-input v-model="input" placeholder="请输入内容" style="width:300px"></el-input>
   </div></el-col>
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   输入密码：<el-input v-model="input" placeholder="请输入内容" style="width:300px"></el-input>
   </div></el-col>
  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
  <el-button type="primary" >确认</el-button>
   </div></el-col>
  
  
</el-row>
  

 
</el-container>

 
</template>

<script>
  export default {
    data() {
      return {
        input: ''
      }
    },
    methods: {
     
    }
  }
</script>

<style>
/* 布局容器样式*/
  .el-header, .el-footer {
    
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
  /*布局样式*/
  .el-col {
    border-radius: 4px;
  }
 
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  </style>