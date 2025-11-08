import axios from 'axios'

const api = axios.create({
    baseURL:'https://full-stack-blogs-application.vercel.app/api',
    withCredentials:true
})

export default api