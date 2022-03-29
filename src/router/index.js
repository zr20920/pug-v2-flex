import Vue from 'vue'
import Router from 'vue-router';
Vue.use(Router)

import Home from '../views/home/index.vue'
import Login from '../views/login/index.vue'

export default new Router({
  routes: [
    { path: '/', name: 'Home', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/login', component: Login },
  ],
  mode: 'history'
})