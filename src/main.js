import { createApp } from "vue";
import App from "./App.vue";
import "../src/assets/main.css";
import "../src/assets/navbar-hover-animation.css";
import masonry from "vue-next-masonry";

createApp(App).use(masonry).mount("#app");

