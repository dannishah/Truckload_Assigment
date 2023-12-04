// Composables
import { createRouter, createWebHistory } from 'vue-router'
import Home from "@/views/Home.vue";
import Register from "@/views/Register.vue";
import BookTruck from "@/views/BookTruck.vue";
import CarMoving from "@/views/CarMoving.vue";

const routes = [
      {
        path: '/',
        name: 'Home',
        component:Home
      },
      {
        path: '/register',
        name: 'Register',
        component:Register
      },
      {
        path: '/bookTruck',
        name: 'BookTruck',
        component:BookTruck
      },
      {
        path: '/carMoving',
        name: 'CarMoving',
        component:CarMoving
      },
    ]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
