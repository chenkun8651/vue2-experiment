import Vue from 'vue'
import VueRouter from 'vue-router'
import { UIComponentsMenu } from "./menu"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Home',
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/UIComponents',
    name: 'UIComponents',
    redirect: '/UIComponents/button',
    children: UIComponentsMenu,
    component: () => import('../views/UIComponents.vue'),
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
