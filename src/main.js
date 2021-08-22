import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css';
import router from './router/index'
import store from './store';
import './assets/style/base.css'
createApp(App).use(ElementPlus, { size: 'small', zIndex: 3000 }).use(router).use(store).mount('#app')
