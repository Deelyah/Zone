import { createApp } from "vue";
import App from "./App.vue";
import "./assets/tailwind.css";

import router from "./router";

const vueApp = createApp(App);
vueApp.use(router);

vueApp.mount("#app");
