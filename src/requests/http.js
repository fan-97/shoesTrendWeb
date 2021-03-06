/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios';
import QS from 'qs';
import { ElMessage } from 'element-plus'


// baseUrl
axios.defaults.baseURL = 'api'

// 请求超时时间
axios.defaults.timeout = 10000;

// post请求头
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';


// 响应拦截器
axios.interceptors.response.use(
    response => {
        console.log('=====data=====',response.data)
        console.log('=====code=====',response.data.code)
        if (response.status === 200 && response.data.code == '000000') {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是200的情况    
    error => {
        if (error.response.status) {
            switch (error.response.status) {
                // 401: 未登录                
                // 未登录则跳转登录页面，并携带当前页面的路径                
                // 在登录成功后返回当前页面，这一步需要在登录页操作。                
                // case 401:                    
                //     router.replace({                        
                //         path: '/login',                        
                //         query: { redirect: router.currentRoute.fullPath } 
                //     });
                //     break;
                // // 403 token过期                
                // // 登录过期对用户进行提示                
                // // 清除本地token和清空vuex中token对象                
                // // 跳转登录页面                
                // case 403:                     
                //     Toast({                        
                //         message: '登录过期，请重新登录',                        
                //         duration: 1000,                        
                //         forbidClick: true                    
                //     });                    
                //     // 清除token                    
                //     localStorage.removeItem('token');                    
                //     store.commit('loginSuccess', null);                    
                //     // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
                //     setTimeout(() => {                        
                //         router.replace({                            
                //             path: '/login',                            
                //             query: { 
                //                 redirect: router.currentRoute.fullPath 
                //             }                        
                //         });                    
                //     }, 1000);                    
                //     break; 
                // // 404请求不存在                
                case 404:
                    ElMessage.error('请求不存在！')
                    break;
                // 其他错误，直接抛出错误提示                
                default:
                    ElMessage.error('request error!')
            }
            return Promise.reject(error.response);
        }
    }
);


/** 
 * get方法，对应get请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        })
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} params [请求时携带的参数] 
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}
