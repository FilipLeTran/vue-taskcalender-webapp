<template>
  <div>{{ content }}</div>
</template>

<script>
export default {
  name: "CalenderContent",
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