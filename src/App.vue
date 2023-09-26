<template>
  <TaskProgram />
</template>

<script>
import TaskProgram from "./components/TheTaskProgram.vue";
export default {
  name: "App",
  components: { TaskProgram }
};
</script>

<style>
#app {
  font-family: Roboto, Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
