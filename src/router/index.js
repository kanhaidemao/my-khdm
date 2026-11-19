import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// 使用 hash 模式，静态托管无需额外服务端配置
const routes = [
  { path: '/', name: 'home', component: Home },
  { path: '/works', name: 'works', component: () => import('../views/Works.vue') },
  { path: '/about', name: 'about', component: () => import('../views/About.vue') },
  { path: '/contact', name: 'contact', component: () => import('../views/Contact.vue') }
]

export default createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 })
})
