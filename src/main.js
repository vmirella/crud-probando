import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
Vue.use(VueResource);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import User from './components/User.vue';
import Test from './components/Test.vue';

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  base: '__dirname',
  routes: [
    {
      path: '/',
      component: User
    },
    {
      path: '/test',
      component: Test
    }
  ]
});

new Vue({
  router,
  /*template: '<App/>',
  components: {App}*/
  render: h => h(App),
}).$mount('#app')
