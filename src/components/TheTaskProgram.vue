<template>
  <div class="program-container">
    <Navbar />
    <div class="task-calender-container">
      <div class="task-calender-align">
        <TaskList />
        <Calender />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./layout/TheNavbar.vue";
import Calender from "./calender/TheCalender.vue";
import TaskList from "./task/TheTaskList.vue";
export default {
  name: "TheTaskProgram",
  components: { Navbar, Calender, TaskList }
};
</script>

<style scoped>
.program-container {
  display: flex;
  background-color: white;
  border-radius: 10px;
  min-height: 90vh;
}

.task-calender-container {
  flex: 1 1 auto;
  margin-top: 6vh;
}

.task-calender-align {
  display: flex;
}
</style>
