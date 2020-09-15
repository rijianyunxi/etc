import axios from 'axios'
import qs from 'querystring'
import { Indicator, Toast } from 'mint-ui'
import {sign} from '../util/index'

const instance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

//request拦截

instance.interceptors.request.use(config => {
    Indicator.open({
        text: '加载中...',
        spinnerType: 'triple-bounce'
    });
    const token = localStorage.getItem('token');
    const { method, data } = config;
    config.data = Object.assign(data,{sign:sign()})
    if (method.toLowerCase() === 'post') {
        config.data = qs.stringify(data);
    }
    if (token) {
        config.headers.authorization = token;
    }
    return config;
})

//response拦截
instance.interceptors.response.use(response => {
    Indicator.close();
    return response.data;
}, error => {
    console.log(error)
    Indicator.close();
    if (error && error.response) {
        switch (error.response.status) {
            case 500:
                Toast({
                    message: '服务器异常，请重试',
                    position: 'middle',
                    duration: 2000
                });
                break
            case 401:
                Toast({
                    message: '非法请求',
                    position: 'middle',
                    duration: 2000
                });
                break
            default:
        }
    } else {
        Toast({
            message: '你的网络异常，请检查',
            position: 'middle',
            duration: 2000
        });
    }
    return new Promise(() => { });
})

export default instance