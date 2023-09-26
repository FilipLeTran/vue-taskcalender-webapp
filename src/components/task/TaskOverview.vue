<template v-if="cardType === 'overview'">
  <h2>{{ title }}</h2>
  <p>{{ description }}</p>
</template>

<script>
export default {
  name: "TaskOverview",
  props: {
    title: {
      type: String,
      default: "Title"
    },
    description: {
      type: String,
      default: "Lorem ipsum"
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
</style>