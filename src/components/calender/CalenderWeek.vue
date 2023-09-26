<template>
  <button :class="isCurrentWeek" @click="clickSelectedWeek(week)">
    <CalenderContent :content="currentWeekContent" />
  </button>
  <span v-if="selectedWeek === week" class="side-indicator">-|</span>
</template>

<script>
import CalenderContent from "./CalenderContent.vue";
export default {
  name: "CalenderWeek",
  components: { CalenderContent },
  props: {
    week: Number,
    selectedWeek: Number
  },
  emits: ["clickSelectedWeek"],
  computed: {
    isCurrentWeek: function () {
      let className = "week-item ";
      return this.selectedWeek === this.week
        ? className + "selected-week"
        : className + "unselected-week";
    },
    currentWeekContent: function () {
      return "W." + this.week;
    }
  },
  data() {
    return {
      newSelectedWeek: ""
    };
  },
  methods: {
    clickSelectedWeek: function (week) {
      this.$emit("click-selected-week", week);
    }
  }
};
</script>

<style scoped>
.week-item {
  border-radius: 10px;
  height: 20px;
  width: 50px;
}
.unselected-week {
  color: #acacac;
}

.unselected-week:hover {
  position: relative;
  right: 5px;
}

.selected-week {
  color: inherit;
}
.side-indicator {
  float: right;
}
button:hover {
  background: #c5406c1a;
}
</style>