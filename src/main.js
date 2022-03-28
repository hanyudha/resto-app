import "bootstrap/dist/css/bootstrap.css"
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue'
import VueWriter from 'vue-writer'
import './assets/css/main.css'


createApp(App).use(router).use(BootstrapIconsPlugin).use(VueWriter).mount('#app')

import "bootstrap/dist/js/bootstrap.js"

