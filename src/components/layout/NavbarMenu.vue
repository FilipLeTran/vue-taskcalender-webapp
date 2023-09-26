<template>
  <button :class="classStyle">
    {{ title }}
    <MenuIcon :size="20" />
  </button>
</template>

<script>
import MenuIcon from "vue-material-design-icons/MenuDown.vue";
export default {
  name: "NavbarMenu",
  components: { MenuIcon },
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
  width: 100%;
  font-size: 24px;
  float: left;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10%;
}
</style>