<template>
  <div>
      <b-card
        :header="formTitle"
        header-tag="header"
      >
        <b-form @submit="saveTask">
          <b-row>
            <b-col>
              <label class="sr-only" for="titleTask">Titulo</label>
              <b-form-input
                id="titleTask"
                class="mb-2 mr-sm-2 mb-sm-0"
                placeholder="Titulo"
                v-model="titleTask"
                size="sm"
              ></b-form-input>
            </b-col>

            <b-col>
              <label for="descriptionTask">Descrição</label>
              <b-form-textarea 
                id="descriptionTask" 
                size="sm"
                :value="descriptionTask"  
              ></b-form-textarea>
            </b-col>

            <b-col>
              <b-row>
                <label class="sr-only" for="startDateTask">Data Fim</label>
                <b-form-datepicker 
                  id="startDateTask" 
                  :value="startDateTask" 
                  class="mb-2"
                  size="sm"
                ></b-form-datepicker>
              </b-row>
              <b-row>
                <b-form-timepicker 
                  id="startHour" 
                  v-model="startHourTask" 
                  locale="en" 
                  size="sm"
                >
                </b-form-timepicker>
              </b-row>
            </b-col>

            <b-col>
              <b-row>
                <label class="sr-only" for="endDateTask">Data Fim</label>
                <b-form-datepicker 
                  id="endDateTask" 
                  :value="endDateTask" 
                  class="mb-2"
                  size="sm"
                ></b-form-datepicker>
              </b-row>
              <b-row>
                <b-form-timepicker 
                  id="endHour" 
                  :value="endHourTask" 
                  locale="en" 
                  size="sm"
                ></b-form-timepicker>
              </b-row>
            </b-col>

            <b-col
              v-if="idTask"
            >
              <label class="sr-only" for="statusTask">Status</label>
              <b-form-select 
                id="statusTask" 
                :value="selectedStatusTask" 
                :options="statusTaskOptions"
                size="sm" 
                class="mt-3"
                ></b-form-select>
            </b-col>
              <b-col>
                <b-button type="submit" variant="primary">Salvar</b-button>
              </b-col>
          </b-row>
        </b-form>
      </b-card>
  </div>
</template>

<script>

import {
  getTaskById,
  updateTask
} from '../../service/task-services/task-service'

export default {
  name: 'TaskForm',
  props: {
    idTask: null
  },
  data() {
    return{
      formTitle: "Nova Tarefa",
      titleTask: null,
      descriptionTask: null,
      startDateTask: null,
      startHourTask: null,
      endDateTask: null,
      endHourTask: null,
      selectedStatusTask: null,
      statusTaskOptions: [
            { value: 'SCHEDULED', text: 'SCHEDULED' },
            { value: 'IN PROGRESS', text: 'IN PROGRESS' },
            { value: 'FINISHED', text: 'FINISHED' },
            { value: 'DELAYED', text: 'DELAYED'}
          ]
    }
  },
  mounted: function() {
    this.constructPage()
  },
  methods: {
    constructPage (){
      if (this.idTask) {
        this.formTitle = "Editar Tarefa"
        this.getTaskById(this.idTask)
      }
    },
    async getTaskById(idTask){
      const data = await getTaskById(idTask)
      console.log(data)
      const startDateHourTask = data.startDateTask.split("T")
            const endDateHourTask = data.startDateTask.split("T")

      this.titleTask = data.titleTask,
      this.descriptionTask = data.descriptionTask
      this.startDateTask = startDateHourTask[0]
      this.startHourTask = startDateHourTask[1].split('.')[0]
      this.endDateTask = endDateHourTask[0]
      this.endHourTask = endDateHourTask[1].split('.')[0]
      this.selectedStatusTask = data.status
      
    },
    saveTask (event){
      event.preventDefault()
      if(this.idTask){
        this.updateTask()
      } else{
        this.storeTask()
      }
    },
    storeTask() {

    },
    async updateTask() {
      const taskData = await this.prepareTaskData()
      console.log(taskData)
      const response = await updateTask(this.idTask, taskData)
      console.log(response)
    },
    prepareTaskData(){
      const taskData = {
        "titleTask": this.titleTask,
        "descriptionTask": this.descriptionTask,
        "startDateTask": "".concat(this.startDateTask," ",this.startHourTask),
        "endDateTask": "".concat(this.endDateTask," ",this.endHourTask),
        "StatusTask": this.selectedStatusTask
      }
      return taskData
    }
  }
}
</script>

<style>

</style>
