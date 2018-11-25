import Vue from 'vue';
import App from './App.vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import { routes } from './app.routes';

Vue.config.productionTip = false;
Vue.use(VueResource);

const router = new VueRouter({ routes });
Vue.use(VueRouter);

new Vue({
  render: (h) => h(App),
  router,
}).$mount('#app');
