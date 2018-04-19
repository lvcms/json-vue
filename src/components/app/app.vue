<template>
  <router-view></router-view>
</template>

<script>
import Cache from 'lf-cache'
import gql from 'graphql-tag'

export default {
  name: 'app',
  data () {
    return {
      model: this.$config.model
    }
  },
  created () {
    this.initVueRoute()
  },
  methods: {
    /* [initVueRoute 获取路由配置参数] */
    async initVueRoute () {
      if (!await Cache.has(this.model + 'vueRoute')){
       let apollo = await this.$apollo.query({
              query: gql`query ($model: String!) {
                vueRouter(model: $model){
                  path
                  name
                  component
                  children
                }
              }`,
              variables: {
                model: this.model
              }
            })
        await Cache.put(this.model + 'vueRoute', apollo.data.vueRouter, 1)
      }
      let vueRoute = await Cache.get(this.model + 'vueRoute')
      this.$router.addRoutes(vueRoute)
    }
  }
}
</script>
