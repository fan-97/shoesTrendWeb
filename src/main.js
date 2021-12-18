import { createApp } from 'vue'
import App from './App.vue'
// 导入路由
import router from './router.js';
// 导入echarts
import ECharts from 'vue-echarts';
// echarts-gl中包含所有图标需要的依赖模块
import 'echarts-gl';
// 导入ELEMENTUI
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.component('v-chart', ECharts);
app.use(ElementPlus);
app.use(router);
app.config.productionTip = false;
app.mount('#app')