<template>
  <div>
      <b-card
        v-if="task"
      >
          <b-row>
            <b-col>
                <span> {{ task.titleTask || "" }}</span>
            </b-col>

            <b-col>
                <span> {{ task.descriptionTask || "" }}</span>
            </b-col>

            <b-col>
              <b-row>
                  <span> {{ startDate || "" }} </span>
              </b-row>
              <b-row>
                <span> {{ startHour || "" }} </span>
              </b-row>
            </b-col>

            <b-col>
              <b-row>
                <span> {{ endDate || "" }} </span>
              </b-row>
              <b-row>
                  <span> {{ endHour || "" }} </span>
              </b-row>
            </b-col>

            <b-col>
              <span> {{ task.status || ""}} </span>
            </b-col>

            <b-col>
                <b-button 
                    variant="outline-primary"
                    :to="{ name: 'Edit-Task', params: { idTask: task.idTask }}"
                >
                Editar
                </b-button>
            </b-col>

            <b-col>
                <b-button 
                    variant="outline-danger"
                    @click="deleteTask"
                >
                Deletar
                </b-button>
            </b-col>

          </b-row>
      </b-card>
  </div>
</template>

<script>

import {
    deleteTask
} from '../../service/task-services/task-service'

export default {
  name: 'TaskCard',
  props: {
    task: null
  },
  data() {
    return{
        startDate: null,
        startHour: null,
        endDate: null,
        endHour: null
    }
  },
  mounted: function() {
      this.formatStartDate()
      this.formatEndDate()
  },
  methods: {
    async formatStartDate(){
        const dateTime = this.separateDataDetails(this.task.startDateTask)
        this.startDate = dateTime.date
        this.startHour = dateTime.time
    },
    formatEndDate(){
        const dateTime = this.separateDataDetails(this.task.endDateTask)
        this.endDate = dateTime.date
        this.endHour = dateTime.time
    },
    separateDataDetails(dateTime){
        const dateTimeArray = dateTime.split("T")
        const timeArray = dateTimeArray[1].split('.')
        return {
            date: dateTimeArray[0],
            time: timeArray[0]
        }
    },
    async deleteTask(){
        await deleteTask(this.task.idTask)
        this.$router.go(this.$router.currentRoute)
    }

  }
}
</script>

<style>

</style>
