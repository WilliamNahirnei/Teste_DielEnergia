<template>
  <div>
    <TaskCard
      v-for="task in taskList" :key="task.idTask"
      :task="task"
     />
  </div>
</template>

<script>

import TaskCard from './TaskCard.vue'

import {
  getAllTask
} from '../../service/task-services/task-service'

export default {
  name: 'TaskList',
  components: {
      TaskCard
  },
  data() {
    return{
      taskList: []
    }
  },
  mounted: function() {
    this.getTaskList()
  },
  methods: {
    async getTaskList (){
      this.taskList =  await getAllTask()
      console.log(this.taskList)
    },
  }
}
</script>

<style>

</style>
