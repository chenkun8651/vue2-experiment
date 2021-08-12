import Vue from 'vue'
import AntDesignVue from 'ant-design-vue'
import ElementUI from 'element-ui'
import AtUI from 'at-ui'
import ViewDesign from 'view-design';

import VueI18n from 'vue-i18n'
import zhLocale from 'at-ui/dist/locale/zh-CN'

import App from './App.vue'
import router from './router'

import 'ant-design-vue/dist/antd.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'at-ui-style'
import 'view-design/dist/styles/iview.css'
import './assets/global.css'

Vue.config.productionTip = false

Vue.use(AntDesignVue)
Vue.use(ElementUI)
Vue.use(AtUI)
Vue.use(ViewDesign)

Vue.use(VueI18n)
// AtUI设置中文
const i18n = new VueI18n({
  locale: 'zh',
  fallbackLocale: 'zh',
  messages: {
    'zh': { ...zhLocale }
  }
})
AtUI.i18n((key, value) => i18n.t(key, value))

new Vue({
  i18n,
  router,
  render: h => h(App)
}).$mount('#app')
