<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-15 17:02:02
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-16 08:48:07
 * @FilePath: \blogBackstage\components\Echarts.vue
-->
<template>
  <div id="echarts">
    <div id="myChart"></div>
    <div id="myChart2"></div>
  </div>
</template>
<script>
import "../utils/westeros"; //下载自定义主题
export default {
  name: "Echarts",
  data() {
    return {};
  },
  props: ["query"],
  beforeMount() {
    console.log(this.query);
  },
  methods: {
    echartsInit() {
      // 找到容器
      let myChart = this.$echarts.init(
        document.getElementById("myChart"),
        "westeros"
      );
      // 开始渲染
      myChart.setOption({
        title: { text: "用户增长趋势" },
        xAxis: {
          type: "category",
          boundaryGap: false,
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line",
            areaStyle: {}
          }
        ]
      });
    },

    echartsInit2() {
      let myChart = this.$echarts.init(
        document.getElementById("myChart2"),
        "westeros"
      );
      myChart.setOption({
        title: { text: "文章分类占比" },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: "55%",
            data: [
              { value: 235, name: "next" },
              { value: 274, name: "js" },
              { value: 310, name: "vue" },
              { value: 335, name: "nuxt" },
              { value: 400, name: "egg" }
            ]
          }
        ]
      });
    }
  },
  mounted() {
    const actions = () => {
      const functionA = () => {
        this.echartsInit();
      };
      const functionB = () => {
        this.echartsInit2();
      };
      return new Map([
        [/^[1]$/, functionA],
        [/^[2]$/, functionB]

        //...
      ]);
    };

    const onButtonClick = status => {
      let action = [...actions()].filter(([key, value]) =>
        key.test(`${status}`)
      );
      action.forEach(([key, value]) => value.call(this));
    };
    onButtonClick(this.query);
  }
};
</script>
<style scoped lang="less">
#myChart {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: left;
}
#myChart2 {
  width: 600px;
  height: 300px;
  margin-left: auto;
  margin-right: auto;
  float: right;
}
</style>
