import * as types from './mutation-types'
export default {
    [types.SET_VUE_ROUTE](state, {vueRoute}) {
        state.vueRoute = vueRoute
    },
    [types.SET_ROOT_FORM_SUBMIT](state, {
        result
    }) {
        state.formSubmit = result
    },
}

