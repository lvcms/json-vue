
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
    loginOut: false,
    vueRoute: [],
    formSubmit:{}, // form 提交 数据监听
}
const modules = {
}
export default {
    state,
    getters,
    mutations,
    actions,
    modules
}
