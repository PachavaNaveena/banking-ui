import {axiosInstance} from "./index";
export const register = async (user) => {
    return axiosInstance.post('/user', user)
        .then(function (response) {
            console.log(response.data)
            return response.data
        })
        .catch(function (error) {
            return {
                error: error.response.data
            }
        });
}
export const login = async (user) => {
    return axiosInstance.post('/user/login', user)
        .then(function (response) {
            console.log(response.data)
            return response.data
        })
        .catch(function (error) {
            return {
                error: error.response.data
            }
        });
}


export const getUserInfo = async () => {
    return axiosInstance.get('/user')
        .then(function (response) {
            return response.data
        })
        .catch(function (error) {
            return {
                error: error.response.data
            }
        });
}