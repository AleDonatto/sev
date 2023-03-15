import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import './assets/main.css'

import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'


Vue.config.productionTip = false
Vue.use(CoolLightBox)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
