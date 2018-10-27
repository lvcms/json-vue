import Vue from 'vue'
import {
    ApolloClient
} from 'apollo-client'
import {
    HttpLink
} from 'apollo-link-http'
import {
    InMemoryCache
} from 'apollo-cache-inmemory'
import {
    setContext
} from 'apollo-link-context'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
    uri: window.config.graphql
})

const authLink = setContext(() => {
    const token = localStorage.getItem('system:token')
    return {
        headers: {
            authorization: token ? `Bearer ${token}` : null
        }
    }
})
const apolloClient = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
    connectToDevTools: true
})

const apolloProvider = new VueApollo({
    defaultClient: apolloClient
})

Vue.use(VueApollo)

export default apolloProvider
