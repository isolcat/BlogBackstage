<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-06-28 00:58:47
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-14 08:07:49
 * @FilePath: \blogBackstage\layouts\default.vue
-->
<template>
  <a-layout id="components-layout-demo-custom-trigger">
      <Sider />
    <a-layout>
      <Header />
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
         <Nuxt />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
</template>
<script>
import Sider from '~/components/Sider.vue';
export default {
  components: { Sider },
  data() {
    return {
      collapsed: false,
    };
  },
    created() {
    if (typeof window !== "undefined") {
      let loading = document.getElementById("app");
      if (loading !== null) {
        document.body.removeChild(loading);
      }
    }
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
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
