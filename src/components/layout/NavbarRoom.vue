<template>
  <a :href="href" :class="classStyle">{{ title }}</a>
</template>

<script>
export default {
  name: "NavbarRoom",
  props: {
    title: {
      type: String,
      default: ""
    },
    href: {
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
a {
  width: 100%;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10%;
  text-decoration: none;
}

a:hover {
  color: white !important;
}
</style>