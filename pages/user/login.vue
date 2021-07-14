<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-14 14:05:49
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-14 17:36:45
 * @FilePath: \blogBackstage\pages\user\login.vue
-->
<template>
  <div class="container">
    
    <!-- banner -->
    <div class="left">
      <div>
        XXX 后台管理系统
      </div>
    </div>

    <!-- login -->
    <div class="right">
      <form action="">
        <div>
          <a-input
            ref="userNameInput"
            v-model="eMail"
            placeholder="Basic usage"
          >
            <a-icon slot="prefix" type="mail" />
          </a-input>
        </div>

        <div>
          <a-input-password placeholder="input password" v-model="passWord">
            <a-icon slot="prefix" type="lock" />
          </a-input-password>
        </div>

        <div>
          <a-button type="primary" @click="clickLogin">
            登录
          </a-button>
          <nuxt-link to="/user">忘记密码</nuxt-link>
        </div>
      </form>
    </div>
    
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { encrypt } from "~/utils/crypto";
export default Vue.extend({
  data() {
    return {
      eMail: "",
      passWord: ""
    };
  },
  async created() {},
  async mounted() {},
  methods: {
    clickLogin(): void {
      this.$message.success("登录成功");
      console.log(encrypt(this.passWord));
    }
  }
});
</script>

<style lang="less" scoped>
.flex {
  display: -webkit-flex;
  display: flex;
}

.flexContentCenter {
  -webkit-justify-content: center;
  justify-content: center;
}

.flexContentBetween {
  -webkit-justify-content: space-between;
  justify-content: space-between;
}

.flexItemsCenter {
  -webkit-align-items: center;
  align-items: center;
}

.backgroundCover {
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

.container {
  min-height: 100vh;
  .flex();

  // left容器
  .left {
    width: 50%;
    background: url("https://picsum.photos/950/950?blur") no-repeat center
      center fixed;
    .flex();
    .flexContentCenter();
    .backgroundCover();
    .flexItemsCenter();
    color: aliceblue;
    font-size: 3.125rem;
  }

  // right容器
  .right {
    width: 300px;
    margin: auto;
    div {
      margin-top: 20px;
    }
    div:nth-child(3) {
      .flex();
      .flexContentBetween();
      .flexItemsCenter();
    }
  }
}
</style>
