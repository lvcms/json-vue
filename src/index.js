import Vue from 'vue'
import App from './components/app'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'

Vue.config.productionTip = false

export default {
  start (){
    new Vue({
      el: '#app',
      router,
      store,
      render: h => h(App)
    })
  },
  Vue,
  App,
  router,
  store,
}
