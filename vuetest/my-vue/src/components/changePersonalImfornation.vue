
<template>
<!-- 表单 -->
<el-container>
 <el-header style="text-align:left; font-size:20px">
 <b>修改信息</b>
 <el-divider></el-divider>
 </el-header >
 <el-row :gutter="10">
  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" ><div class="grid-content bg-purple" style="margin-bottom:50px" ></div></el-col>
  
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" ><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   登录ID：<el-input disabled="true" v-model="changeId" maxLength=30 placeholder="请输入内容" style="width:300px"></el-input>
   </div></el-col>
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   姓名：<el-input v-model="changeName" maxLength=20 placeholder="请输入内容" style="width:300px"></el-input>
   </div></el-col>
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   邮箱：<el-input v-model="changeEmail" maxLength=30 placeholder="请输入内容" style="width:300px"></el-input>
   </div></el-col>
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   修改密码：<el-input v-model="changePassword" maxLength=30 placeholder="请输入内容" style="width:300px"></el-input>
   </div></el-col>
 <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   确认密码：<el-input v-model="change2Password" maxLength=30 placeholder="请输入内容" style="width:300px"></el-input>
   </div></el-col>
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
  <el-button type="primary" @click="changeInformation">确认</el-button>
   </div></el-col>
  
  
</el-row>
  

 
</el-container>

 
</template>

<script>
import axios from "axios";
  export default {
    data() {
      return {
        
        changeId: '',
        changeName: '',
        changeEmail: '',
        changePassword: '',
        change2Password: '',
      }
    },
    methods: {
      
         
       changeInformation(){
          if(this.changePassword!=this.change2Password)
       {
            alert("密码不一致");
            
          }
           else
          {
         let data={"userId":this.changeId,"password":this.changePassword,"email":this.changeEmail,"name":this.changeName};
        axios.put('api/user/updateUser', data).then(res => {
         
            alert("修改成功");
          this.$router.push('/');
          
      
        }).catch(err => {
        alert("修改失败");
       });
      }
     
    
    }
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