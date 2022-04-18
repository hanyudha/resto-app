import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FoodsView from '../views/FoodsView.vue'
import CartView from '../views/CartView.vue'
import FoodDetailView from '../views/FoodDetailView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/foods',
    name: 'Foods',
    component: FoodsView
  },
  {
    path: '/foods/:id',
    name: 'FoodDetailView',
    component: FoodDetailView
  },
  {
    path: '/cart',
    name: 'Cart',
    component: CartView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
