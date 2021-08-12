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
    // AntDesignVue
    path: '/UIComponents',
    name: 'UIComponents',
    component: () => import('../views/UIComponents.vue'),
    redirect: '/antDesignVue/basics',
    children: [
      {
        path: "/antDesignVue/basics",
        name: "Basics",
        component: () => import("../components/AntDesignVue/Basics.vue"),
      },
      {
        path: "/antDesignVue/navigation",
        name: "Navigation",
        component: () => import("../components/AntDesignVue/Navigation.vue"),
      },
      {
        path: "/antDesignVue/form",
        name: "Form",
        component: () => import("../components/AntDesignVue/Form.vue"),
      },
      {
        path: "/antDesignVue/display",
        name: "Display",
        component: () => import("../components/AntDesignVue/Display.vue"),
      },
      {
        path: "/antDesignVue/feedback",
        name: "Feedback",
        component: () => import("../components/AntDesignVue/Feedback.vue"),
      },
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
