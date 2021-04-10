import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from './views/Home.vue'
import Podcasts from './views/Podcasts.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', name: 'home', component: Home },
  { path: '/podcasts', name: 'podcasts', component: Podcasts },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
