import Vue from 'vue'
import Router from 'vue-router'
import MainComponent from "../components/main/index.vue"
import YaowenComponent from "../components/yaowen/YaowenComponent.vue"
import TiyuComponent from "../components/tiyu/TiyuComponent.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component:MainComponent 
    },
    {
       path: '/yaowen',
      name: 'main',
      component:YaowenComponent 
    },
    {
       path: '/tiyu',
      name: 'tiyu',
      component:TiyuComponent 
    }
  ]
})
