import { createRouter, createWebHashHistory } from "vue-router";
import Welcome from "../views/Welcome.vue";
import Question from "../views/Question.vue";
import Review from "../views/Review.vue";
const routes = [
  {
    path: "/",
    name: "Welcome",
    component: Welcome,
  },
  {
    path: "/question/:subject",
    name: "Question",
    component: Question,
  },
  {
    path: "/review",
    name: "Review",
    component: Review,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
