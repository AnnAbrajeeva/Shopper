
// in HTTP.js
import axios from 'axios'
import store from '../store/user'

 
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
instance.interceptors.response.use(undefined, error => {
  if(error.response.status === 401) {
      router.push('/admin/login');
  }
  return Promise.reject(error);
});
 
export default instance;