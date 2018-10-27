import * as types from './mutation-types'
export default {
    [types.SET_VUE_ROUTE](state, {vueRoute, data}) {
        state.vueRoute = vueRoute
        state.data.vueRoute = data
    },
}

