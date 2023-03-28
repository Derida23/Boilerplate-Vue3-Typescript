import { NavigationGuardNext, RouteLocationNormalized } from "vue-router";
import { useAuthStore } from "@/store/auth";
import Cookies from "js-cookie";

export const authGuard = async (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    next({ path: "/profile" });
  } else {
    next();
  }
};

export const mainGuard = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext
) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    next({ path: "/auth/login" });
  } else {
    next();
  }
};
