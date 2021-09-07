import Vue from 'vue'
import VueI18n from 'vue-i18n'

// PC端
import AntDesignVue from 'ant-design-vue'
import ElementUI from 'element-ui'
import AtUI from 'at-ui'
import zhLocale from 'at-ui/dist/locale/zh-CN'
import ViewDesign from 'view-design';

import 'ant-design-vue/dist/antd.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'at-ui-style'
import 'view-design/dist/styles/iview.css'

import App from './App.vue'
import router from './router/index.js'
import './assets/style/tailwind.css'
import './assets/style/global.css'

Vue.config.productionTip = false
Vue.use(AntDesignVue)
Vue.use(ElementUI)
Vue.use(AtUI)
Vue.use(ViewDesign)

// 设置中文
Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    'zh': { ...zhLocale }
  }
})

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
