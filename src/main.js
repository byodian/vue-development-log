import Vue from 'vue'
import App from './App.vue'
import dataV from '@jiaminghi/data-view'
import router from './router'

// 导入全局样式
import '@/styles/index.scss'
// 注册全局组件
import '@/components/_global'
import SlidePlugin from '@/plugins/slide'

Vue.use(dataV)
Vue.use(SlidePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
