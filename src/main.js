import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import store from './store.js'
import myRoutes from './my-routes.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: myRoutes,
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
