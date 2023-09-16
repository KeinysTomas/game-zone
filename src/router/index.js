import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/ReactionTimerGame',
    name: 'ReactionTimerGame',
    component: () => import(/* webpackChunkName: "contact" */ '../views/ReactionTimerGame.vue')
  },
  {
    path: '/WarGame',
    name: 'WarGame',
    component: () => import(/* webpackChunkName: "contact" */ '../views/WarGame.vue')
  },
  {
    path: '/TicTacToeGame',
    name: 'TicTacToeGame',
    component: () => import(/* webpackChunkName: "contact" */ '../views/TicTacToeGame.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { left: 0, top: 0 };
    }
  }
})

router.beforeEach((to, from, next) => {
  window.scrollTo(0, 0);
  next();
})

export default router