const PageMain = () => import(/* webpackChunkName: 'PageMain' */ 'Pages/PageMain/PageMain');

export default [
  {
    path: '/',
    name: 'home',
    component: PageMain,
  },
  {
    path: '*',
    redirect: { name: '404' },
  },
];
