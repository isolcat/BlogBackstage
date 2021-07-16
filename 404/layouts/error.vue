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
     <div class="main-container">
        <div class="img-container container-item">
             <img src="~/assets/img/和泉纱雾.jpg"  alt="哎呀 不小心走丢了呢 Σ( ° △ °|||)︴">
        </div>

        <div class="text-container container-item">
            <div class="code">404</div>
            <div class="msg">哎呀 不小心走丢了呢 Σ( ° △ °|||)︴</div>
            <a class="action" href="#"><div>返回首页,查看更多内容.</div></a>
        </div>
    </div>
</template>

<script>
export default {
  props: ["error"]
};
</script>
<style lang="less" scoped>
.container * {
    padding: 0;
    margin: 0;
}

html,body {
    height: 10%;
}

body {
    background: rgba(223, 223, 255, 0.39);
    display: flex;
    justify-content: center; 
    align-items: center;     
}

.main-container {
    width: 20%;
    max-width: 100px;
    max-height: 5000px;
    min-width: 600px;
    background-color: white;
    font-size: 0;
    border-radius: 20px;
    box-shadow: 0 0 50px 0 rgba(146, 146, 146, 0.63);
}
.main-container .container-item {
    display: inline-block;
    vertical-align: middle;
    width: 50%;
}

.main-container .img-container {
    background-color: rgba(253, 216, 168, 0.692);
    border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;
}

.main-container .text-container .code {
    font-size: clamp(150px,20vw,200px);
    font-family: 'Arial Narrow';
    color: rgb(38, 38, 194);
    font-weight: bolder;
    text-align: center;
}

.main-container .text-container .msg {
    font-size: 18px;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
}

.main-container .text-container .action {
    color: #0f0f0f;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
    text-decoration-line: none;
}
.main-container .text-container a:hover{
    color: #5bc0de;
}
</style>
