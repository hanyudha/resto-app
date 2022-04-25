import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'

import VueToast from 'vue-toast-notification'
import 'vue-toast-notification/dist/theme-default.css' 
import VueWriter from 'vue-writer'
import './assets/css/main.css'


createApp(App).use(router).use(BootstrapIconsPlugin).use(VueWriter).use(VueToast).mount('#app')

import "bootstrap/dist/js/bootstrap.js"

