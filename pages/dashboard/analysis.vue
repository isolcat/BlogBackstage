<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-14 09:27:34
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-15 17:57:35
 * @FilePath: \blogBackstage\pages\dashboard\analysis.vue
-->

<template>
  <div class="container wow animate__backInDown ">
    <!-- top -->
    <div class="top">
      <a-row>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
          <div class="card">
            <span>
              文章数
            </span>
            <h1>
              339
            </h1>
            <div style="background: #eee; padding: 30px">
              <a-row>
                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
                  <div class="👈">
                    <a-statistic
                      title="周同比"
                      :value="11.28"
                      :precision="2"
                      suffix="%"
                      :value-style="{ color: '#3f8600' }"
                      style="margin-right: 50px"
                    >
                      <template #prefix>
                        <a-icon type="arrow-up" />
                      </template>
                    </a-statistic>
                  </div>
                </a-col>
                <a-col :xs="24" :sm="24" :md="24" :lg="24" :xl="12">
                  <div class="👉">
                    <a-statistic
                      title="日同比"
                      :value="9.3"
                      :precision="2"
                      suffix="%"
                      class="demo-class"
                      :value-style="{ color: '#cf1322' }"
                    >
                      <template #prefix>
                        <a-icon type="arrow-down" />
                      </template>
                    </a-statistic>
                  </div>
                </a-col>
              </a-row>
            </div>
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
          <div class="card">
            <span>用户数</span>
            <h1>
              12321
            </h1>
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
          <div class="card">
            <span>访问量</span>
            <h1>
              12321
            </h1>
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="12" :lg="12" :xl="6">
          <div class="card">
            <span>搜索量</span>
            <h1>
              12321
            </h1>
          </div>
        </a-col>
      </a-row>
    </div>

    <!-- middle -->
    <div class="middle">
      <a-row>
        <a-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
          <div class="card">
            <!-- tabs  -->
            <a-tabs default-active-key="1" @change="callback">
              <a-tab-pane key="1" tab="用户新增量">
                用户新增量
              </a-tab-pane>
              <a-tab-pane key="2" tab="文章新增量" force-render>
                文章新增量
              </a-tab-pane>
              <a-tab-pane key="3" tab="访问量">
                访问量
              </a-tab-pane>
            </a-tabs>
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
          <div class="card">
            <h4>热门文章排行</h4>
            <ul>
              <li v-for="item in 6" :key="item.value">
                <span :class="item <= 3 ? 'active' : ''">{{ item }}</span
                >{{ item }}
              </li>
            </ul>
          </div>
        </a-col>
      </a-row>
    </div>

    <!-- bottom -->
    <div>
      <a-row>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="card">
            <h1>线上热门搜索</h1>
            <a-divider dashed />
          </div>
        </a-col>
        <a-col :xs="24" :sm="24" :md="24" :lg="12" :xl="12">
          <div class="card">
            <h1>文章类别占比</h1>
            <a-divider dashed />
          </div>
        </a-col>
      </a-row>
    </div>
  </div>
</template>

<script lang="ts">
import Wow from "../../utils/wow";
const wow = new Wow();
wow.animate();

import Vue from "vue";

export default Vue.extend({
  data() {
    return {};
  },
  mounted() {},
  methods: {
    callback(key: string) {
      console.log(key);
    }
  }
});
</script>

<style lang="less" scoped>
.container {
  .card {
    background: #fff;
    margin: 10px;
    height: 11.3125rem;
    padding: 1.25rem;
  }
  .top {
    .card {
      height: 300px;
      h1 {
        font-size: 1.5625rem;
         color: #516b91;
      }
      .👈,
      .👉 {
        text-align: left;
      }
    }
  }
  .middle {
    .card {
      height: 400px;
      ul,
      li {
        margin: 20px 0 0;
        padding: 0;
        list-style: none;
      }
      ul {
        li {
          .active {
            background-color: #314659;
            color: #fff;
          }

          span {
            padding-left: 5px;
            padding-right: 5px;
            background: rgb(216, 215, 215);
            margin-right: 10px;
            border-radius: 5px;
          }
        }
      }
    }
  }
}
</style>
