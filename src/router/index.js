import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/temario',
    name: 'temario',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/TemarioView.vue')
  }, 
  {
    path: '/instrucciones',
    name: 'instrucciones',
    component: () => import('../views/InstruccionesView.vue')
  },
  {
    path: '/modulo-directivo',
    name: 'ModuloDirectivo',
    component: () => import('../views/ModuloDirectivoView.vue')

  },
  {
    path: '/evolucion-de-movilidad',
    name: 'evolucion',
    component: () => import('../views/EvolucionView.vue')
  },
  {
    path: '/fundamentos-de-electricidad',
    name: 'fundamentos',
    component: () => import('../views/ElectricidadView.vue')
  },
  {
    path: '/cargando-un-bev',
    name: 'cargandobrv',
    component: () => import('../views/BEVView.vue')
  },
  {
    path: '/correcto',
    name: 'correcto',
    component: () => import('../views/CorrectoView.vue')
  },
  {
    path: '/incorrecto', 
    name: 'incorrecto',
    component: () => import('../views/IncorrectoView.vue')
  },
  {
    path: '/muchas-gracias',
    name: 'muchasgracias',
    component: () => import('../views/MuchasGraciasView.vue')
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
