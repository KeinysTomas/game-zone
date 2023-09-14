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
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  },
  {
    path: '/ReactionTimerGame',
    name: 'ReactionTimerGame',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/ReactionTimerGame.vue')
  },
  {
    path: '/WarGame',
    name: 'WarGame',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/WarGame.vue')
  },
  {
    path: '/TicTacToeGame',
    name: 'TicTacToeGame',
    // route level code-splitting
    // this generates a separate chunk (contact.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "contact" */ '../views/TicTacToeGame.vue')
  }
]

const router = createRouter({

  history: createWebHistory(process.env.BASE_URL),
  
  routes,

  scrollBehavior(to, from, savedPosition) {

    // Add console logs  
    console.log('Scroll Behavior')
    console.log({to, from, savedPosition})
  
    // Return position  
    return { 
      x: 0,
      y: 0
    }
  
  }

})

export default router
