<template>
  <CalenderIcon />
  <div class="task-date-time">
    <h4>{{ date }}</h4>
    <div class="task-time">
      <!-- Start time -->
      <h4>{{ startTime }}</h4>
      <!-- Generate end time if exists -->
      <h4 v-if="endTime !== ''">- {{ endTime }}</h4>
    </div>
  </div>
</template>

<script>
import CalenderIcon from "vue-material-design-icons/Calendar.vue";
export default {
  name: "TaskDate",
  components: { CalenderIcon },
  props: {
    date: {
      type: String,
      default: "1st Jan."
    },
    startTime: {
      type: String,
      default: "00.00"
    },
    endTime: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.task-date-time {
  margin-left: 0.5rem;
}

.task-date-time h4 {
  margin: 0;
}

.task-time {
  display: flex;
}

.task-time h4 {
  padding-right: 0.25rem;
}
</style>