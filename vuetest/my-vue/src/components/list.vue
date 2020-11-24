<template>
<!-- 查询页面 -->
<div>

<el-header class="header1">
  <h2>Issue查询</h2>
</el-header>
<div class="grid-content bg-purple" style="margin:0px auto">
   </div>
<!-- 表单 -->  
<el-form ref="form" :model="form" label-width="80px" >
  <div class="row">
    <el-row :gutter="20"  >
  <el-col :span="6"><div><el-form-item label="issue NO:" prop="text1"> <el-input type="text" placeholder="请输入内容" v-model="form.text1"  maxlength="30" show-word-limit >
    </el-input></el-form-item></div></el-col>
    <el-col :span="6"><div><el-form-item label="issue状态:" prop="region"> <el-select v-model="form.region" placeholder="活动区域">
      <el-option label="待解决" value="待解决"></el-option>
      <el-option label="待验证" value="待验证"></el-option>
      <el-option label="已关闭" value="已关闭"></el-option>
    </el-select></el-form-item></div></el-col>
    <el-col :span="4"><div><el-form-item label="创建时间:" prop="value1"> <el-date-picker
      v-model="form.value1"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker></el-form-item></div></el-col>
  </el-row>
  </div>
  <div class="row">
 <el-row :gutter="20" >
  <el-col :span="6"><div><el-form-item label="创建人:" prop="text3"> <el-input type="text" placeholder="请输入内容" v-model="form.text3"  maxlength="30" show-word-limit >
    </el-input></el-form-item></div></el-col>
    <el-col :span="6"><div><el-form-item label="修改人:" prop="text4"> <el-input type="text" placeholder="请输入内容" v-model="form.text4"  maxlength="30" show-word-limit >
    </el-input></el-form-item></div></el-col>
    <el-col :span="4"><div><el-form-item label="修改时间:" prop="value3"> <el-date-picker
      v-model="form.value3"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期">
    </el-date-picker></el-form-item></div></el-col>
  </el-row>
 </div>
    <el-footer class="header1">
      <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
    <el-button type="primary" @click="submitForm">查询</el-button>
     </div></el-col>
     <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
    <el-button type="primary"  @click="resetForm('form')">清空</el-button>
  </div></el-col>

    </el-footer>
  
</el-form>
<div class="grid-content bg-purple" style="margin:0px auto">
   </div>
<el-main class="main1">

  <el-table
    :data="tableData.slice((currentPage-1)*PageSize,currentPage*PageSize)"
    border
    style="width: 90%"
    :row-style="{ height: '80px'}">
    <el-table-column label="序号" fixed width="80" align="center">
  <template slot-scope="scope">
    <span>{{scope.$index+(currentPage - 1) * PageSize + 1}}</span>
  </template>
</el-table-column>
    <el-table-column
      prop="issueId"
      label="IssueID"
      >
    </el-table-column>
    <el-table-column
      prop="title"
      label="Issue标题"
     >
    </el-table-column>
    <el-table-column
      prop="founder"
      label="创建人"
      >
    </el-table-column>
    <el-table-column
      prop="iCreateTime"
      label="创建时间"
      >
    </el-table-column>
    <el-table-column
      prop="reviser"
      label="修改人"
      >
    </el-table-column>
    <el-table-column
      prop="issueStatus"
      label="Issue状态"
      >
    </el-table-column>
    <el-table-column
      prop="planTime"
      label="计划完成时间"
      >
    </el-table-column>
   <el-table-column
      prop="actualTime"
      label="实际完成时间"
      >
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="Details(scope.$index, scope.row)">详情</el-button>
        <el-button
          size="mini" 
          type="danger"
           plain v-if="scope.row.issueStatus=='待解决'||scope.row.issueStatus=='待验证'"
          @click="Edit(scope.$index, scope.row)">修改</el-button>
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
            form:{
        text1: '',
        region:'',
        text3: '',
        text4:'',
        textarea: '',
        value1: '',
        value2: '',
        value3: '',
        value4: ''
       } ,
       
      }
    },

     created(){
        this.getTabelInfo()
      },

    methods: {

      getTabelInfo(){
            
             // let _that = this;
            axios.post('/api/issue/listIssue')
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

    submitForm() {  
      // let data = {"issueId":this.form.text1,
      //       "founder":this.form.text3,
      //       "issueStatus": "this.form.region",
      //       "reviser":this.form.text4};
            axios.get('/api/issue/queryIssue', 
            {
          params: {
            issueId:this.form.text1,
            founder:this.form.text3,
            issueStatus: this.form.region,
            reviser:this.form.text4,

           }
         })
             
                .then(response =>{
                  this.tableData=[];
                  this.total=response.data.length;
                    this.tableData.push(response.data);
                    console.log(response.data)
            }).catch(err=>{
                this.$message({
                    message: '列表数据获取失败',
                    type: 'success'
                });
            })
       },

      
       getData(){
             // 这里使用axios，使用时请提前引入
             axios.post(url,{
                  orgCode:1
             },{emulateJSON: true},
             {
               headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",} 
              }
              ).then(reponse=>{
                   console.log(reponse)
                   // 将数据赋值给tableData
                   this.tableData=data.data.body
                   // 将数据的长度赋值给totalCount
                   this.totalCount=data.data.body.length
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
      }
  
      }
  }
</script>

<style >
.footer,.main1,.header1,.row {
  display: flex; 
  justify-content: center; 
  align-items: center;

}
</style>