import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import Podcast from './views/Podcast.vue'

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/podcast', name: 'podcast', component: Podcast },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
