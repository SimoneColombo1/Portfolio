import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomePage.vue";
import AllProjects from "../views/AllProjects.vue";
import SingleProject from "../views/SingleProject.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/Projects",
      name: "AllProjects",
      component: AllProjects,
    },
    {
      path: "/Projects/:id",
      name: "SingleProject",
      component: SingleProject,
    },
  ],
});

export default router;
