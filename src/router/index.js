import { createRouter, createWebHashHistory } from 'vue-router'
import JournalView from '@/views/JournalView.vue'
import ContactView from '@/views/ContactView.vue'
import ClavierVue from '@/views/ClavierVue.vue'
import FormVue from '@/views/FormView.vue'
  
const routes = [
  {
    path: '/',
    name: 'Journal',
    component: JournalView
  },  
  {
    path: '/Contact',
    name: 'Contact',
    component: ContactView
  },
  {
    path: '/Clavier',
    name: 'Clavier',
    component: ClavierVue
  },
  {
    path: '/Form',
    name: 'Form',
    component: FormVue
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
