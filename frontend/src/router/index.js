import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '@/pages/task-pages/Home-Page.vue'
import TaskListPage from '@/pages/task-pages/Task-List-Page.vue'
import StoreTaskPage from '@/pages/task-pages/Store-Task-Page.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Home',
    name: 'Home',
    component: HomePage
  },
  {
    path: '/tasks',
    name: 'Task-List',
    component: TaskListPage
  },
  {
    path: '/new-task',
    name: 'New-Task',
    component: StoreTaskPage
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router