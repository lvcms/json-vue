import Vue from 'vue'
import App from './components/app'
import router from './router'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false
//注册全局
// window.axios = require('axios')
// window._ = require('lodash')
// window.Vue = Vue
// window.router = router

export default {
  start (){
    new Vue({
      el: '#app',
      router,
      render: h => h(App)
    })
  },
  Vue,
  App,
  router,
}
