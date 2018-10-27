/**
 * 加载 vue 组件
 *
 */
import Vue from 'vue'
import Vuex from 'vuex'
import store from './../store'

Vue.use(Vuex)

export function initUse(jsonVue) {
    jsonVue.use =  (plugin) =>{
        Vue.use(plugin)
        if (plugin.hasOwnProperty('store')) {
            store.modules[plugin.store.name] = plugin.store
            jsonVue.prototype.store = new Vuex.Store(store)
        }
    }

}
