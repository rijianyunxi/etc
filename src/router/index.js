import Vue from 'vue'
import VueRouter from 'vue-router'
//import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('../views/Index/Index.vue'),
    children: [
      {
        path: '',
        redirect: '/home'
      },
      {
        path: '/home',
        name: 'Home',
        component: () => import('../views/Index/Home')
      },
      {
        path: '/team',
        name: 'Team',
        component: () => import('../views/Index/Team')
      },
      {
        path: '/trade',
        name: 'Trade',
        component: () => import('../views/Index/Trade')
      },
      {
        path: '/shop',
        name: 'Shop',
        component: () => import('../views/Index/Shop')
      },
      {
        path: '/mine',
        name: 'Mine',
        component: () => import('../views/Index/Mine/Index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('../views/Register')
  },
  {
    path: '/nametrue',
    name: 'Nametrue',
    component: () => import('../views/Index/Mine/Nametrue.vue')
  },
  {
    path: '/zfpay',
    name: 'Zfpay',
    component: () => import('../views/Index/Mine/Zfpay.vue')
  },
  {
    path: '/mycomputer',
    name: 'Mycomputer',
    component: () => import('../views/Mycomputer')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  let ifLogin = localStorage.getItem('token') ? true : false;
  if (to.path == '/login' || to.path == "/register") {
    next();
  } else {
    ifLogin ? next() : next({ name: "Login" })
  }
})

export default router
