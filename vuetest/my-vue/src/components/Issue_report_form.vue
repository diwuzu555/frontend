<template>
  <div>
      <el-header>
        <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
          <div class="grid-content bg-purple">
            Issue 报表
          </div>
        </el-col>
      </el-header>

      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="grid-content bg-purple">
          查询条件
        </div>             
      </el-col>
      <el-divider></el-divider>
    
      <div :inline="true">
        用户ID
        <el-input v-model="searchId" placeholder="用户Id" style="width:240px"></el-input>
        用户姓名
        <el-input v-model="searchName" placeholder="用户姓名" style="width:240px"></el-input>
      </div>
      <div align='center'>
        <el-button type="primary" @click="getList1">查询</el-button>
        <el-button @click="clearall">清空</el-button>
      </div>

      <el-divider></el-divider>

        统计报表
      <el-divider></el-divider>

    <el-table :data="tableDataEnd">
      <el-table-column label="□"></el-table-column>
      <el-table-column type="index" label="序号"></el-table-column>
      <el-table-column label="用户ID" prop="issueId"></el-table-column>
      <el-table-column label="用户姓名" prop="founder"></el-table-column>
      <el-table-column label="创建Issue数" prop="create_number"></el-table-column>
      <el-table-column label="收到Issue数" prop="receive_number"></el-table-column>
      <el-table-column label="修改Issue数" prop="update_number"></el-table-column>
      <el-table-column label="完成率" prop="completion_rate"></el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[1,2]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalItems">
    </el-pagination>
  </div>
</template>

<script>
import axios from "axios";
  export default {
    data() {
      return {
        searchId: "",
        searchName:"",
        tableDataEnd: [],
        currentPage: 1,
        pageSize: 1,
        totalItems: 0,
      };
    },

    //页面初始数据
    // created(){
    //   this.getlistIssue();
    // },

    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.pageSize = val;
        // this.handleCurrentChange(this.currentPage);
        this.currentPage=1
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.currentPage = val;
      },
      getList1(){
        axios
        .get('api/issue/queryIssue',{ params: { userId1: this.searchId } })
        .then(res => {
                
          this.tableDataEnd=res.data;
          console.log('kaishi');
          console.log(this.tableDataEnd);
          
          this.$message({
            message: '查询成功',
            type: 'success'
          })
          }).catch(err => {
            this.$message({
              message: '查询失败',
              type: 'warning'
            });
            console.log("...err...",err)
          });
      },
      //获取所有数据
      getlistIssue() {
        axios
        .get('api/issue/listIssue')
        .then(res => {
          console.log(res.data[0]); 
          this.totalItems=res.data.length;
          this.tableDataEnd=res.data;
        })
        .catch(err=>{
          this.$message({
            message: '列表数据获取失败',
            type: 'warning'
          });
          console.log("...err...",err)
        })               
      },
      //清空按钮及重获所有数据
      clearall(){
        this.searchId="";
        this.searchName="";
        this.getlistIssue();
      }
    }
  };
</script>