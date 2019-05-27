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
        },
        {
          path: '/demand',
          component: () => import('./views/demandPlanning/demand.vue')
        },
        {
          path: '/outWarehouse',
          component: () => import('./views/goodsPut/outWarehouse.vue')
        },
        {
          path: '/procurement',
          component: () => import('./views/goodsPut/procurement.vue')
        },
        {
          path: '/allocation',
          component: () => import('./views/goodsProvide/allocation.vue')
        },
        {
          path: '/exchange',
          component: () => import('./views/goodsProvide/exchange.vue')
        },
        {
          path: '/personalUse',
          component: () => import('./views/goodsProvide/personalUse.vue')
        },
        {
          path: '/provide',
          component: () => import('./views/goodsProvide/provide.vue')
        },
        {
          path: '/teamUse',
          component: () => import('./views/goodsProvide/teamUse.vue')
        },
        {
          path: '/workshopUse',
          component: () => import('./views/goodsProvide/workshopUse.vue')
        },
        {
          path: '/plan',
          component: () => import('./views/period/plan.vue')
        },
        {
          path: '/planReview',
          component: () => import('./views/period/planReview.vue')
        },
        {
          path: '/temporaryPlan',
          component: () => import('./views/period/temporaryPlan.vue')
        },
        {
          path: '/temporaryAudit',
          component: () => import('./views/period/temporaryAudit.vue')
        },
        {
          path: '/pauseRecord',
          component: () => import('./views/period/pauseRecord.vue')
        },
        {
          path: '/detail',
          component: () => import('./views/storeManagement/detail.vue')
        },
        {
          path: '/costManagement',
          component: () => import('./views/storeManagement/costManagement.vue')
        },
        {
          path: '/goodsInfo',
          component: () => import('./views/basicInformation/goodsInfo.vue')
        },
        {
          path: '/laborInfo',
          component: () => import('./views/basicInformation/laborInfo.vue')
        }
    ]
    }
  ]
})