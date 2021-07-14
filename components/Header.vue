<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-13 23:03:30
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-14 08:57:29
 * @FilePath: \blogBackstage\components\Header.vue
-->
<template>
  <a-layout-header class="header" style="background: #fff; padding: 0">
    <div class="left">
      <a-icon
        class="trigger"
        :type="$store.state.collapsed ? 'menu-unfold' : 'menu-fold'"
        @click="$store.commit('setCollapsed')"
      />
    </div>
    <div class="right">
      <a-avatar
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      />
      <span>松岛川树</span>
    </div>
  </a-layout-header>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>

<style lang="less" scoped>
.header {
  display: -webkit-flex;
  display: flex;
  -webkit-justify-content: space-between;
  justify-content: space-between;
  .right {
    margin-right: 40px;
    font-weight: 500;
    color: #7e7e7e;
    display: -webkit-flex;
    display: flex;
    -webkit-align-items: center;
    align-items: center;
    span:nth-child(2) {
      text-indent: 10px;
    }
  }
}
</style>
