/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-06-28 09:57:48
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-14 14:49:58
 * @FilePath: \blogBackstage\plugins\api.js
 */

//(1) 自定义函数

import Qs from 'qs';
const request = {

    /**
     * @name: 获取音乐
     */
    getMusic: () => {
        return axios.get(`https://mock.mengxuegu.com/mock/606f08eeb43557571f7269a4/shequ/music`)
    },

    /**
     * @name: 用户登录
     */
    login: (params) => {
        console.log(Qs.stringify(params))
        return axios.post(`/login`, Qs.stringify(params))
    },


    //......
}
//(2) 定义axios变量等待接收axios,保证axios可用
var axios = null
export default ({
    $axios
}, inject) => {

    //3 保存内置的axios
    axios = $axios

    //4) 将自定义函数交于nuxt
    inject('request', request)
}