<template>
  <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
  <el-form-item label="Issue题目" prop="name">
    <el-input v-model="ruleForm.name" placeholder="内容"></el-input>
  </el-form-item>
  <div>基本信息<el-divider></el-divider></div>
 <el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">
  <div>
  <el-form-item label="Issue No" prop="no" >
  </el-form-item>
  </div>
  <el-input v-model="ruleForm.no" disabled="" placeholder="系统自动生成"></el-input>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
 <div>
 <el-form-item label="创建时间" prop="date1"  >
</el-form-item>
 </div>
 <el-date-picker v-model="ruleForm.date1" type="date" placeholder="系统自动生成"  style="width: 100%;" disabled=""></el-date-picker>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
  <div>
  <el-form-item label="Issue类型" prop="genre">
  </el-form-item>
  </div>
  <el-input v-model="ruleForm.genre" placeholder="内容"></el-input>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
  <div>
  <el-form-item label="Issue等级" prop="region">
  </el-form-item>
  </div>
  <el-select v-model="ruleForm.region" placeholder="内容">
      <el-option label="最高" value="a"></el-option>
      <el-option label="较高" value="b"></el-option>
      <el-option label="一般" value="c"></el-option>
      <el-option label="低" value="d"></el-option>
    </el-select>
  </div></el-col>
</el-row>
 
<el-row :gutter="20">
  <el-col :span="6"><div class="grid-content bg-purple">
  <div>
  <el-form-item label="影响版本" prop="version">
  </el-form-item>
  </div>
  <el-input v-model="ruleForm.version" placeholder=""></el-input>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
  <el-form-item label="计划修改时间" label-width="formLabelWidth" prop="date3"  >
</el-form-item>
 <el-date-picker v-model="ruleForm.date2" type="date" placeholder="内容"  style="width: 100%;" ></el-date-picker>
  </div></el-col>
  <el-col :span="6"><div class="grid-content bg-purple">
   <div>
 <el-form-item label="实际完成时间" label-width="formLabelWidth" prop="date3"  >
</el-form-item>
 </div>
 <el-date-picker v-model="ruleForm.date3" type="date" placeholder="系统自动生成"  style="width: 100%;" disabled=""></el-date-picker>
  </div></el-col> 
</el-row>
<el-row :gutter="20">
<el-col :span="12"><div class="grid-content bg-purple">
<div>
<el-form-item label="重现步骤" prop="step">
    
  </el-form-item>
</div>
<el-input type="textarea"
  :autosize="{ minRows: 2, maxRows: 4}" v-model="ruleForm.step" placeholder="内容"></el-input>
</div></el-col>
</el-row>

<el-row :gutter="20">
<el-col :span="6"><div class="grid-content bg-purple">
<div>
<el-form-item label="指派修改人" prop="people">
    
  </el-form-item>
</div>
<el-input v-model="ruleForm.people" placeholder="内容"></el-input>
</div></el-col>
</el-row>

<el-form-item style="text-align:center">
    <el-button  type="primary"  @click="submitForm('ruleForm')" round>提交</el-button>
    
  </el-form-item>


  



  </el-form>
</template>
<script>
export default {
  data() {
    return {
      ruleForm:{
        name:'',
        no:'',
        data1:'',
        data2:'',
         data3:'', 
        genre:'',
        region:'',
        version:'',
        step:'',
        people:''
      },
      rules:{
        name: [
            { required: true, message: '内容', trigger: 'blur' },
            { min: 0, max: 80, message: '长度在 0 到 80 个字符', trigger: 'blur' }
          ],
        no:[
           { required: false, message: 'Issue No', trigger: 'change' }
        ],
        data1:[
          { type: 'date', required: false, message: '创建时间', trigger: 'change' }
      ],
       data2:[
          { type: 'date', required: true, message: '内容', trigger: 'change' }
      ],
       data3:[
          { type: 'date', required: false, message: '内容', trigger: 'change' }
      ],
      genre:[
            { required: true, message: '内容', trigger: 'blur' },
            { min: 0, max: 30, message: '长度在 0 到 30 个字符', trigger: 'blur' }
      ],
      region:[
        { required: true, message: '内容', trigger: 'change' }
      ],
      version:[
            { required: true, message: '内容', trigger: 'blur' },
            { min: 0, max: 30, message: '长度在 0 到 30 个字符', trigger: 'blur' }
      ],
      step:[
        { required: true, message: '内容', trigger: 'blur' },
            { min: 0, max: 2000, message: '长度在 0 到 2000 个字符', trigger: 'blur' }
      ],
      people:[
        { required: true, message: '内容', trigger: 'blur' },
            { min: 0, max: 30, message: '长度在 0 到 30 个字符', trigger: 'blur' }
      ]
    
    
    }
  };
},
 methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
     
    }
  }
     
    
  



</script>
<style >
  .el-row {
    margin-bottom: 20px;
    
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #f1f3f5;
  }
  .bg-purple {
    background: #f1f3f5;
  }
  .bg-purple-light {
    background:  #f1f3f5;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 5px;
  }
  .row-bg {
    padding: 0 0 0 0;
    background-color: #f1f3f5;
  }

 
      
     

    
    
    
</style>