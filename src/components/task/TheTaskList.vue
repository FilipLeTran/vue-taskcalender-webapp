<template>
  <div class="task-list">
    <masonry
      :cols="{ default: 4, 2000: 3, 1000: 2, 800: 1 }"
      :gutter="{ default: '10px', 700: '15px' }"
    >
      <div v-for="(task, id) in tasks" :key="id" class="card">
        <TaskOverview
          v-if="task.cardType === 'overview'"
          :title="task.title"
          :description="task.description"
        />
        <TaskDeadline
          v-else-if="task.cardType === 'deadline'"
          :title="task.title"
        />
        <Task
          v-else
          :title="task.title"
          :description="task.description"
          :date="task.date"
          :startTime="task.startTime"
          :endTime="task.endTime"
        />
      </div>
    </masonry>
  </div>
</template>

<script>
import Task from "./Task.vue";
import TaskOverview from "./TaskOverview.vue";
import TaskDeadline from "./TaskDeadline.vue";
export default {
  name: "TaskList",
  components: { Task, TaskDeadline, TaskOverview },
  methods: {
    setCardStyle: function (cardStyle) {
      return "card " + cardStyle;
    }
  },
  data() {
    return {
      tasks: [
        {
          title: "Upcoming week ✌️",
          description:
            "Here's a quick summary of your week. Check out these performance statistics and personalized tips.",
          cardType: "overview"
        },
        {
          title: "Kate's birthday ✌️",
          description: "description2",
          cardType: "deadline"
        },
        {
          title: "Monday sync",
          description:
            "Lorem ipsum dolor sit amet consectetur. Nam nulla amet lectus ultrices.",
          startTime: "17.00",
          endTime: "18.00",
          cardType: "task"
        },
        {
          title: "Design onboarding",
          description:
            "Lorem ipsum dolor sit amet consectetur. Nam nulla amet lectus ultrices.",
          startTime: "18.00",
          cardType: "task"
        }
      ]
    };
  }
};
</script>

<style scoped>
.task-list {
  /* Take rest of screen space */
  flex: 1 1 auto;
  padding: 4vw;
  padding-top: 0;
}

.card {
  text-align: left;
  transition: transform 0.2s;
}

.card:hover {
  transform: scale(1.02);
}
</style>