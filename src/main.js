import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import i18n from './i18n'
import router from './router'

createApp(App).use(router).use(i18n).use(createPinia()).mount('#app')
