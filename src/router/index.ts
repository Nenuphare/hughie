import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ListView from '../views/ListView.vue'
import ModeEmploisView from '../views/ModeEmploiView.vue'
import CreateArticleView from '../views/CreateArticleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {// Router pour la vue HomeView
      path: '/',
      name: 'home',
      component: HomeView
    },
    {// Router pour la vue ListView
      path: '/liste',
      name: 'liste',
      component: ListView
    },
    {// Router test pour l'instant
      path: '/liste/ModeEmploisView', //rajouter le param :id quand possibilité de connexion base de donnée
      name: 'ModeEmplois',
      component: ModeEmploisView
    },
    {// Router test pour l'instant
      path: '/CreateArticleView', //rajouter le param :id quand possibilité de connexion base de donnée
      name: 'CreateArticle',
      component: CreateArticleView
    },
  ]
})

export default router