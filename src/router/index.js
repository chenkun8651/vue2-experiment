import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // UIComponents
    path: '/UIComponents',
    name: 'UIComponents',
    redirect: '/UIComponents/button',
    component: () => import('../views/UIComponents.vue'),
    children: [
      {
        path: "/UIComponents/button",
        name: "Button",
        component: () => import("../components/UIComponents/Button.vue"),
      },
      {
        path: "/UIComponents/icon",
        name: "Icon",
        component: () => import("../components/UIComponents/Icon.vue"),
      },
      {
        path: "/UIComponents/badge",
        name: "Badge",
        component: () => import("../components/UIComponents/Badge.vue"),
      },
      {
        path: "/UIComponents/tag",
        name: "Tag",
        component: () => import("../components/UIComponents/Tag.vue"),
      },
      {
        path: "/UIComponents/tooltip",
        name: "Tag",
        component: () => import("../components/UIComponents/Tooltip.vue"),
      },
      {
        path: "/UIComponents/spin",
        name: "Spin",
        component: () => import("../components/UIComponents/Spin.vue"),
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
