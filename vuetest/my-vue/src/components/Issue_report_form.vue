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
      <el-input v-model="formInline.user" placeholder="请输入用户姓名" maxlength="30"></el-input>
      </el-form-item>
    </div>
  </el-col>
   
</el-form>


<el-form :inline="true" :model="formInline" class="demo-form-inline">

  <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
    <div class="grid-content bg-purple" style="text-align:center">
      <el-button type="primary">查询</el-button>
      <el-button>清空</el-button>
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
      <!-- <template slot-scope="scope">
        <i class="el-icon-time"></i>
        <span style="margin-left: 10px">{{ scope.row.date }}</span>
      </template> -->
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
        // 总数据
           tableData:[],
           // 默认显示第几页
           currentPage:1,
           // 总条数，根据接口获取数据长度(注意：这里不能为空)
        //    totalCount:100,
           // 个数选择器（可修改）
        //    pageSizes:[1,2,3,4],
           // 默认每页显示的条数（可修改）
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
//   name: 'pagination',
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
      default: 1
    },
    pageSizes: {
      type: Array,
      default() {
        return [1,2]
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
      handleSizeChange(val) {
    //   this.$emit('pagination', { page: this.currentPage, limit: val });
        // 改变每页显示的条数 
           this.PageSize=val
           // 注意：在改变每页显示的条数时，要将页码显示到第一页
           this.currentPage=1
    },
    handleCurrentChange(val) {
    //   this.$emit('pagination', { page: val, limit: this.pageSize });
        // 改变默认的页数
           this.currentPage=val
    },
    // getData(){
    //          // 这里使用axios，使用时请提前引入
    //          axios.post(url,{
    //               orgCode:1
    //          },{emulateJSON: true},
    //          {
    //            headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",} 
    //           }
    //           ).then(reponse=>{
    //                console.log(reponse)
    //                // 将数据赋值给tableData
    //                this.tableData=data.data.body
    //                // 将数据的长度赋值给totalCount
    //                this.totalCount=data.data.body.length
    //           }) 
    //      },
    
  },
//   created:function(){
//          this.getData() 
//    }
};
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
  .bg-purple-dark {
   
  }
  .bg-purple {
   
  }
  .bg-purple-light {
    
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
  .pagination-container {
  background: #fff;
  padding: 32px 16px;
}
</style>