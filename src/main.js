// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import '@/utils/global'//全局
import './promission'//这里进行路由后台获取的模拟
import 'element-ui/lib/theme-chalk/index.css';
import '@/styles/index.scss' // global css
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.use(ElementUI)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
