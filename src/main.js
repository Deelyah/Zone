import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

import router from "./router";
import store from "./store/index";

const vueApp = createApp(App);
vueApp.use(router);
vueApp.use(store);

vueApp.mount("#app");
