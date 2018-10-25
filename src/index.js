import Vue from 'vue'
import initVue from './core/initVue'
import apolloProvider from './core/initApollo'
import App from './components/app'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'
import 'file-icons-js/css/style.css'

Vue.config.productionTip = false
Vue.prototype.$config = window.config
Vue.prototype.$event = new Vue()

window.router = router

// export default {
//   start (){
//     new Vue({
//       el: '#app',
//       router,
//       store,
//       apolloProvider,
//       render: h => h(App)
//     })
//   },
//   Vue,
//   App,
//   router,
//   store,
// }

export default function (options) {
    initVue({
        el: options.el,
        router,
        store,
        apolloProvider,
        render: h => h(App)
    })
}
