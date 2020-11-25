
<template>

 <el-container>
 <el-header style="font-size: 50px">GBA Issue管理系统</el-header>
 
  <!-- <el-button type="primary" size="small" @click="xixi">注册aa</el-button> -->
  
  <el-row :gutter="10">
  <el-col :xs="24" :sm="24" :md="16" :lg="12" :xl="12"><div class="grid-content bg-purple">
   <router-link to='/register' ><el-button v-if="!$store.state.signed" type="primary"  size="small">注册</el-button></router-link>
   <router-link to='/sign' ><el-button v-if="!$store.state.signed" type="primary" size="small" >登录</el-button></router-link>

  <template v-if="$store.state.signed">
    /Welcome {{$store.state.signedUsername}}!
  </template> 

  <el-button type="primary"  v-if="$store.state.signed" @click="getuser">退出</el-button>

 <router-link to='/changePersonalImfornation' v-if="$store.state.signed"> <el-button type="success" size="small">修改个人信息</el-button></router-link>
  </div></el-col>
  </el-row>

   <div class="grid-content bg-purple" style="margin:=0px auto">
   </div>

  <el-header class="header1">
  <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
   <el-button type="primary" @click="jumpCreateIssue" plain v-if="this.$store.state.signedidentity1=='普通职员'||this.$store.state.signedidentity1=='admin'">创建新Issue</el-button>
   </div></el-col>
 <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
   <router-link to='/Issue_report_form' ><el-button type="primary" plain v-if="this.$store.state.signedidentity1=='经理'||this.$store.state.signedidentity1=='admin'">Issue报表</el-button></router-link>
   </div></el-col>
 <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
  <router-link to='/Account' ><el-button type="primary" plain v-if="this.$store.state.signedidentity1=='admin'">账号管理</el-button></router-link>
   </div></el-col>
   <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
  <router-link to='/list' ><el-button type="primary" plain v-if="this.$store.state.signedidentity1=='普通职员'||this.$store.state.signedidentity1=='admin'||this.$store.state.signedidentity1=='经理'">Issue查询</el-button></router-link>
   </div></el-col>
  </el-header>

  
 <!-- 表单 -->
  
 <!-- 表格 -->
 
 <!-- Issue 列表
  <el-divider></el-divider>
 
 <div class="grid-content bg-purple" style="margin:0px auto">
  
  
 
   </div> -->
   
 </el-container>

</template>

<script>


export default {
  
  data() {
    return {
      
     

    };
  },
  // created(){
  //       this.toolEventSlot()
  //     },
  // -----------------------------------------------------------------------------

  // --------------------------------------------------------------------------------
  mounted () {
    window.addEventListener('unload', this.saveState)
  },
  methods: {
    jumpCreateIssue(){
      console.log('111');
      this.$store.commit('submitIssue');
      console.log('222');

      this.$router.push('/HelloWorld_xinIssue');
       console.log('333');
    },


    
   getuser(){
     
  // this.$store.commit('sign','');
  // this.$store.commit('body','');
  
    //  sessionStorage.removeItem('store');
   this.$router.push('/sign');
//想清空vuex中的数据，让页面重新加载就行了
    // window.location.reload();

    },


    // toolEventSlot()
    //   {
    

    //   window.addEventListener("beforeunload", () => {
    //   sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    // });
    
    // if(sessionStorage.getItem('store')){
    //   this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem('store'))))

    //   sessionStorage.removeItem('store');
		// 	}   
    //     },

// const state = sessionStorage.getItem('state') ? JSON.parse(sessionStorage.getItem('state')
       
    // saveState () {
    //   sessionStorage.setItem('state', JSON.stringify(this.$store.state))
    // }

    
      
      

  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
  /*表单样式*/
  /*表格样式*/
  .el-table .warning-row {
    background: oldlace;
  }

  .el-table .success-row {
    background: #f0f9eb;
  }
.buttomInq,.row,.header1 {
  display: flex; 
  justify-content: center; 
  align-items: center;

}
</style>
