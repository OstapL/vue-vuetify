import Vue from 'vue';
import Router from 'vue-router';
import store from 'Store';
import routes from './routes';

Vue.use(Router);

const router = new Router({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== from.name) store.dispatch('router/setRouteLoading', true);
  next();
});


router.afterEach((to) => {
  store.dispatch('router/setRouteLoading', false);
});

router.onError((e) => {
  if (e.message === 'cancel') {
    store.dispatch('router/setRouteLoading', false);
  }
});

export default router;
