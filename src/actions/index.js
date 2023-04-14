import axios from 'axios'

export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 1000,
    headers: {

    }
});

axiosInstance.interceptors.request.use(function (config) {
    config.headers.Authorization = `Basic ${localStorage.getItem('auth')}`
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});