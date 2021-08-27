import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import router from './router/index'
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import './utils/rem'
if (process.env.NODE_ENV === 'development') {
    require('./mock/index.ts')
}

const app = createApp(App)
app.use(ElementPlus)
app.use(router).mount('#app')
