
import './assets/main.css'

// import { createApp } from 'vue'
import { ViteSSG } from 'vite-ssg'
import App from './App.vue'

// createApp(App).mount('#app')
export const createApp = ViteSSG(App)