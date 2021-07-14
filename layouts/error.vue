<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-13 23:06:21
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-14 16:07:56
 * @FilePath: \blogBackstage\layouts\error.vue
-->

<template>
  <div class="container">
    <div>
      <h1 v-if="error.statusCode === 404">糟糕！找不到这个页面</h1>
      <h1 v-else>诶呀~ 发生了未知的错误</h1>
      <a-button
        class="button"
        @click="$router.push({ name: 'index' })"
        type="primary"
      >
        回到首页
      </a-button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>
<style lang="less" scoped>
.container {
  min-height: 90vh;
  display: -webkit-flex;
  display: flex;
  div {
    width: 100%;
    margin: auto;
    text-align: center;
  }
}
</style>
