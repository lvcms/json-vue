import Vue from 'vue'
import App from './components/app'
import router from './router'
import store from './store'
import 'font-awesome/css/font-awesome.css'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'

const httpLink = new HttpLink({
  uri: window.config.graphql,
})

const apolloClient = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
  connectToDevTools: true,
})

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
})

Vue.use(VueApollo)

Vue.config.productionTip = false

export default {
  start (){
    new Vue({
      el: '#app',
      router,
      store,
      provide: apolloProvider.provide(),
      render: h => h(App)
    })
  },
  Vue,
  App,
  router,
  store,
}
