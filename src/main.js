import Vue from 'vue'
import AntD from "ant-design-vue"

import App from './App.vue'
import router from './router'

import 'ant-design-vue/dist/antd.css'

Vue.config.productionTip = false
Vue.use(AntD);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
