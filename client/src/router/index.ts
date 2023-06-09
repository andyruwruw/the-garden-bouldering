// Packages
import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

// Local Imports
import Home from '../views/home/home-view.vue';
import Landing from '../views/landing/landing-view.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'landing',
    component: Landing,
  },
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about/about-view.vue'),
  },
  {
    path: '/area/:id',
    name: 'area',
    component: () => import('../views/area/area-view.vue'),
  },
  {
    path: '/boulder/:id',
    name: 'boulder',
    component: () => import('../views/boulder/boulder-view.vue'),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/login-view.vue'),
  },
  {
    path: '/route/:id',
    name: 'route',
    component: () => import('../views/route/route-view.vue'),
  },
  {
    path: '/user/:username',
    name: 'user',
    component: () => import('../views/user/user-view.vue'),
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/errors/404-view.vue'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
