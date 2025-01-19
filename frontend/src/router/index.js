import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import MusicAndQuoteView from '../views/MusicAndQuoteView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/music-and-quote/:mood', name: 'MusicAndQuote', component: MusicAndQuoteView, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
