import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    // UIComponents
    path: '/UIComponents',
    name: 'UIComponents',
    redirect: '/UIComponents/button',
    component: () => import('../views/UIComponents.vue'),
    children: [
      {
        path: "/UIComponents/avatar",
        name: "Avatar",
        component: () => import("../components/UIComponents/Avatar.vue"),
      },
      {
        path: "/UIComponents/badge",
        name: "Badge",
        component: () => import("../components/UIComponents/Badge.vue"),
      },
      {
        path: "/UIComponents/button",
        name: "Button",
        component: () => import("../components/UIComponents/Button.vue"),
      },
      {
        path: "/UIComponents/calendar",
        name: "Calendar",
        component: () => import("../components/UIComponents/Calendar.vue"),
      },
      {
        path: "/UIComponents/card",
        name: "Card",
        component: () => import("../components/UIComponents/Card.vue"),
      },
      {
        path: "/UIComponents/carousel",
        name: "Carousel",
        component: () => import("../components/UIComponents/Carousel.vue"),
      },
      {
        path: "/UIComponents/collapse",
        name: "Collapse",
        component: () => import("../components/UIComponents/Collapse.vue"),
      },
      {
        path: "/UIComponents/divider",
        name: "Divider",
        component: () => import("../components/UIComponents/Divider.vue"),
      },
      {
        path: "/UIComponents/icon",
        name: "Icon",
        component: () => import("../components/UIComponents/Icon.vue"),
      },
      {
        path: "/UIComponents/spin",
        name: "Spin",
        component: () => import("../components/UIComponents/Spin.vue"),
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
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
