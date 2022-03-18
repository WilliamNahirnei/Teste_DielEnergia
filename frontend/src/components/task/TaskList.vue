<template>
  <div>
    <div>
      <b-card>
          <b-row>
            <b-col>
                <span> Tarefa </span>
            </b-col>

            <b-col>
                <span> Descrição </span>
            </b-col>

            <b-col>
              <span> Inicio </span>
            </b-col>

            <b-col>
              <span> Fim </span>
            </b-col>

            <b-col>
              <span> Status </span>
            </b-col>
            <b-col>
              <b-button 
                  variant="outline-primary"
                  disabled
              >
                Editar
              </b-button>
            </b-col>
            <b-col>
              <b-button 
                  variant="outline-danger"
                  disabled
              >
                Excluir
              </b-button>
            </b-col>
          </b-row>
      </b-card>
    </div>

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
    },
  }
}
</script>

<style>

</style>
