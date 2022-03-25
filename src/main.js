import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'
import './assets/css/main.css'


createApp(App).use(router).use(BootstrapIconsPlugin).mount('#app')

import "bootstrap/dist/js/bootstrap.js"

