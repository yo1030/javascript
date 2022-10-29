import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ChildrenView from '../views/ChildrenView.vue'
import TeleportSample from "@/views/TeleportSample"
import CompositionSample from "@/views/CompositionSample"
import PropsEmit from "@/views/PropsEmit";
import CompositionFunction from "@/views/CompositionFunction";
import RouterSample from "@/views/RouterSample";
import VuexSample from "@/views/VuexSample";

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
    path: '/children',
    name: 'children',
    component: ChildrenView
  },
  {
    path: '/teleport-sample',
    name: 'teleportSample',
    component: TeleportSample
  },
  {
    path: '/composition-sample',
    name: 'compositionSample',
    component: CompositionSample
  },
  {
    path: '/props-emit',
    name: 'propsEmit',
    component: PropsEmit
  },
  {
    path: '/composition-function',
    name: 'compositionFunction',
    component: CompositionFunction
  },
  {
    path: '/router',
    name: 'RouterSample',
    component: RouterSample
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: VuexSample
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
