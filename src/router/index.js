import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import IfView from '../views/IfView.vue'
import  ElseIf from '../views/ElseIfView.vue'
import ElseView from '../views/ElseView.vue'
import ShowView from '../views/ShowView.vue'
import ForView from '../views/ForView.vue'
import KeyView from '../views/KeyView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomeView },
    { path: '/if', component: IfView },
    { path: '/else-if', component: ElseIf },
    { path: '/else', component: ElseView },
    { path: '/show', component: ShowView },
    { path: '/for', component: ForView },
    { path: '/key', component: KeyView }
  ]
})

export default router
