<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-13 22:32:11
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-15 10:14:30
 * @FilePath: \blogBackstage\pages\index.vue
-->
<template>
  <div class="container"></div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  async asyncData({ redirect, params }) {
    redirect("/dashboard/analysis");
  }
});
</script>

<style lang="less" scoped>
  
</style>
