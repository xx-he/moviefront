import Vue from 'vue';
import Router from 'vue-router';
import store from '../store/store';
import * as types from '../store/types';
// eslint-disable-next-line import/extensions
import index from '../views/index.vue';
// eslint-disable-next-line import/extensions
import CommonPage from '../components/common/commonPage.vue';

Vue.use(Router);
// eslint-disable-next-line global-require,import/no-dynamic-require
const login = resolve => require(['../views/login'], resolve);
// eslint-disable-next-line global-require,import/no-dynamic-require
const register = resolve => require(['../views/register'], resolve);
// eslint-disable-next-line global-require,import/no-dynamic-require
const userInfo = resolve => require(['../views/userInfo.vue'], resolve);


const router = new Router({
  routes: [
    {
      path: '/',
      component: CommonPage,
      children: [
        {
          path: '/',
          name: 'index',
          component: index,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: login,
    },
    {
      path: '/register',
      name: 'register',
      component: register,
    },
    {
      path: '/userInfo',
      component: CommonPage,
      children: [
        {
          path: '/',
          name: 'userInfo',
          component: userInfo,
        },
      ],
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
