/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-06 11:17:20
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-14 23:17:49
 * @FilePath: \blogBackstage\utils\wow.js
 */
if (typeof window !== "undefined") {
  var { WOW } = require("wowjs");
  require('animate.css/animate.css');
}
class wow {
  animate() {
      if (typeof window !== "undefined") {
        const wow = new WOW({
          boxClass: "wow",
          animateClass: "animate__animated",
          offset: 0,
          mobile: true,
          live: true,
        });
        wow.init();
      }
    }
}

export default wow