import { SET_ALL } from './mutation-types';

export default {
  setRouteLoading({ commit }, routeLoading) {
    commit(SET_ALL, { routeLoading });
  },
  setRouter({ commit }, router) {
    commit(SET_ALL, { router });
  },
};
