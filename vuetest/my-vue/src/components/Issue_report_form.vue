<template>

<el-container>
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

<!-- 表单 -->
<el-form :inline="true" :model="formInline" class="demo-form-inline">

  <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
    <div class="grid-content bg-purple" style="text-align:center">
      <el-form-item label="用户ID">
      <el-input v-model="formInline.user" placeholder="请输入用户ID" maxlength="30"></el-input>
      </el-form-item>
    </div>
  </el-col>

  <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
    <div class="grid-content bg-purple" style="text-align:center">
      <el-form-item label="用户姓名">
      <el-input v-model="formInline.region" placeholder="请输入用户姓名" maxlength="30"></el-input>
      </el-form-item>
    </div>
  </el-col>
   


  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    <div class="grid-content bg-purple" style="text-align:center">
      <el-button type="primary">查询</el-button>
      <el-button v-on:click="resetForm('formInline')">清空</el-button>
    </div>
  </el-col>
</el-form>

<!-- 表格 -->
  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    <div class="grid-content bg-purple">
    </div>
  </el-col>
    统计报表
<el-divider></el-divider>
 

<div class="grid-content bg-purple" style="margin:0px auto">
  <el-table
    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
    style="width: 100%;border:1px solid #0094ff;" >
    
    <el-table-column
      label="□"
      width="100">
      <el-checkbox v-model="checked"></el-checkbox>
    </el-table-column>

    <el-table-column
      type="index" 
      label="序号"
      width="180">
    </el-table-column>

    <el-table-column
      label="用户ID"
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
      label="用户姓名"
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
      label="创建Issue数"
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
      label="收到Issue数"
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
      label="修改Issue数"
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
      label="完成率"
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

  </el-table>
    
</div>
   <div class="pagination-container">
    <el-pagination
      :background="background"
      :current-page="currentPage"
      :page-size="pageSize"
      :page-sizes="pageSizes"
      :layout="layout"
      :total="tableData.length"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"/>
  </div>
</el-container>

</template>

<script>
export default {
  data() {
    return {
        tableData:[],
        currentPage:1,
        PageSize:1,
        formInline: {
          user: '',
          region: ''
        }
        ,
        tableData: [{
          date: '2016-05-02',
          name: '张三',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '李四',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王五',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '赵六',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        
    };
  },
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    limit: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default() {
        return [20]
      }  
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    }
  },
  computed: {
    currentPage: {
      get() {
        return this.page;
      },
      set(val) {
        this.$emit('update:page', val);
      }
    },
    pageSize: {
      get() {
        return this.limit;
      },
      set(val) {
        this.$emit('update:limit', val);
      }
    },

  },
  methods: {
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    handleSizeChange(val) {
      this.PageSize=val
      this.currentPage=1
    },
    handleCurrentChange(val) {
      this.currentPage=val
    },  
  },
};
</script>


<style>
  .el-header, .el-footer {
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .pagination-container {
  background: #fff;
  padding: 32px 16px;
}
</style>