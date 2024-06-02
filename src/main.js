import { createApp } from 'vue'
import { createPinia } from 'pinia';
// import main.scss code
import "./assets/styles/main.scss"
// import main.scss code
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')