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
                v-model="descriptionTask"  
              ></b-form-textarea>
            </b-col>

            <b-col>
              <b-row>
                <label class="sr-only" for="startDateTask">Data Fim</label>
                <b-form-datepicker 
                  id="startDateTask" 
                  v-model="startDateTask" 
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
                  v-model="endDateTask" 
                  class="mb-2"
                  size="sm"
                ></b-form-datepicker>
              </b-row>
              <b-row>
                <b-form-timepicker 
                  id="endHour" 
                  v-model="endHourTask" 
                  locale="en" 
                  size="sm"
                ></b-form-timepicker>
              </b-row>
            </b-col>

            <b-col
              v-if="idTask"
            >
              <label class="sr-only" for="statusTask">Status</label>
              <b-form-select id="statusTask" v-model="selected" :options="statusTaskOptions" size="sm" class="mt-3"></b-form-select>
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

export default {
  name: 'TaskForm',
  props: {
      idTask: null
  },
  components: {
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
      statusTask: null,
      statusTaskOptions: [
            { value: null, text: 'status' },
            { value: 'a', text: 'This is First option' },
            { value: 'b', text: 'Selected Option' },
            { value: 'c', text: 'This is an option with object value' },
            { value: 'd', text: 'This one is disabled'}
          ]
    }
  },
  mouted: {

  },
  methods: {
    constructPage (){
      if (this.idTask) {
        this.formTitle = "Editar Tarefa"
      }
    },
    saveTask (event){
      event.preventDefault()
      const taskData = this.prepareTaskData()
      if(idTask){
        updateTask(idTask, taskData)
      }
      storeTask(taskData)
    },
    prepareTaskData(){
      const taskData = {
        "titleTask": this.titleTask,
        "descriptionTask": this.descriptionTask,
        "startDateTask": "".concat(this.startDateTask," ",this.startHourTask),
        "endDateTask": "".concat(this.endDateTask," ",this.endHourTask),
        "StatusTask": this.statusTask
      }
      return taskData
    }
  }
}
</script>

<style>

</style>
