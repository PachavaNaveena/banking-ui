import {axiosInstance} from "./index";



export const doDeposit = async (user) => {
    return axiosInstance.patch('/transaction/deposit', user)
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

export const doWithdraw = async (user) => {
    return axiosInstance.patch('/transaction/withdraw', user)
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

export const doTransfer = async (user) => {
    return axiosInstance.patch('/transaction/transfer', user)
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


