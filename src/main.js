import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Toast from "vue-toastification";
// Import the CSS or use your own!
import "vue-toastification/dist/index.css";

import VueProgressBar from "@aacassandra/vue3-progressbar";

const optionsProgress = {
  failedColor: "#874b4b",
  transition: {
    speed: "0.2s",
    opacity: "0.6s",
  },
  location: "top",
};

const options = {
  // You can set your default options here
};

createApp(App)
  .use(router)
  .use(Toast, options)
  .use(VueProgressBar, optionsProgress)
  .mount("#app");
