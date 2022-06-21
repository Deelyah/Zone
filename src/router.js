import { createRouter, createWebHistory } from "vue-router";
import Home from "./pages/HomePage.vue";
import SignUpForm from "./pages/SignUpForm.vue";
import LoginForm from "./pages/LoginForm.vue";
import Users from "./pages/Users.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: Home },
    { path: "/signup", component: SignUpForm },
    { path: "/login", component: LoginForm },
    {
      path: "/users",
      component: Users,
      beforeEnter: (_, _2, next) => {
        if (localStorage.getItem("token")) {
          next();
        } else {
          next("/login");
        }
      },
    },
  ],
});
export default router;
