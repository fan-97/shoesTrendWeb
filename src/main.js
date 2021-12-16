// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// 导入路由

import router from './router.js';


// 导入echarts
import ECharts from 'vue-echarts';
// echarts-gl中包含所有图标需要的依赖模块
import 'echarts-gl';

// 手动引入 ECharts 各模块来减小打包体积
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'

// 导入中国地图需要的文件
import "echarts/lib/chart/map";
import "echarts/map/js/china";


// 注册全局组件
Vue.component('v-chart',ECharts);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  // el: '#app',
  components: { App },
  template: '<App/>',
  router
  // render:(h)=>h(App)
}).$mount("#app")

