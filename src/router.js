import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import( /* webpackChunkName: "about" */ './views/login/login.vue')
    },
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: '/teamPlan',
      children: [
        {
          path: '/home',
          component: () => import('./views/Home.vue')
        },
        {
          path: '/teamPlan',
          component: () => import('./views/demandPlanning/teamPlan.vue')
        },
        {
          path: '/planApproval',
          component: () => import('./views/demandPlanning/planApproval.vue')
        },
        {
          path: '/workshop',
          component: () => import('./views/demandPlanning/workshop.vue')
        }
    ]
    }
  ]
})