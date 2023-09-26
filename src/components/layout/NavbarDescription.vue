<template>
  <p class="description-text">{{ description }}</p>
</template>

<script>
export default {
  name: "NavbarDescription",
  props: {
    description: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
.description-text {
  color: #8d8d8d;
  font-size: 14px;
  padding-left: 10%;
}
</style>