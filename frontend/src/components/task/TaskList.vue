<template>
  <div id="taskList">
    <TaskForm
      :idTask="12"
    />
  </div>
</template>

<script>

import TaskForm from './TaskForm.vue'

export default {
  name: 'TaskList',
  components: {
      TaskForm
  }
}
</script>

<style>

</style>
