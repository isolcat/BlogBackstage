<!--
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-14 14:06:23
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-14 16:11:05
 * @FilePath: \blogBackstage\pages\user\index.vue
-->

<script>
export default {
  data() {
    return {
      posts: []
    };
  },
  async asyncData({ redirect, params }) {
    redirect("/user/login");
  },
  mounted() {
    this.a();
  },
  methods: {
    async a() {
      this.posts = await this.$axios({
        url: "https://api.nuxtjs.dev/posts",
        method: "get"
      });

      console.log(this.posts);
    }
  }
};
</script>

<style lang="less" scoped></style>
