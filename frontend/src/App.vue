<template>
  <div id="app">
    <div>
      <nav>
        <b-navbar toggleable="lg" type="dark" variant="info">
          <b-navbar-brand>
            <b-nav-item 
              active 
              :to="{ name: 'Home'}" 
            >
              Home
            </b-nav-item>
          </b-navbar-brand>
          <b-navbar-brand>
            <b-nav-item 
              active 
              :to="{ name: 'Task-List'}" 
            >
              Tarefas
            </b-nav-item>
          </b-navbar-brand>
          <b-navbar-brand>
            <b-nav-item 
              active 
              :to="{ name: 'New-Task'}" 
            >
              Nova Tarefa
            </b-nav-item>
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
