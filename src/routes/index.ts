import routes from "./routes";
import { createRouter, createWebHistory } from "vue-router";
import { mainGuard, authGuard } from "@/middleware/authentication";
import Cookies from "js-cookie";
import { useAuthStore } from "@/store/auth";

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach(async () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 100);

  const token = Cookies.get("session");

  if (token) {
    const { user, credential } = useAuthStore();

    if (!user) {
      await credential();
    }
  }
});

export default router;
