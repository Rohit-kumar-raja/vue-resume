import Vue from 'vue'
import VueRouter from 'vue-router'
// import Header from '../components/Header.vue';
// import Footer from '../components/Header.vue';
// import Login from '../components/Logn.vue';
// import Register from '../components/Register.vue';
import Home from '../pages/Index.vue';
import About from '../pages/About.vue';
import Contact from '../pages/Contact.vue';
import Preview from '../pages/Preview.vue';
import Pricing from '../pages/Pricing.vue';
import Templates from '../pages/Templates.vue';
import Dashboard from '../pages/Dashboard.vue';
import format1 from '../formats/exprince/format1.vue';
import format2 from '../formats/exprince/format2.vue';
import format3 from '../formats/exprince/format3.vue';
import format4 from '../formats/exprince/format4.vue';
import format5 from '../formats/student/format1.vue';
import format6 from '../formats/student/format2.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/index',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },
  {
    path: '/pricing',
    name: 'Pricing',
    component: Pricing
  },

  {
    path: '/preview',
    name: 'Preview',
    component: Preview
  },
  {
    path: '/templates',
    name: 'Templates',
    component: Templates
  },
  {
    path: '/start',
    name: 'Dashboard',
    component: Dashboard
  },

  {
    path: '/format1',
    name: 'format1',
    component: format1
  },
  {
    path: '/format2',
    name: 'format2',
    component: format2
  },
  {
    path: '/format3',
    name: 'format3',
    component: format3
  },
  {
    path: '/format4',
    name: 'format4',
    component: format4
  },
  {
    path: '/format5',
    name: 'format5',
    component: format5
  },
  {
    path: '/format6',
    name: 'format6',
    component: format6
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
