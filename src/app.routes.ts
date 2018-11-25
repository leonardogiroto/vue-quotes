import Home from './_pages/Home.vue';
import Single from './_pages/Single.vue';

const ifLoggedIn = (to: any, from: any, next: any) => {
  const isLogged = localStorage.getItem('VueLogged');
  isLogged && isLogged === 'true' ?
    next() : next('/');
};

export const routes = [{
    path: '',  name: 'home',
    component: Home,
  }, {
    path: '/view-quote/:comment', name: 'single',
    component: Single,
    beforeEnter: ifLoggedIn,
  }, {
    path: '*', redirect: '/',
  },
];
