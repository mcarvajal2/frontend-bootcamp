import { createApp } from 'vue';
import App from './App.vue';
import store from './store'; // Importa el store
import router from './router'; // Importa el router

createApp(App).use(store).use(router).mount('#app');