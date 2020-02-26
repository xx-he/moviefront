import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store';
import login from './components/login';
import index from './components/index';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'index',
    component: index,
    meta: {
      requireLogin: true,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: login,
  },
];


const router = new Router({
  routes,
});

// 同步 localstorage 信息到 store
store.commit(types.SYNC);

// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(routerObjectEle => routerObjectEle.meta.requireLogin)) {
    if (store.state.log_status) {
      next();
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath,
        },
      });
    }
  } else {
    next();
  }
});

export default router;
