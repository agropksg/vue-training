import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import ourRoutes from './our-router.js';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: ourRoutes
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
