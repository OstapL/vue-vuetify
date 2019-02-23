import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import router from './router';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    router,
  },
  plugins: [createPersistedState({
    storage: window.localStorage,
    paths: [
      'login.expirationTime',
    ],
  })],
});
