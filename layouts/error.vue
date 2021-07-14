<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-13 23:06:21
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-13 23:07:52
 * @FilePath: \blogBackstage\layouts\error.vue
-->

<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
</script>
<style scoped>
.container{
    min-height: 90vh;
}
</style>