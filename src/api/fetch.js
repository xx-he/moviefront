import api from './index';
import axios from '../http';

const headers = {
  'Content-Type': 'application/json',
  // 这里有一个很玄学的问题
  token: localStorage.getItem('token'),
};
export default {
  getPerson() {
    return axios.get(api.getPerson(), { params: { size: 9 } }, { headers });
  },
  getMovie() {
    return axios.get(api.getMovie(), { params: { size: 9 } }, { headers });
  },
  userRegister(info) {
    return axios.post(api.userRegister(), JSON.stringify(info), { headers });
  },
  movieTags() {
    return axios.get(api.getMovieTag(), { headers });
  },
  userLogin(info) {
    return axios.post(api.userLogin(), JSON.stringify(info), { headers });
  },
  getUserInfo(info) {
    return axios.get(api.getUserInfo(), { params: { token: info } }, { headers });
  },
  sendCode(phone) {
    return axios.get(api.sendCode(), { params: { phone } }, { headers });
  },
  logout() {
    headers.token = localStorage.getItem('token')
    return axios.post(api.logout(), null, { headers });
  },
  putUserInfo(userInfo) {
    return axios.put(api.putUserInfo(), JSON.stringify(userInfo), { headers });
  },
  changePhone(phone) {
    return axios.put(api.changePhone(), JSON.stringify(phone), { headers });
  },
  changePass(password) {
    return axios.put(api.changePass(), JSON.stringify(password), { headers });
  },
  changeEmail(email) {
    return axios.put(api.changeEmail(), JSON.stringify(email), { headers });
  },
  getMessage() {
    return axios.get(api.getMessage(), { headers });
  },
};
