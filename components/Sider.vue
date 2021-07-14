<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-13 23:02:14
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-14 09:28:33
 * @FilePath: \blogBackstage\components\Sider.vue
-->

<template>
  <a-layout-sider v-model="$store.state.collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item
        key="1"
        @click="$router.push({ name: 'dashboard-analysis' })"
      >
        <a-icon type="upload" />
        <span>仪表盘</span>
      </a-menu-item>

      <a-menu-item
        key="2"
        @click="$router.push({ name: 'dashboard-workplace' })"
      >
        <a-icon type="video-camera" />
        <span>工作台</span>
      </a-menu-item>

      <a-menu-item key="3" @click="$router.push({ name: 'account' })">
        <a-icon type="user" />
        <span>个人页</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped></style>
