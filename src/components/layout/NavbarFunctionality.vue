<template>
  <button :class="classStyle">
    {{ title }}
  </button>
</template>

<script>
export default {
  name: "NavbarFunctionality",
  props: {
    title: {
      type: String,
      default: ""
    },
    classStyle: {
      type: String,
      default: ""
    }
  }
};
</script>

<style scoped>
button {
  color: #8666ec;
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10%;
}
</style>