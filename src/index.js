import {initGlobalAPI} from './global-api'
import 'font-awesome/css/font-awesome.css'
import 'file-icons-js/css/style.css'

function JsonVue(options) {
    if (process.env.NODE_ENV !== 'production' &&
        !(this instanceof JsonVue)
    ) {
        warn('JsonVue is a constructor and should be called with the `new` keyword')
    }
    this._init(options)
}
initGlobalAPI(JsonVue)
export default JsonVue
