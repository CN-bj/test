import axios from 'axios';
import store from '@/store/index';
const requests = axios.create({
    baseURL: '/api',
    timeout: 5000,
})
requests.interceptors.request.use(config => {
    return config;
}, err => {
    return Promise.reject(error);
})
requests.interceptors.response.use(res => {
    return res;
}, err => {
    return Promise.reject(error);
})
export default requests;