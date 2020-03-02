import Vuex from 'vuex';
import Vue from 'vue';
import * as types from './types';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // 用户信息
    users: {},
    // login_status表示登录状态
    log_status: null,
    // 暂时未知
    title: '',
  },
  actions: {
  },
  mutations: {
    [types.SYNC]: (state) => {
      if (localStorage.log_status) {
        state.log_status = localStorage.log_status;
      }
    },
    [types.LOGIN]: (state) => {
      localStorage.log_status = 1;
      state.log_status = localStorage.log_status;
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('log_status');
      state.log_status = null;
    },
    [types.TITLE]: (state, data) => {
      state.title = data;
    },
    [types.FETCH]: (state, data) => {
      state.users = data;
    },
  },
});
