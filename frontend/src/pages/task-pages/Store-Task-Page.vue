<template>
  <div>
    <TaskForm
        :idTask="null"
    />
  </div>
</template>

<script>

  import TaskForm from "@/components/task/TaskForm.vue"

  export default {
    name: 'Store-Task-Page',
    components: {
      TaskForm
    }
  }
</script>

<style>

</style>
