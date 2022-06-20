import { createRouter, createWebHistory } from "vue-router";
import index from "../src/Pages/index";
import auth from "../src/Pages/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: index },
    { path: "/signup", component: auth },
    { path: "/login", component: auth },
  ],
});
export default router;
