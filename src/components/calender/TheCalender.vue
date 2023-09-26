<template >
  <div class="calender">
    <CalenderContent :content="getCurrentYear" />
    <div>
      <hr />
    </div>
    <div v-for="week in weeks" :key="week" class="calender-week-container">
      <CalenderWeek
        :week="week"
        :selectedWeek="selectedWeek"
        @click-selected-week="setSelectedWeek"
      />
    </div>
  </div>
</template>


<script>
import CalenderWeek from "./CalenderWeek.vue";
import CalenderContent from "./CalenderContent.vue";
export default {
  components: { CalenderWeek, CalenderContent },
  name: "TheCalender",
  computed: {
    getCurrentYear: function () {
      return String(new Date().getFullYear());
    },
    getCurrentWeek: function () {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      // Thursday in current week decides the year.
      date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
      // January 4 is always in week 1.
      let week1 = new Date(date.getFullYear(), 0, 4);
      // Adjust to Thursday in week 1 and count number of weeks from date to week1.
      return (
        1 +
        Math.round(
          ((date.getTime() - week1.getTime()) / 86400000 -
            3 +
            ((week1.getDay() + 6) % 7)) /
            7
        )
      );
    },
    weeks: function () {
      const totalWeeksInCurrentYear = 52;
      let weeks = [];
      for (
        let week = this.getCurrentWeek;
        week <= totalWeeksInCurrentYear;
        week++
      ) {
        weeks.push(week);
      }
      return weeks;
    }
  },
  data() {
    return {
      selectedWeek: "1"
    };
  },
  created() {
    this.selectedWeek = this.getCurrentWeek;
  },
  methods: {
    setSelectedWeek: function (newWeek) {
      return (this.selectedWeek = newWeek);
    }
  }
};
</script>

<style scoped>
.calender {
  min-width: 100px;
  height: 100vh;
  overflow: hidden;
  font-weight: 500;
  color: #cccbcb;
}

.calender-week-container {
  margin: 30px;
  margin-right: 0;
  color: #c5406c;
}
</style>