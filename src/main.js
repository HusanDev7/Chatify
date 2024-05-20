import { createApp } from 'vue'
import { createPinia } from 'pinia'

// imoprt firebase
import { initializeApp } from "firebase/app";
// imoprt firebase

const firebaseConfig = {
  apiKey: "AIzaSyBbNIVTFzUm6UNyou81oWjwLBBA6QiqnTQ",
  authDomain: "chatify-3c320.firebaseapp.com",
  projectId: "chatify-3c320",
  storageBucket: "chatify-3c320.appspot.com",
  messagingSenderId: "237369105741",
  appId: "1:237369105741:web:5dee5f0e8f6b81178eab04"
};


initializeApp(firebaseConfig);

// import main.scss code
import "./assets/styles/main.scss"
// import main.scss code
import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')