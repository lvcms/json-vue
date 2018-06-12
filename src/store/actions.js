import * as types from './mutation-types'
import { Message } from 'iview'

export const graphqlError = ({ commit,state }, value) => {
  let content = value.replace(/GraphQL error: /, "")
  switch (content) {
    case 'Unauthenticated':
      return '未经认证的'
      break;
    case 'Unauthorized':
      return '未经授权的'
      break;
    default:
      return content
  }
}
