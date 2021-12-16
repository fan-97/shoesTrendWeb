// 路由
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

// 导图相关组件
import mySlot from './components/my-slot';
// echarts示例组件
import VueEchartsDemo from './components/vue-echarts-demo'
import ShoesPriceTrend from './components/shoes-price-trend'

// 创建路由对象
const router = new VueRouter(
    {
        // 设置路由模式
        mode: 'hash',
        // 配置路由规则
        routes: [
            {
                path: '/',
                redirect: '/shoesTrend'
            },
            {
                path: '/slot',
                component: mySlot,
                redirect: '/slot/anonymous',
                children: [
                    {
                        path: 'anonymous',
                        component: (resolve) => resolve(require("@/components/slot-demo/parent"))
                    },
                    {
                        path: 'name',
                        component: (resolve) => resolve(require("@/components/slot-name-demo/parent"))
                    },
                    {
                        path: 'scope',
                        component: (resolve) => resolve(require("@/components/slot-scope-demo/parent"))
                    }
                ]
            },
            {
                path: '/echarts',
                component: VueEchartsDemo
            },
            {
                path: '/shoesTrend',
                component: ShoesPriceTrend
            }
        ]
    }
);

export default router;
