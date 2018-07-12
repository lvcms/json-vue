export const graphqlError = ({ commit, state }, value) => {
  let content = value.replace(/GraphQL error: /, '')
  switch (content) {
    case 'Unauthenticated':
      return '未经认证的'
    case 'Unauthorized':
      return '未经授权的'
    default:
      return content
  }
}
