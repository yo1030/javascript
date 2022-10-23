import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeViews from '../views/HomeViews.vue'
import BookList from '../views/BookList.vue'
import BookDetail from '@/components/BookDetail'
import BookItem from '@/components/BookItem'
import NotFound from '@/components/NotFound'
import User from '@/views/UserView'
import UserProfile from '@/components/UserProfile'
import UserPost from '@/components/UserPost'
import HomeSub from '@/components/HomeSub'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',          // props の to に該当する
    name: 'homes',
    components: {
      default : HomeViews,
      sub: HomeSub
    }
  },
  {
    path: '/home',          // props の to に該当する
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
    path: '/book',
    name: 'BookList',
    component: BookList
  },
  {
    path: '/book/:id',
    name: 'BookDetail',
    component: BookDetail,
    props: route => ({
      id: Number(route.params.id),
      title: route.params.title,
      content: route.params.content
    })
  },
  {
    path: '/book/item/:id',
    name: 'BookItem',
    component: BookItem,
    beforeEnter: (to, from, next) => {
      console.log(to)
      console.log(from)
      next()
    }
  },
  {
    path: '/user',
    component: User,
    children: [
      {
        path: 'profile',
        component: UserProfile
      },
      {
        path: 'post',
        component: UserPost
      }
    ]
  },
  {
    path: '*',
    // redirect: '/'
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from,next) => {
  console.log(to)
  console.log(from)
  next()
})

export default router
