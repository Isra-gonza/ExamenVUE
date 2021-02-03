import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Empresas from '../views/Empresas.vue'
import EmpresaItem from '../views/EmpresaItem.vue'
import Form from '../views/OfertaForm.vue'
import Ofertas from '../views/Ofertas.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/empresas',
    name: 'empresas',
    component: Empresas,
  },
  {
    path: '/empresas/:id',
    name: 'empresasConOferta',
    component: Empresas,
    props:true,
  },
  {
    path: '/empresa/:id',
    name: 'EmpresaItem',
    component: EmpresaItem,
    props: true,
  },
  {
    path: '/ofertas/:id',
    name: "ofertas",
    component: Ofertas,
    props:true,
  },
  {
    path: '/add',
    name: 'FormCrear',
    component: Form,
  },
  {
    path: '/edit/:id',
    name: 'FormEditar',
    component: Form,
    props:true,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
