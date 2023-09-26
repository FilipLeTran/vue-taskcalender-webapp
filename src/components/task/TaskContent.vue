<template>
  <div>{{ content }}</div>
</template>

<script>
export default {
  name: "TaskContent",
  props: {
    content: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
</style>