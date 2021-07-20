import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'
import moment from "moment";
moment.locale('fr');

const app = createApp(App);

app.use(store).use(router).mount('#app')

app.config.globalProperties.$moment = moment;
