import { authGuard, mainGuard } from "@/middleware/authentication";
import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    component: () => import("@/layouts/auth/index.vue"),
    name: "auth",
    beforeEnter: authGuard,
    redirect: {
      name: "login",
    },
    children: [
      {
        path: "/auth/login",
        name: "login",
        component: () => import("@/views/auth/login/index.vue"),
      },
      {
        path: "/auth/register",
        name: "register",
        component: () => import("@/views/auth/register/index.vue"),
      },
      {
        path: "/auth/otp",
        name: "otp",
        component: () => import("@/views/auth/otp/index.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/main.vue"),
    name: "main",
    beforeEnter: mainGuard,
    redirect: {
      name: "profile",
    },
    children: [
      {
        path: "/profile",
        name: "profile",
        component: () => import("@/views/main/profile/index.vue"),
      },
      {
        path: "/career",
        name: "career",
        component: () => import("@/views/main/career/index.vue"),
      },
    ],
  },
];

export default routes;
