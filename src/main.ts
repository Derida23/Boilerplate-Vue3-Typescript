import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import { phone } from "./utils/directive";
import "typeface-inter";

const app = createApp(App);
const pinia = createPinia();

app.directive("phone", phone);

app.use(router);
app.use(pinia);

app.mount("#app");
