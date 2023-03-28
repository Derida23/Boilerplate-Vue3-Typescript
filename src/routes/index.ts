import { useAuthStore } from "@/store/auth";
import Cookies from "js-cookie";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async (to, from) => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  const token = Cookies.get("session");

  if (token) {
    const { user, credential } = useAuthStore();

    if (!user) {
      await credential();
      return { name: "main" };
    }
  }
});

export default router;
