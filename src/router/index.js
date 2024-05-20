import { createRouter, createWebHistory } from 'vue-router'

import Welcome from "@/pages/Welcome.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/auth',
      name: 'authPage',
      component: () => import('@/pages/AuthPage.vue')
    },
    {
      path: '/welcome',
      name: 'welcomePage',
      component: () => import('@/pages/Welcome.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/pages/SignIn.vue')
    }
  ]
})

export default router
