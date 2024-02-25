import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Brazil from '@/views/Brazil.vue'
import Jamaica from '@/views/Jamaica.vue'
import Hawaii from '@/views/Hawaii.vue'
import Panama from '@/views/Panama.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
  {
    path: '/brazil',
    name: 'Brazil',
    component: Brazil,
  },
  {
    path: '/jamaica',
    name: 'Jamaica',
    component: Jamaica,
  },
  {
    path: '/hawaii',
    name: 'Hawaii',
    component: Hawaii,
  },
  {
    path: '/panama',
    name: 'Panama',
    component: Panama,
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
