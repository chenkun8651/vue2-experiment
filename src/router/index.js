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
    path: '/antDesignVue',
    name: 'AntDesignVue',
    component: () => import('../views/AntDesignVue.vue'),
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
    ]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
