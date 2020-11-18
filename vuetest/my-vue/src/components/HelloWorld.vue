
<template>

 <el-container>
 <el-header style="font-size: 50px">GBA Issue管理系统</el-header>
 
  
  
  <el-row :gutter="10">
  <el-col :xs="24" :sm="24" :md="16" :lg="12" :xl="12"><div class="grid-content bg-purple">
   <router-link to='/register' ><el-button type="primary" size="small">注册</el-button></router-link>
   <router-link to='/sign' ><el-button type="primary" size="small" >登录</el-button></router-link>
  /Welcome John Doe!
 <router-link to='/changePersonalImfornation' > <el-button type="success" size="small">修改个人信息</el-button></router-link>
  </div></el-col>
  </el-row>
  <el-header>
   <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6"><div class="grid-content bg-purple">
    
   </div></el-col>
  <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
    <el-button type="primary" >创建新Issue</el-button>
   </div></el-col>
 <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
  <el-button type="primary" >Issue报表</el-button>
   </div></el-col>
  
 <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
  <router-link to='/Account' ><el-button type="primary" >账号管理</el-button></router-link>
   </div></el-col>
    <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6"><div class="grid-content bg-purple">
   
   </div></el-col>
  </el-header>
  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple">
  
   </div></el-col>
   Issue查询
   <el-divider></el-divider>

 <!-- 表单 -->

 <el-form :inline="true" :model="formInline" class="demo-form-inline">

 <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6"><div class="grid-content bg-purple" style="text-align:center">
    <el-form-item label="Issue No">
    <el-input v-model="formInline.user" placeholder=""></el-input>
  </el-form-item>
   </div></el-col>



 <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
 <el-form-item label="Issue 状态">
    <el-select v-model="formInline.region" placeholder="">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
   </div></el-col>


   <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
 <el-form-item label="创建时间">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
   </div></el-col>
 
  <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
 <el-form-item label="至">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
   </div></el-col>
   

   <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6"><div class="grid-content bg-purple">
    
   </div></el-col>
   
 </el-form>



 <el-form :inline="true" :model="formInline" class="demo-form-inline">

 <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6"><div class="grid-content bg-purple" style="text-align:center">
    <el-form-item label="创建人">
    <el-input v-model="formInline.user" placeholder=""></el-input>
  </el-form-item>
   </div></el-col>



 <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
 <el-form-item label="修改人">
    <el-select v-model="formInline.region" placeholder="John Doe">
      <el-option label="区域一" value="shanghai"></el-option>
      <el-option label="区域二" value="beijing"></el-option>
    </el-select>
  </el-form-item>
   </div></el-col>


   <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
 <el-form-item label="修改时间">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
   </div></el-col>
 
  <el-col :xs="24" :sm="24" :md="8" :lg="4" :xl="4"><div class="grid-content bg-purple">
 <el-form-item label="至">
    <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </el-form-item>
   </div></el-col>
   

   <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6"><div class="grid-content bg-purple">
    
   </div></el-col>
   
   
   <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple" style="text-align:center">
   <el-button type="primary">查询</el-button>
    <el-button type="primary">清空</el-button>
   </div></el-col>
   </el-form>
 <!-- 表格 -->
 <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24"><div class="grid-content bg-purple">
  
   </div></el-col>
 Issue 列表
  <el-divider></el-divider>
 
 <div class="grid-content bg-purple" style="margin:0px auto">
  
  
  <el-table
    :data="tableData"
    style="width: 100%;border:1px solid #0094ff;" >

    <el-table-column
      label="序号"
      width="180" >
      <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template>
    </el-table-column>



    <el-table-column
      label="Issue ID"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

 <el-table-column
      label="Issue 标题"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="创建人"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="创建时间"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="修改人"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="Issue 状态"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="计划完成时间"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>

    <el-table-column
      label="实际完成时间"
      width="180">
      <template slot-scope="scope">
        <el-popover trigger="hover" placement="top">
          <p>姓名: {{ scope.row.name }}</p>
          <p>住址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper">
            <el-tag size="medium">{{ scope.row.name }}</el-tag>
          </div>
        </el-popover>
      </template>
    </el-table-column>


    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
   </div>
   
 </el-container>

</template>

<script>
export default {
  data() {
    return {
      formInline: {
          user: '',
          region: ''
        }
        ,
         tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]

    };
  },
  // -----------------------------------------------------------------------------

  // --------------------------------------------------------------------------------
  methods: {
    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },
      //表格
      tableRowClassName({row, rowIndex}) {
        if (rowIndex === 1) {
          return 'warning-row';
        } else if (rowIndex === 3) {
          return 'success-row';
        }
        return '';
      }
    
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

</style>
