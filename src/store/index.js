
import mutations from './mutations'
import * as actions from './actions'
import * as getters from './getters'

const state = {
    loginOut: false,
    vueRoute: false,
    data:{
        vueRoute:[]
    }
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
