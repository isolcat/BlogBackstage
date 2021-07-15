<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-06-28 00:58:47
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-15 09:34:58
 * @FilePath: \blogBackstage\layouts\default.vue
-->
<template>
  <div>
    <a-layout v-if="hide" id="components-layout-demo-custom-trigger">
      <Sider />
      <a-layout>
        <Header />
        <a-layout-content
          :style="{
            margin: '24px 16px',
            padding: '24px',
            minHeight: '280px'
          }"
        >
          <Nuxt />
        </a-layout-content>
      </a-layout>
    </a-layout>
    <div v-else>
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Sider from "~/components/Sider.vue";
export default {
  components: { Sider },
  data() {
    return {
      collapsed: false,
      hide: true
    };
  },
  created() {
    if (this.$route.name == "user-login") {
      this.hide = false;
    }
    if (typeof window !== "undefined") {
      let loading = document.getElementById("app");
      if (loading !== null) {
        document.body.removeChild(loading);
      }
    }
  },
  mounted() {}
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
