
<template>
  <div class="hello">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"
              ><i class="el-icon-message"></i>导航一</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"
              ><i class="el-icon-setting"></i>导航三</template
            >
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-button @click.native="dialogVisible = true" type="info"
            >添加数据</el-button
          >
          <el-button @click="dialogFun1" type="info">直形图</el-button>
          <el-button @click="dialogFun2" type="info">折线图</el-button>
          <el-button @click="dialogFun3" type="info">饼状图</el-button>
        </el-header>

        <el-main>
          <el-table :data="table">
            <el-table-column prop="year" label="年份" width="150">
            </el-table-column>
            <el-table-column prop="name" label="物品名称" width="150">
            </el-table-column>
            <el-table-column prop="type" label="物品性质" width="150">
            </el-table-column>
            <el-table-column prop="cost" label="成本（万）" width="150">
            </el-table-column>
            <el-table-column prop="rate" label="率润（万）" width="150">
            </el-table-column>
            <el-table-column prop="quality" label="物品质量等级" width="150">
            </el-table-column>
            <el-table-column prop="region" label="主要出售地区" width="150">
            </el-table-column>
            <el-table-column prop="text" label="备注" width="150">
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>

    <el-dialog title="提示" :visible.sync="dialogVisible" width="50%">
      <span>
        <el-form ref="form" :model="form" label-width="100px">
          <el-form-item label="年份">
            <el-input v-model="form.year"></el-input>
          </el-form-item>
          <el-form-item label="物品名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="物品性质">
            <el-select v-model="form.type" placeholder="请选择物品性质">
              <el-option label="家用电器" value="家用电器"></el-option>
              <el-option label="衣物" value="衣物"></el-option>
              <el-option label="鞋子" value="鞋子"></el-option>
              <el-option label="家具" value="家具"></el-option>
              <el-option label="书籍" value="书籍"></el-option>
              <el-option label="衣物" value="衣物"></el-option>
              <el-option label="零食" value="零食"></el-option>
              <el-option label="珠宝" value="珠宝"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="成本（万）">
            <el-input v-model="form.cost"></el-input>
          </el-form-item>
          <el-form-item label="率润（万）">
            <el-input v-model="form.rate"></el-input>
          </el-form-item>
          <el-form-item label="物品质量等级">
            <el-radio-group v-model="form.quality">
              <el-radio label="一级"></el-radio>
              <el-radio label="二级"></el-radio>
              <el-radio label="三级"></el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="主要出售地区">
            <el-checkbox-group v-model="form.region">
              <el-checkbox label="北京" name="type"></el-checkbox>
              <el-checkbox label="上海" name="type"></el-checkbox>
              <el-checkbox label="深圳" name="type"></el-checkbox>
              <el-checkbox label="广州" name="type"></el-checkbox>
            </el-checkbox-group>
          </el-form-item>
          <el-form-item label="备注">
            <el-input type="textarea" v-model="form.text"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>

    <el-dialog title="直形图" :visible.sync="dialog" width="50%">
      <div
        id="myChart"
        :style="{ width: '500px', height: '500px', margin: '0 auto' }"
      ></div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialog = false">取 消</el-button>
        <el-button type="primary" @click="dialog = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false, //控制对话框的显示和隐藏
      dialog: false,
      allName: [],
      allRate: [],
      allCost: [],
      // -------表格数据
      table: [
        {
          year: "2020",
          name: "XX手机",
          type: "电子",
          cost: "100",
          rate: "300",
          quality: "一级",
          text: "该手机便宜好用",
          region: ["北京", "上海"]
        },
        {
          year: "2020",
          name: "XX电视",
          type: "电子",
          cost: "200",
          rate: "50",
          quality: "二级",
          text: "质量不过关，以后别用这个",
          region: ["北京", "上海"]
        },
        {
          year: "2020",
          name: "XX相机",
          type: "电子",
          cost: "500",
          rate: "800",
          quality: "一级",
          text: "赚得真多，以后继续",
          region: ["广州", "深圳"]
        },
        {
          year: "2020",
          name: "XX耳机",
          type: "电子",
          cost: "20",
          rate: "10",
          quality: "一级",
          text: "小东西，小率润，看不起",
          region: ["广州", "上海"]
        },
        {
          year: "2020",
          name: "XX平板",
          type: "电子",
          cost: "50",
          rate: "150",
          quality: "一级",
          text: "这这这。。。顾客太好骗了",
          region: ["深圳", "上海"]
        }
      ],
      // 对话框表单数据
      form: {
        year: "",
        name: "",
        type: "",
        cost: "",
        rate: "",
        quality: "",
        region: [],
        text: ""
      }
    };
  },
  // -----------------------------------------------------------------------------

  // --------------------------------------------------------------------------------
  methods: {
    handleCommand(command) {
      this.$message("click on item " + command);
      if (command == "a") {
        this.dialogVisible = true;
      }
    },
    // 将表单数据添加到表格中去
    onSubmit() {
      //console.log(this.table)
      this.table.push(this.form);

      this.dialogVisible = false;
    },
    //获取图标的数据
    getData() {
      var strName = [];
      var numRate = [];
      var numCost = [];
      for (let i = 0; i < this.table.length; i++) {
        strName.push(this.table[i].name);
        numRate.push(parseInt(this.table[i].rate));
        numCost.push(parseInt(this.table[i].cost));
      }
      this.allName = strName;
      this.allRate = numRate;
      this.allCost = numCost;
    },
    //直形图按钮
    dialogFun1() {
      this.getData();
      this.dialog = true;
      //对话框的内容是懒渲染的，即在第一次被打开之前，传入的图表数据时候对话框还没有渲染
      setTimeout(() => {
        //  执行echarts方法
        this.drawLine1();
      }, 500);
    },
    //折线图按钮
    dialogFun2() {
      this.getData();
      this.dialog = true;
      setTimeout(() => {
        this.drawLine2();
      }, 500);
    },
    //饼状形按钮
    dialogFun3() {
      this.getData();
      this.dialog = true;
      setTimeout(() => {
        this.drawLine3();
      }, 500);
    },
    // 图表数据--------------------------------------------------------------------------
    drawLine1() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      // 绘制图表
      myChart.setOption({
        title: { text: "2020年电子产品利润直方图（万）" },
        tooltip: {},
        xAxis: {
          data: this.allName
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            type: "bar",
            data: this.allRate
          }
        ]
      });
    },
    drawLine2() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));

      myChart.setOption({
        title: { text: "2020年利润折线图" },
        xAxis: {
          type: "category",
          data: this.allName
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: this.allRate,
            type: "line"
          }
        ]
      });
    },
    drawLine3() {
      let myChart = this.$echarts.init(document.getElementById("myChart"));
      var arr = [];
      var objs = {};
      for (let i = 0; i < this.table.length; i++) {
        objs.value = this.table[i].cost;
        objs.name = this.table[i].name;
        arr.push(objs);
        objs = {};
      }

      myChart.setOption({
        title: {
          text: "2020年成本份额",

          left: "center"
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: "left",
          data: this.allName
        },

        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            center: ["50%", "60%"],
            data: arr,
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)"
              }
            }
          }
        ]
      });
    }
    // -----------------------------------------------------------------------------------------
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
