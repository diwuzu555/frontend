<template>
<!-- 账户管理页面 -->
<div>   
<el-header class="header1">
  <h2>查询</h2>
</el-header>

<el-main class="main1">

  <el-form :model="ruleForm" status-icon  ref="ruleForm" label-width="100px" class="demo-ruleForm">

  <el-form-item label="用户ID" prop="userID">
    <el-input v-model="ruleForm.userID"></el-input>
  </el-form-item>
  <el-form-item label="用户姓名" prop="username">
    <el-input v-model="ruleForm.username"></el-input>
  </el-form-item>
  <el-form-item>
    <el-button type="primary" @click="submitForm">查询</el-button>
    <el-button @click="resetForm('ruleForm')">清空</el-button>
  </el-form-item>
</el-form>
</el-main>

<!-- 表格 -->
 <div>
<el-main class="main1">

  <el-table
    :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)"
    border
    style="width: 90%">
    <el-table-column label="序号" fixed width="80" align="center">
  <template slot-scope="scope">
    <span>{{scope.$index+(currentPage - 1) * PageSize + 1}}</span>
  </template>
</el-table-column>
    <el-table-column
      prop="userId"
      label="用户ID"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户姓名"
     >
    </el-table-column>
    <el-table-column
      prop="email"
      label="邮箱"
      >
    </el-table-column>
    <el-table-column
      prop="uCreateTime"
      label="注册时间"
      >
     <template slot-scope="scope">{{moment(scope.row.uCreateTime).format('YYYY-MM-DD')}}</template>
    </el-table-column>
    <el-table-column
      prop="identity"
      label="用户身份"
      >
    </el-table-column>
    <el-table-column
      prop="status"
      label="账户状态"
      >
      
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          type="danger"
          plain v-if="scope.row.status=='激活'"
          @click="handleEdit(scope.$index, scope.row)">注销</el-button>
        <el-button
          size="mini" plain v-if="scope.row.identity=='普通职员'&& scope.row.status=='激活'"
          @click="Change(scope.$index, scope.row)">经理</el-button>
      </template>
    </el-table-column>
  </el-table>
  
</el-main>
<el-footer class="footer">
  <el-pagination
   @size-change="handleSizeChange" 
   @current-change="handleCurrentChange" 
   :current-page="currentPage" 
   :page-sizes="[20]" 
   :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper" 
   :total="total">
  
</el-pagination>
</el-footer>

</div>
</div>
 
</template>


<script>
import axios from 'axios';
export default {
    data() {
      return {
        // 总数据
          tableData:[],
           // 默认显示第几页
           currentPage:1,
           // 默认每页显示的条数（可修改）
           PageSize:20,
           total:0,
        ruleForm: {
          userID:'',
          username:'',

        },
       
      };
      
    },
    // created(){
    //     this.getTabelInfo()
    //   },
    methods: {
      getTabelInfo(){
            
             // let _that = this;
            axios.post('/api/user/listUser')
                .then(response =>{
                 
                    this.total=response.data.length;
                    this.tableData = response.data;
                    console.log(response.data)          
            }).catch(err=>{
                this.$message({
                    message: '列表数据获取失败',
                    type: 'success'
                });
            })
        },


       handleEdit(index,row){
         this.formSelect=row;
         let data = {"userId":this.formSelect.userId,"status":"注销"};
        axios.put('api/user/updateUser', data)
        .then(res=>{
          this.submitForm();
         console.log('res=>',res);            
         }).catch(err => {
        console.log(err);
       });
       
      },

     Change(index,row){
         this.formSelect=row;
         let data = {"userId":this.formSelect.userId,"identity":"经理"};
        axios.put('api/user/updateUser', data)
        .then(res=>{
          this.submitForm();
         console.log('res=>',res);            
         }).catch(err => {
        console.log(err);
       });
       
      },


      submitForm() {
            axios.get('/api/user/queryUser' , {
          params: {
            userId:this.ruleForm.userID,
            name:this.ruleForm.username,
           }
         }) 
                .then(response =>{  
                  this.total=response.data.length;
                    this.tableData=response.data;
                    console.log(response.data)
            }).catch(err=>{
                this.$message({
                    message: '列表数据获取失败',
                    type: 'success'
                });
            })
       },

       // 分页
        // 每页显示的条数
       handleSizeChange(val) {
           // 改变每页显示的条数 
           this.PageSize=val
           // 注意：在改变每页显示的条数时，要将页码显示到第一页
           this.currentPage=1
       },
       handleCurrentChange(val) {
           // 改变默认的页数
           this.currentPage=val
       },

        created:function(){
         this.getData() 
   },
      
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

    }
}
</script>


<style >
.footer,.buttom,.main1,.header1 {
  display: flex; 
  justify-content: center; 
  align-items: center;

}
</style>