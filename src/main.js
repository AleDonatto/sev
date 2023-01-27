import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

//import {Drag, Drop} from 'vue-drag-drop';

import './assets/main.css'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import 'animate.css';

//Vue EASYLightBox
//import VueEasyLightbox from 'vue-easy-lightbox'
//import 'vue-easy-lightbox/external-css/vue-easy-lightbox.css'

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi', // This is already the default value - only for display purposes
  },
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vuetify)
//app.use(VueEasyLightbox)
//app.component('drag',Drag)
//app.component('drop',Drop)
//app.use(VueDragDrop)
app.mount('#app')
