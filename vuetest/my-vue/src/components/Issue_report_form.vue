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
        <el-input v-model="searchId" placeholder="用户Id" style="width:240px" maxlength='30'></el-input>
        用户姓名
        <el-input v-model="searchName" placeholder="用户姓名" style="width:240px" maxlength='30'></el-input>
      </div>
      <br>
      <div align='center'>
        <el-button type="primary" @click="getList">查询</el-button>
        <el-button @click="clearall">清空</el-button>
      </div>

      <el-divider></el-divider>
        统计报表
      <el-divider></el-divider>

    <el-table :data="tableDataEnd.slice((currentPage-1)*PageSize,currentPage*PageSize)" @cell-click='handle'>
      <el-table-column label="□" width="120" align="center">
          <el-checkbox></el-checkbox>
      </el-table-column>
      <el-table-column type="index" label="序号" width="180"></el-table-column>
      <el-table-column label="用户ID" prop="userId1"></el-table-column>
      <el-table-column label="用户姓名" prop="founder"></el-table-column>
      <el-table-column label="创建Issue数" prop="crtCnt"></el-table-column>
      <el-table-column label="收到Issue数" prop="slvCnt"></el-table-column>
      <el-table-column label="修改Issue数" prop="tttCnt"></el-table-column>
      <el-table-column label="完成率" prop="percent"></el-table-column>
    </el-table>
    <el-footer class="footer">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10,20]"
      :page-size="PageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalItems"
      background>
    </el-pagination>
    </el-footer>
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
        PageSize: 20,
        totalItems: 0,
      };
    },
    //页面初始数据
    created(){
      this.getList();
    },
    methods: {
      handleSizeChange(val) {
        this.PageSize = val
        this.currentPage=1
      },
      handleCurrentChange(val) {
        this.currentPage = val
      },
      //读取报表数据
      getList(){
        axios
        .get('api/issue/formIssue',{ params: { userId1: this.searchId, founder:this.searchName} })
        .then(res => {
          for(var i=0;i<res.data.length;i++){
            if(res.data[i].percent!=null){
              res.data[i].percent=res.data[i].percent + '%'
            }
          }
          this.totalItems=res.data.length;
          this.tableDataEnd=res.data;
          }).catch(err => {
            this.$message({
              message: '查询失败',
              type: 'error'
            });
            console.log("...err...",err)
          });
      },
      //点击创建数收到数修改数，跳转至list页面
      handle(row,column){
        if(column.label=="创建Issue数" || 
           column.label=="收到Issue数" || 
           column.label=="修改Issue数"){
             this.$router.push({name:'list',params:{founder:row.founder}})
        }
      },
      //清空按钮及重获所有数据
      clearall(){
        this.searchId="";
        this.searchName="";
        this.getList();
      },
    }
  };
</script>

<style >
.footer{
  display: flex; 
  justify-content: center; 
  align-items: center;
}
</style>