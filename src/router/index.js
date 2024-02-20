import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import NotFound from '../views/404Page.vue'

const routes = [
  { path: '/traveresy-media-vuejs', name: 'Home', component: Home },
  
  // Add a catch-all route for 404 page
  { path: '/:catchAll(.*)', component: NotFound },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
