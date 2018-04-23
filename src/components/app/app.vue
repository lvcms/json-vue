<template>
  <router-view></router-view>
</template>

<script>
import Cache from 'lf-cache'
import gql from 'graphql-tag'
import _ from 'lodash'

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
    /* 【initVueRoute 获取路由配置参数]
     *  缓存 7 天
    */
    initVueRoute () {
      Cache.remember(this.model + 'vueRoute', async () => {
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
        return apollo.data.vueRouter
      } , 60*24*7).then((data) => {
        //更改 preventExtensions
        let vueRoute = JSON.parse(JSON.stringify(data))
        this.$router.addRoutes(vueRoute)
      })
    }
  }
}
</script>
<style>
html,body{
    width: 100%;
    height: 100%;
}
</style>
