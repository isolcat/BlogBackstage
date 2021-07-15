/*
 * @Descripttion: 
 * @version: 
 * @Author: 松岛川树
 * @Date: 2021-07-13 22:32:11
 * @LastEditors: 松岛川树
 * @LastEditTime: 2021-07-15 16:22:59
 * @FilePath: \blogBackstage\plugins\antd-ui.js
 */
import Vue from 'vue'
// import Antd from 'ant-design-vue/lib'
import {
    Col, Row,Statistic,
    Form, Button, Layout, Icon, BackTop, Tag, Space,Tabs,Input,Divider,Card,
     Breadcrumb, Comment, Avatar, Menu, Affix,message,Tooltip,notification,Tree,List,Select,Switch
} from 'ant-design-vue';

Vue.prototype.$notification = notification;
Vue.prototype.$message = message;
Vue.use(Col).use(Row).use(Layout).use(Menu).use(Affix).use(Tabs).use(Input).use(Divider).use(Statistic).use(Card)
    .use(Form).use(Button).use(Icon).use(BackTop).use(Space).use(Tooltip).use(List).use(Select).use(Switch)
    .use(Breadcrumb).use(Tag).use(Comment).use(Avatar).use(Tree);