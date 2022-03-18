<template>
  <div>
    <TaskForm
        :idTask="idTask"
    />
  </div>
</template>

<script>

  import TaskForm from "@/components/task/TaskForm.vue"

  export default {
    name: 'Edit-Task-Page',
    components: {
      TaskForm
    },
    data() {
        return {
            idTask: this.$route.params.idTask
        }
    }
  }
</script>

<style>

</style>
