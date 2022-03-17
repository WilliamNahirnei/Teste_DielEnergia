<template>
  <div>
      <b-card
        v-if="task"
        :header="formTitle"
        header-tag="header"
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
                  <span> {{ task.startDateTask || "" }} </span>
              </b-row>
              <b-row>
                <span> {{ task.startHourTask || "" }} </span>
              </b-row>
            </b-col>

            <b-col>
              <b-row>
                <span> {{ task.endDateTask || "" }} </span>
              </b-row>
              <b-row>
                  <span> {{ task.endHourTask || "" }} </span>
              </b-row>
            </b-col>

            <b-col>
              <span> {{ task.selectedStatusTask || ""}} </span>
            </b-col>
          </b-row>
      </b-card>
  </div>
</template>

<script>

export default {
  name: 'TaskCard',
  props: {
    task: null
  },
  data() {
    return{
    }
  },
  mounted: function() {
  },
  methods: {

  }
}
</script>

<style>

</style>
