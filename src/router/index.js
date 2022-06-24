import { createRouter, createWebHistory } from 'vue-router'
import PesquisaView from '../views/PesquisaView.vue'
import FavoritosView from '../views/FavoritosView.vue'

const routes = [
  {
    path: '/',
    name: 'Pesquisa',
    component: PesquisaView
  },

  {
    path: '/favoritos',
    name: 'Favoritos',
    component: FavoritosView
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
