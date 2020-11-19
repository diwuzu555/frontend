<template>
<!-- 账户管理查询页面 -->
<div>

<el-header class="header1">
  <h2>查询</h2>
</el-header>

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
      prop="id"
      label="用户ID"
      >
    </el-table-column>
    <el-table-column
      prop="name"
      label="用户姓名"
     >
    </el-table-column>
    <el-table-column
      prop="mail"
      label="邮箱"
      >
    </el-table-column>
    <el-table-column
      prop="time"
      label="注册时间"
      >
    </el-table-column>
    <el-table-column
      prop="body"
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
          @click="handleEdit(scope.$index, scope.row)">注销</el-button>
        <el-button
          size="mini" plain v-if="scope.row.buttonVisible"
          @click="handleDelete(scope.$index, scope.row)">经理</el-button>
      </template>
    </el-table-column>
  </el-table>
  
</el-main>
<el-footer class="footer">
  <el-pagination
   @size-change="handleSizeChange" 
   @current-change="handleCurrentChange" 
   :current-page="currentPage" 
   :page-sizes="20" 
   :page-size="PageSize" layout="total, sizes, prev, pager, next, jumper" 
   :total="tableData.length">
  
</el-pagination>
</el-footer>
  
  
</div>


  
</template>

<script>

 export default {
    data() {
      return {
         // 总数据
           tableData:[],
           // 默认显示第几页
           currentPage:1,
           // 默认每页显示的条数（可修改）
           PageSize:20,
        tableData: [{
          num:'1',
          id: '001',
          name: '王小虎',
          mail: 'xxxxx@qq.com',
          time:'2016-05-02',
          body:'普通用户',
          status:'激活',
          scope:'',
          buttonVisible:true,
        }, 
        {
          num:'1',
          id: '001',
          name: '王小虎',
          mail: 'xxxxx@qq.com',
          time:'2016-05-02',
          body:'经理',
          status:'激活',
          scope:'',
          buttonVisible:false,
        }, 
        {
          num:'1',
          id: '001',
          name: '王小虎',
          mail: 'xxxxx@qq.com',
          time:'2016-05-02',
          body:'普通用户',
          status:'激活',
          scope:'',
          buttonVisible:true,
        }, 
        ]
      }
    },
    methods: {
      handleEdit() {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
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
   }
      }
  }
</script>

<style >
.footer,.main1,.header1 {
  display: flex; 
  justify-content: center; 
  align-items: center;

}
</style>