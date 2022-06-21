import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/HomePage.vue";
import SignUpForm from "./pages/SignUpForm.vue";
import LoginForm from "./pages/LoginForm.vue";
// import auth from "../src/Pages/auth";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/signup", component: SignUpForm },
    { path: "/login", component: LoginForm },
  ],
});
export default router;

{
  /*  */
}
