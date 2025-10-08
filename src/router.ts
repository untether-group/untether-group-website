import { createRouter, createWebHistory } from 'vue-router'
import HomePage from './components/HomePage.vue'
import PrivacyPolicy from './components/PrivacyPolicy.vue'
import CookiePolicy from './components/CookiePolicy.vue'
import TermsWebsite from './components/TermsWebsite.vue'
import TermsServices from './components/TermsServices.vue'
import Foodtopia from './components/Foodtopia.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/privacy-policy',
    name: 'PrivacyPolicy',
    component: PrivacyPolicy
  },
  {
    path: '/cookie-policy',
    name: 'CookiePolicy',
    component: CookiePolicy
  },
  {
    path: '/terms-website',
    name: 'TermsWebsite',
    component: TermsWebsite
  },
  {
    path: '/terms-services',
    name: 'TermsServices',
    component: TermsServices
  },
  {
    path: '/foodtopia',
    name: 'Foodtopia',
    component: Foodtopia
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router