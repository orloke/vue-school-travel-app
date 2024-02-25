import Home from '@/views/Home.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/destination/:id',
    name: 'destination.show',
    component: () => import('@/views/DestinationShow.vue'),
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
