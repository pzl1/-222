import axios from "axios"
const ajax = axios.create({
    baseURL: "",
    timeout: 5000
})
ajax.interceptors.request.use((config) => {
    return config;
})
ajax.interceptors.response.use((response) => {
    return response
})
export default ajax;