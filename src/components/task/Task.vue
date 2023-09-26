<template>
  <button href="" class="task-button">
    <div class="task">
      <h2>{{ title }}</h2>
      <div class="task-date-container">
        <TaskDate :date="date" :startTime="startTime" :endTime="endTime" />
      </div>
      <hr />
      <p>{{ description }}</p>
    </div>
  </button>
</template>

<script>
import TaskDate from "./TaskDate.vue";
export default {
  name: "Task",
  components: { TaskDate },
  props: {
    title: {
      type: String,
      default: "Title"
    },
    description: {
      type: String,
      default: "Lorem ipsum"
    },
    date: {
      type: String,
      default: "Monday, 1st Jan."
    },
    startTime: {
      type: String,
      default: ""
    },
    endTime: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
h2 {
  font-size: 34px;
  margin-top: 0;
  margin-bottom: 0;
}

button {
  width: 100%;
  margin-bottom: 0.25rem;
}

.task-button {
  background-color: #8666ec;
  border-radius: 1rem;
  color: #e2e2e2;
  -webkit-transition: all ease 0.3s;
  -moz-transition: all ease 0.3s;
  transition: all ease 0.3s;
}

.task-button:hover {
  background-color: #6049ac;
}

.task {
  padding: 1rem;
}

.task-date-container {
  display: flex;
  align-items: center;
}
</style>