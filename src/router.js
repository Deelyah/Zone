import { createRouter, createWebHistory } from "vue-router";
const FalseHome = () => import("@/pages/FalseHomePage.vue");
const Home = () => import("@/pages/HomePage.vue");
const SignUpForm = () => import("@/pages/SignUpForm.vue");
const LoginForm = () => import("@/pages/LoginForm.vue");
const Users = () => import("@/pages/Users.vue");
const myAccount = () => import("@/pages/MyAccount.vue");

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: FalseHome },
    {
      path: "/home",
      component: Home,
      beforeEnter: (_, _2, next) => {
        if (localStorage.getItem("token")) {
          next();
        } else {
          next("/login");
        }
      },
    },
    {
      path: "/signup",
      component: SignUpForm,
      beforeEnter: (_, _2, next) => {
        if (localStorage.getItem("token")) {
          next("/myaccount");
        } else {
          next();
        }
      },
    },
    {
      path: "/login",
      component: LoginForm,
      beforeEnter: (_, _2, next) => {
        if (localStorage.getItem("token")) {
          next("/myaccount");
        } else {
          next();
        }
      },
    },
    {
      path: "/myaccount",
      component: myAccount,
      beforeEnter: (_, _2, next) => {
        if (localStorage.getItem("token")) {
          next();
        } else {
          next("/login");
        }
      },
    },
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
