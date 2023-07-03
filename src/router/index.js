import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import VeeValidate from '@/components/VeeValidate.vue'
import TranslateI18n from '../components/HelloI18n.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/vee-validate',
    name: 'veevalidate',
    component: VeeValidate
  },
  {
    path: '/translateI18n',
    name: 'translateI18n',
    component: TranslateI18n
  },
  {
    path: '/translate',
    name: 'translate',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Translate.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
