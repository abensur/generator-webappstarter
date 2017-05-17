import Vue from 'vue'
import Router from 'vue-router'
import auth from '@/auth'

Vue.use(Router)

const view = (folder, name = 'main') => (resolve) => {
  require([`@/app/${folder}/${name}.vue`], resolve)
}

const beforeEnter = (to, from, next) => {
  if (!auth.isUserAuthorized()) {
    next('/entrar')
  } else {
    next()
  }
}

export default new Router({
  mode: 'history',
  routes: [{
    path: '/entrar',
    name: 'Login',
    component: view('login')
  }, {
    path: '/',
    component: view('dashboard'),
    beforeEnter,
    children: [{
      name: 'Dashboard',
      path: '/dashboard',
      component: view('dashboard', 'overview')
    }]
  }]
})
