import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

Vue.use(Vuex)

const state = {
  /* 设置api通信url */
  apiUrl: window.config.apiUrl
}
export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})
