import store from 'Store';
import * as router from 'Utils/router';

/**
 * Dispatch action from meta store array
 */
export function resolveStoreDependencies(to, from, next) {
  const promises = [];
  to.matched.forEach((entry) => {
    if (
      // If store meta exist
      entry.meta.store
      // If previous route doesn't exist or url is changed
      && (!from.name || to.path !== from.path)
      // If this store meta didn't loaded in previous route
      // or route the same and it single for some instance (e.g. blog)
      && (
        !router.hasSameStoreMeta(from, entry.meta.store)
        || (from.name === to.name && from.name.includes('single'))
      )
    ) {
      entry.meta.store.forEach((action) => {
        const params = { ...to.params };
        params.slug = params.slug || entry.name;
        promises.push(store.dispatch(action, params));
      });
    }
  });
  return Promise.all(promises)
    .catch((e) => {
      if (e.response.status === 404) next({ name: '404', replace: true });
    });
}


export function scrollBehavior(to, from, savedPosition) {
  if (to.path === from.path || router.isSkipScrollTab(to, from)) {
    return savedPosition;
  }
  if (to.hash) {
    return { selector: to.hash };
  }
  return { x: 0, y: 0 };
}
