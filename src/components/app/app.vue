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
    /* 【initVueRoute 获取路由配置参数]
     *  缓存 7 天
    */
    async initVueRoute () {
      let vueRoute = await Cache.remember(this.model + 'vueRoute', async () => {
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
      } , 60*24*7)

      this.$router.addRoutes(vueRoute)
    }
  }
}
</script>
