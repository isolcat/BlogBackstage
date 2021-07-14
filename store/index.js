/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-14 07:48:49
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-14 07:49:20
 * @FilePath: \blogBackstage\store\index.js
 */

import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      collapsed: true,
    },
    mutations: {
      setCollapsed(state) {
        state.collapsed = !state.collapsed
      },
   
    },
    actions: {


    }
  })
}

export default createStore
