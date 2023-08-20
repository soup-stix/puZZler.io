import { createRouter, createWebHistory } from 'vue-router'
import TicTacToe from '../views/TicTacToe.vue'
import NQueens from "../views/NQueens.vue"
import Home from '../views/Home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/tictactoe',
      name: 'tictactoe',
      component: TicTacToe
    },
    {
      path: '/nqueens',
      name: 'nqueens',
      component: NQueens
    }
  ]
})

export default router
