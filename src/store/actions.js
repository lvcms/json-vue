import * as types from './mutation-types'
import Cache from 'lf-cache'

export const callbackData = ({ commit,state }, data) => {
  commit(types.CALLBACK_DATA, data)
}
