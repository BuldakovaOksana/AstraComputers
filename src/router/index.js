import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ContactsView from '../views/ContactsView.vue'
import CompanyView from '../views/CompanyView.vue'
import ProductsView from '../views/ProductsView.vue'
import ServicesView from '../views/ServicesView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Contacts',
    name: 'Contacts',
    component: ContactsView
  },
  {
    path: '/Company',
    name: 'Company',
    component: CompanyView
  },
  {
    path: '/Products',
    name: 'Products',
    component: ProductsView
  },
  {
    path: '/Services',
    name: 'Services',
    component: ServicesView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  mode: 'history',
  scrollBehavior(to, from, savedPosition) {
    return {
      top: 0,
    }
  }
})

export default router
