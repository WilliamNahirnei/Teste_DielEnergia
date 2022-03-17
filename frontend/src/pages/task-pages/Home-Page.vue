<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand>
        <router-link to="/">Home</router-link> |
    </b-navbar-brand>
    <b-navbar-brand>
        <router-link to="Task-List">Tarefas</router-link> |
    </b-navbar-brand>
  </b-navbar>
</div>
</template>

<script>
  export default {
    name: 'Home-Page',
    components: {
      
    }
  }
</script>

<style>

</style>
