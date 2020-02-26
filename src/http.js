import axios from 'axios';
import qs from 'qs';
import store from './store/store';
import * as types from './store/types';
import router from './router';

axios.defaults.timeout = 5000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.transformRequest = [data => qs.stringify(data)];
axios.defaults.withCredentials = true;
// http response 拦截器
axios.interceptors.response.use(
  response => response,
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 401:
          // 401 清除登录并跳转到登录页面
          store.commit(types.LOGOUT);
          router.replace({
            path: 'login',
            query: { redirect: router.currentRoute.fullPath },
          });
          break;
        default:
          break;
      }
    }
    // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
    return Promise.reject(error.response.data);
  });


export default axios;
