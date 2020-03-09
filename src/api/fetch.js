import api from './index';
import axios from '../http';
import store from '../store/store';

const headers = {
  'Content-Type': 'application/json',
  token: store.state.token,
};
export default {
  userRegister(info) {
    return axios.post(api.userRegister(), JSON.stringify(info), { headers });
  },
  userLogin(info) {
    return axios.post(api.userLogin(), JSON.stringify(info), { headers });
  },
  getUserInfo() {
    return axios.get(api.getUserInfo(), { headers });
  },
  sendCode(phone) {
    return axios.get(api.sendCode(), { params: { phone } }, { headers });
  },
  logout() {
    return axios.get(api.logout(), { headers });
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
