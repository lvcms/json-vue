import {
    initUse
} from './use'
import Vue from 'vue'
import apolloProvider from './../apollo'
import App from './../components/app'
import router from './../router'

Vue.config.productionTip = false
Vue.prototype.$config = window.config
Vue.prototype.$event = new Vue()
window.router = router

export function initGlobalAPI(jsonVue) {

    jsonVue.prototype._init = function (options) {
        new Vue({
            el: options.el,
            router,
            store: this.store,
            apolloProvider,
            render: h => h(App)
        })
    }
    initUse(jsonVue)
}

