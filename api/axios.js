
// in HTTP.js
import axios from 'axios'

 
// create a new axios instance
const instance = axios.create({
  baseURL: '/api'
})
 
// before a request is made start the nprogress
instance.interceptors.request.use(config => {
    this.$store.dispatch('products/setLoadingTrue')
  return config
})
 
// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
    this.$store.dispatch('products/setLoadingFalse')
  return response
})
 
export default instance