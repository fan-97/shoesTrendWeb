// 路由

import { createRouter,createWebHashHistory} from "vue-router";


import ShoesPriceTrend from './components/shoes-price-trend'

// 创建路由对象
const router = createRouter(
    {
        // 设置路由模式
        history: createWebHashHistory(),
        // 配置路由规则
        routes: [
            {
                path: '/',
                redirect: '/shoesTrend'
            },
            {
                path: '/shoesTrend',
                component: ShoesPriceTrend
            }
        ]
    }
);

export default router;
