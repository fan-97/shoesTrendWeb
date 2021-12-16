# vue-echarts-demo

> 这是一个演示在vue项目中如何使用echarts的示例项目; 此项目使用vue-cli-2.9版本进行初始化.

## vue-echarts

> vue-charts是基于echarts的一层封装, 目的是更方便的在vue项目中使用echarts图表进行数据展示.

### 安装依赖

#### 所以依赖包
- `echarts`: `echarts`的核心包
- `vue-echarts`:对echarts的封装, 对外提供`v-chart`组件, 方便使用echarts进行数据图表的展示.
- `echarts-gl`: 提供了`echarts`中所有图表所需要的依赖模块, 也可根据具体使用的图表,按需引入所需依赖模块. 

### 在项目中使用

#### 全局注册echarts

- main.js
```js
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// 导入echarts
import ECharts from 'vue-echarts';
// echarts-gl中包含所有图标需要的依赖模块
import 'echarts-gl';

// 手动引入 ECharts 各模块来减小打包体积
// import 'echarts/lib/chart/bar'
// import 'echarts/lib/component/tooltip'

// 注册全局组件
Vue.component('v-chart',ECharts);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

```

#### 按需注册

> 在组件中注册echarts

- js部分代码
```js
import ECharts from 'vue-echarts';
// echarts-gl包含大部分图表所需要的依赖模块
import 'echarts-gl';

// 按需引入不同的图表需要的依赖
// import 'echarts/lib/chart/line';
// import 'echarts/lib/component/polar';
// import 'echarts/lib/chart/gauge';

export default {
  name: 'HelloWorld',
  components:{
      'v-chart': ECharts
  },
  data(){
      return {
           //堆叠折线图所需参数对象   
           myline:{
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data:['邮件营销','联盟广告','视频广告','直接访问','搜索引擎']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['周一','周二','周三','周四','周五','周六','周日']
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'邮件营销',
                    type:'line',
                    stack: '总量',
                    data:[120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name:'联盟广告',
                    type:'line',
                    stack: '总量',
                    data:[220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name:'视频广告',
                    type:'line',
                    stack: '总量',
                    data:[150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name:'直接访问',
                    type:'line',
                    stack: '总量',
                    data:[320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name:'搜索引擎',
                    type:'line',
                    stack: '总量',
                    data:[820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        }
      }
  }  
}

```
- template部分代码

```html
<div>
    <!-- 调用v-chart组件:渲染折线图 -->
    <v-chart :options="myline"></v-chart>
</div>
```

### 使用步骤
1. 打开[echarts官方示例](https://www.echartsjs.com/examples/zh/index.html), 找到自己想要的图表效果
2. 复制左侧的参数对象
3. 将复制的图表参数对象,维护到`vue`组件的`data`中
4. 在组件模板部分使用`<v-chart :options="参数对象"/>` 渲染图表即可

## vue中常见问题

### js部分引用图片路径
 > js部分引用本地图片建议使用`require('相对路径')`的方式, 因为打包以后的路径并不是源文件里的路径, 所以直接使用相对路径是无法正确引用到目标图片的.
 
 > html模板部分之所以可以直接按照相对路径引入, 是因为html被打包后和资源图片的相对路径关系基本是不会改变的.

- 地球3D模型展示图表中的参数对象 
```js
globe:{
    backgroundColor: '#000',
    globe: {
        baseTexture: require('../assets/earth/earth.jpg'),

        heightTexture: require('../assets/earth/bathymetry_bw_composite_4k.jpg'),

        displacementScale: 0.1,

        shading: 'lambert',

        environment:require('../assets/earth/starfield.jpg'),

        light: {
            ambient: {
                intensity: 0.1
            },
            main: {
                intensity: 1.5
            }
        },

        layers: [{
            type: 'blend',
            blendTo: 'emission',
            texture:require('../assets/earth/night.jpg')
        }, {
            type: 'overlay',
            texture:require('../assets/earth/clouds.png'),
            shading: 'lambert',
            distance: 5
        }]
    },
    series: []
  }
}
```



## 参考文档
- [echarts官网](https://www.echartsjs.com/zh/option.html#title)
- [echarts官方示例](https://www.echartsjs.com/examples/zh/index.html)
- [echars第三方示例](https://gallery.echartsjs.com/explore.html#sort=rank~timeframe=all~author=all)
- [webpack中使用echarts](https://www.echartsjs.com/zh/tutorial.html#%E5%9C%A8%20webpack%20%E4%B8%AD%E4%BD%BF%E7%94%A8%20ECharts)
- [可以按需引入的模块列表](https://github.com/apache/incubator-echarts/blob/master/index.js)
- [vue-charts的github](https://github.com/ecomfe/vue-echarts/blob/master/README.zh_CN.md)
- [简书](https://www.jianshu.com/p/cf0a54374419)
- [vue中三种插槽使用](https://blog.csdn.net/willard_cui/article/details/82469114)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
