
<template>
<!-- 表单 -->
<el-container>
 <el-header style="text-align:left; font-size:20px">
 <b>账号注册</b>
 <el-divider></el-divider>
 </el-header >
 <el-row :gutter="10">
  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" ><div class="grid-content bg-purple" style="margin-bottom:50px" ></div></el-col>
  
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24" ><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   登录ID：<el-input v-model="saveId" maxLength=30 placeholder="请输入内容" style="width:300px" ></el-input>
   </div></el-col>
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   姓名：<el-input v-model="saveName" maxLength=20 placeholder="请输入内容" style="width:300px"></el-input>
   </div></el-col>
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   邮箱：<el-input v-model="saveEmail" maxLength=30 placeholder="请输入内容" style="width:300px"></el-input>
   </div></el-col>
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   输入密码：<el-input v-model="savePassword" maxLength=30 placeholder="请输入内容" style="width:300px"></el-input>
   </div></el-col>
 <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
   确认密码：<el-input v-model="save2Password" maxLength=30 placeholder="请输入内容" style="width:300px"></el-input>
   </div></el-col>
  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center;margin-bottom:20px">
  <el-button type="primary" @click="postuser" >确认</el-button>
   </div></el-col>
  
</el-row>
  

 
</el-container>

 
</template>

<script>
import axios from "axios";
  export default {
    data() {
      return {
        input: '',
        saveId: '',
        saveName: '',
        saveEmail: '',
        savePassword: '',
        save2Password: '',

        
        
      }
    },
    methods: {
        postuser(){
           var patt1=new RegExp("^(?![A-Za-z0-9]+$)(?![a-z0-9\\W]+$)(?![A-Za-z\\W]+$)(?![A-Z0-9\\W]+$)[a-zA-Z0-9\\W]{8,}$");
         if(patt1.test(this.savePassword))
         {
          if(this.savePassword!=this.save2Password)
          { 
            alert("确定密码不一致");
             }
             else{
        let data = {"userId":this.saveId,"password":this.savePassword,"name":this.saveName,"email":this.saveEmail};
        axios.post('api/user/register',data)
        .then(res=>{
         
          
         console.log('res=>',res); 
         alert("注册成功"); 
         this.$router.push('/'); 
          
         
         }).catch(err => {
        console.log(err);
         alert("注册失败");
               
       });
       }
         }
         else
         {
           alert('密码格式错误')
         }



      }
      ,
       





     
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