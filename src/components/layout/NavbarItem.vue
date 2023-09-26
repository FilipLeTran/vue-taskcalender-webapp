<template>
  <!-- <div :class="getLinkStyle"> -->
  <NavbarRoom
    v-if="linkType === 'room'"
    :title="title"
    :href="''"
    :classStyle="getLinkStyle"
  />
  <NavbarMenu
    v-else-if="linkType === 'menu'"
    :title="title"
    :classStyle="getLinkStyle"
  />
  <NavbarFunctionality
    v-else-if="linkType === 'functionality'"
    :title="title"
    :classStyle="getLinkStyle"
  />
  <!-- </div> -->
  <NavbarDescription v-if="description !== ''" :description="description" />
</template>

<script>
import NavbarRoom from "./NavbarRoom.vue";
import NavbarMenu from "./NavbarMenu.vue";
import NavbarFunctionality from "./NavbarFunctionality.vue";
import NavbarDescription from "./NavbarDescription.vue";
export default {
  name: "NavbarItem",
  components: {
    NavbarRoom,
    NavbarMenu,
    NavbarFunctionality,
    NavbarDescription
  },
  props: {
    title: {
      type: String,
      default: ""
    },
    linkType: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    getLinkStyle: function () {
      let baseStyle = "hvr-radial-out ";
      return this.active === true ? baseStyle + "active" : baseStyle;
    },
    route: function () {
      return "/" + this.title;
    }
  }
};
</script>

<style scoped>
a,
a:visited {
  margin: 1em;
  margin-left: 0;
  text-decoration: none;
  color: inherit;
}
.link {
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 10%;
  width: 90%;
  margin-right: 10px;
}

.link:hover {
  color: white !important;
}

.active {
  background-color: #d6d6d6;
}
</style>