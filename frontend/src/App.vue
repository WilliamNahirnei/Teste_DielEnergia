<template>
  <div id="app">
    <HomePage />
    <TaskList />
  </div>
</template>

<script>

import TaskList from './components/task/TaskList.vue'
import HomePage from './pages/task-pages/Home-Page.vue'

export default {
  name: 'App',
  components: {
    TaskList,
    HomePage,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
