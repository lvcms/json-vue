import * as types from './mutation-types'
import { Message } from 'iview'
import Cache from 'lf-cache'

export const thenHandle = ({ commit,state }, response) => {
  console.log(response);
  commit(types.CALLBACK_DATA, response)
}
export const catchHandle = ({ commit,state }, error) => {
  console.log(error.message)
  Message.error('未知系统错误')
  commit(types.CALLBACK_DATA, error)
}
