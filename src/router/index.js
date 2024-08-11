import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TeamView from '@/views/TeamView.vue'
import AktuellView from '@/views/AktuellView.vue'
import Impressum from '@/views/Impressum.vue'
import Datenschutz from '@/views/Datenschutz.vue'
import Mitglied from '@/views/Mitglied.vue'
import Jugend from '@/views/JugendView.vue'
import KontaktView from '@/views/KontaktView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/team/jugend',
      name: 'jugend',
      component: Jugend
    },
    {
      path: '/team/:name',
      name: 'team',
      component: TeamView
    },
    {
      path: '/aktuell',
      name: 'aktuell',
      component: AktuellView
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: KontaktView
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: Datenschutz
    },
    {
      path: '/download',
      name: 'download',
      component: Mitglied
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
