/* 
 * 请求封装公共方法
 */
import axios from 'axios'
import qs from 'qs' //序列化字符串

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let token = localStorage.getItem('token') || sessionStorage.getItem('token');

// 请求拦截器
axios.interceptors.request.use(config => {
    if (token) {
        // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
        config.headers.cvsToken = token;
    }
    return config;
}, error => {
    return Promise.reject(error);
})

// 发送请求及接收后处理
export const ajaxPost = (url, params, callback, errorCallback) => {
    axios.post(url, params)
        .then(function(response) {
            callback(response.data.result.data);
        })
        .catch(function(error) {
            if (errorCallback) {
                errorCallback(error)
            }
            console.log('服务器错误', error);
        })
}

export const ajaxGet = (url, params, callback, errorCallback) => {
    axios.get(url, {
        params: params
    })
        .then(function(response) {
            callback(response.data.result.data);
        })
        .catch(function(error) {
            if (errorCallback) {
                errorCallback(error)
            }
            console.log('服务器错误', error);
        })
}