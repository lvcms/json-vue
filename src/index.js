import Vue from 'vue'
import apolloProvider from './core/apollo'
import App from './components/app'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'
import 'file-icons-js/css/style.css'

Vue.config.productionTip = false
Vue.prototype.$config = window.config
Vue.prototype.$event = new Vue()

window.router = router

export default function (options) {
    new Vue({
        el: options.el,
        router,
        store,
        apolloProvider,
        render: h => h(App)
    })
}
