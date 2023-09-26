<template>
  <div class="navbar">
    <a src="">
      <img
        src="../../assets/imgs/company-logo.png"
        alt="company-logo"
        width="40"
        loading="lazy"
      />
    </a>
    <div
      class="link-container"
      v-for="link in navigationLinks"
      :key="link.title"
    >
      <hr v-if="inviteMember(link.title)" />
      <NavbarItem
        :title="link.title"
        :linkType="link.linkType"
        :description="link.description"
        :active="link.active"
      />
    </div>
  </div>
</template>

<script>
import NavbarItem from "./NavbarItem.vue";
export default {
  name: "TheNavbar",
  components: { NavbarItem },
  methods: {
    inviteMember: function (title) {
      return title === "Invite members";
    }
  },
  data() {
    return {
      navigationLinks: [
        { title: "Sequoia", linkType: "menu", active: false },
        { title: "Copywriting", linkType: "room", active: true },
        { title: "Add a new room", linkType: "functionality", active: false },
        {
          title: "Invite members",
          linkType: "functionality",
          description: "Add more members to collaborate within your workspace.",
          active: false
        }
      ]
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  width: 40px;
}

hr {
  border-color: #ffffff;
}

.navbar {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  text-align: left;
  background-color: #eeeeee;
  margin: 0.5em;
  margin-right: 0;
  border-radius: inherit;
  border-bottom-right-radius: 0;
  border-top-right-radius: 0;
  padding-left: 2rem;
  padding-right: 2rem;
}
.navbar img {
  margin: 2em;
  margin-bottom: 1vh;
  margin-left: 25%;
  border-radius: 10px;
}

.link-container {
  font-weight: 500;
}
</style>
