<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-14 14:05:49
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-15 15:57:44
 * @FilePath: \blogBackstage\pages\user\login.vue
-->
<template>
  <div class="container">
    <!-- banner -->
    <div class="left wow animate__fadeInLeft">
      <div>
        BlogBackstage
      </div>
    </div>

    <div class="right wow animate__fadeInRight">
      <!-- login -->
      <form v-if="hide" action="">
        <div>
          <a-input ref="userNameInput" v-model="eMail" placeholder="邮箱即账号">
            <a-icon slot="prefix" type="mail" />
          </a-input>
        </div>

        <div>
          <a-input-password placeholder="input password" v-model="passWord">
            <a-icon slot="prefix" type="lock" />
          </a-input-password>
        </div>

        <div>
          <a @click="hide = !hide">忘记密码 </a>
          <a-button type="primary" @click="clickLogin">
            登录
          </a-button>
        </div>
      </form>

      <!-- Forget  -->
      <form v-else action="">
        <div>
          <a-input ref="userNameInput" v-model="eMail" placeholder="电子邮箱">
            <a-icon slot="prefix" type="mail" />
          </a-input>
        </div>

        <div>
          <a-input-password placeholder="input password" v-model="passWord">
            <a-icon slot="prefix" type="lock" />
          </a-input-password>
        </div>

        <div>
          <a-input
            ref="userNameInput"
            v-model="eMail"
            placeholder="请输入验证码"
          >
            <a-tooltip class="suffix" slot="suffix">
              <a-button type="primary" @click="sendCode" v-if="cilckTime">
                发送验证码
              </a-button>
              <a-button v-else> <Time remainTime="59" />秒后重新发送 </a-button>
            </a-tooltip>
          </a-input>
        </div>

        <div>
          <a @click="hide = !hide">立即登录 </a>
          <a-button type="primary"> 提交 </a-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { encrypt } from "~/utils/crypto";
import Wow from "../../utils/wow";
const wow = new Wow();
wow.animate();
export default {
  data() {
    return {
      eMail: "",
      passWord: "",
      hide: true,
      cilckTime: true,
      time: 60
    };
  },
  async created() {},
  async mounted() {},
  methods: {
    clickLogin() {
      this.$message.success("登录成功");
      console.log(encrypt(this.passWord));
    },
    sendCode() {
      this.cilckTime = false;
      setTimeout(() => {
        this.cilckTime = true;
      }, 1000 * 59);
    }
  }
};
</script>

<style lang="less" scoped>
@import "~/assets/css/flex.less";
.container {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 50% 1fr;

  // left容器
  .left {
    background: url("~/assets/img/bk.jpg") no-repeat center center fixed;
    .backgroundCover();
    color: aliceblue;
    font-size: 3.125rem;
    .flex();
    .flexContentCenter();
    .flexItemsCenter();
  }

  // right容器
  .right {
    width: 300px;
    margin: auto;
    div {
      margin-top: 20px;
    }
    div:nth-child(3),
    div:nth-child(4) {
      .flex();
      .flexContentBetween();
      .flexItemsCenter();
    }
  }
}

.suffix {
  left: 11px;
}
</style>
