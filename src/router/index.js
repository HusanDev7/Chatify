import { createRouter, createWebHistory } from 'vue-router';

import Welcome from "@/pages/WelcomePage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/pages/SignInPage.vue')
    },
    {
      path: '/welcome',
      name: 'welcomePage',
      component: () => import('@/pages/WelcomePage.vue')
    },
    {
      path: '/sign-up',
      name: 'SignUpPage',
      component: () => import('@/pages/SignUpPage.vue')
    },
    {
      path: '/users',
      name: "SearchUsersPage",
      component: () => import('@/pages/SearchUsersPage.vue')
    },
  ]
});

export default router;
