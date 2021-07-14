<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-13 22:32:11
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-14 08:33:11
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
    console.log(params);
    redirect("/dashboard/workplace");
  }
});
</script>

<style lang="less" scoped>
.container {
  min-height: 90vh;
}
</style>
