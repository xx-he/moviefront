import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/store';
import * as types from '../store/types';

Vue.use(Router);
// eslint-disable-next-line global-require,import/no-dynamic-require
const login = resolve => require(['../views/login'], resolve);


const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login,
    },
  ],
});

export default router;

// 同步 localstorage 信息到 store
store.commit(types.SYNC);

// 路由导航守卫
// router.beforeEach((to, from, next) => {
//   if (to.matched.some(routerObjectEle => routerObjectEle.meta.requireLogin)) {
//     if (store.state.log_status) {
//       next();
//     } else {
//       next({
//         path: '/login',
//         query: {
//           redirect: to.fullPath,
//         },
//       });
//     }
//   } else {
//     next();
//   }
// });
