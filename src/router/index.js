import { createRouter, createWebHistory } from 'vue-router';

import WeatherWidget from '../components/WeatherWidget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import PhotoWidget from '../components/PhotoWidget.vue';
import GameWidget from '../components/GameWidget.vue';

const routes = [
  { path: '/weather-widget', component: WeatherWidget },
  { path: '/location', component: LocationWidget },
  { path: '/stopwatch', component: StopwatchWidget },
  { path: '/game-widget', component: GameWidget },
  { path: '/photo', component: PhotoWidget },
  { path: '/game-widget', component: GameWidget },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
