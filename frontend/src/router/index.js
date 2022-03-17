import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/task-pages/Home-Page'
import TaskListPage from '@/pages/task-pages/Task-List-Page'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/tasks',
    name: 'Task-List',
    component: TaskListPage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router