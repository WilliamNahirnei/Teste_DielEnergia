<template>
  <div id="app">
    <div>
      <nav>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand>
            <router-link :to="{ name: 'Home'}">
              Home
            </router-link>
          </b-navbar-brand>
          <b-navbar-brand>
            <router-link
             :to="{ name: 'Task-List'}"
             >
              Tarefas
            </router-link>
          </b-navbar-brand>
          <b-navbar-brand>
            <router-link 
              :to="{ name: 'New-Task'}"
            >
              Nova Tarefa
            </router-link>
          </b-navbar-brand>
        </b-navbar>
      </nav>
      <div id="Content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
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
  margin-top: 0px;
}
</style>
