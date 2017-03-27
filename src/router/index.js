import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import List from '@/components/list'
import Table from '@/components/table'
import Articles from '@/components/articles'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/list/:id',
      component: List
    },
    {
      path: '/table',
      component: Table
    },
    {
      path: '/articles',
      component: Articles
    }]
})
