import Vuex from 'vuex';
import Vue from 'vue';
import * as types from './types';
import axios from './../http';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: {},
    log_status: null,
    title: '',
  },
  actions:{
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
