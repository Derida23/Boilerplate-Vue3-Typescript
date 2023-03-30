import { createApp } from "vue";
import "./style.css";
import "vue-toastification/dist/index.css";
import "typeface-inter";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import { phone } from "./utils/directive";
import Toast from "vue-toastification";
import { options } from "./plugins/notification";

const app = createApp(App);
const pinia = createPinia();

app.directive("phone", phone);

app.use(router);
app.use(pinia);
app.use(Toast, options);

app.mount("#app");
