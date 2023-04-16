import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './plugins/vue-route'
import pinia from './plugins/pinia'
import alertaApp from "./components/alertaApp.vue"

const app = createApp(App)
app.component("AlertaApp",alertaApp)
app.use(router)
app.use(pinia)
app.mount('#app')
