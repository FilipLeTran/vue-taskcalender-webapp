<template>
  <button class="bg-image">
    <img src="../../assets/imgs/person.jpg" alt="deadline-background" />
    <div class="mask">
      <h3 class="deadline-title">{{ title }}</h3>
    </div>
    <div class="remaining-time">In 2 days</div>
  </button>
</template>

<script>
export default {
  name: "TaskDeadline",
  props: {
    title: {
      type: String,
      default: "Title"
    }
  }
};
</script>

<style scoped>
img {
  max-width: 100%;
  border-radius: 1rem;
}

.bg-image {
  position: relative;
  overflow: hidden;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
}

.mask {
  border-radius: 1rem;
  background-color: rgba(0, 0, 0, 0.6);
}

.bg-image .mask {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 97.5%;
  overflow: hidden;
  color: #e2e2e2;
  -webkit-transition: all ease 0.5s;
  -moz-transition: all ease 0.5s;
  transition: all ease 0.5s;
}

.bg-image .mask:hover {
  background-color: rgba(0, 0, 0, 0.425);
}

.deadline-title {
  display: flex !important;
  align-items: center !important;
  margin-left: 10px;
  height: 15vw;
  font-size: 1.5rem;
}

@media screen and (min-width: 400px) {
  .deadline-title {
    height: 30vw;
  }
}

@media screen and (min-width: 620px) {
  .deadline-title {
    height: 30vw;
  }
}

@media screen and (min-width: 800px) {
  .deadline-title {
    height: 12vw;
  }
}

@media screen and (min-width: 1400px) {
  .deadline-title {
    height: 15vw;
  }
}

.remaining-time {
  position: absolute;
  top: 0;
  right: 0;
  background-color: #e2e2e2;
  border-radius: 1rem;
  font-size: 14px;
  font-weight: 500;
  padding: 0.25rem;
  margin-top: 0.5rem;
  margin-right: 0.5rem;
}
</style>