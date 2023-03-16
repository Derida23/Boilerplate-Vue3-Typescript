import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/auth",
    component: () => import("@/layouts/auth.vue"),
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
        path: "/otp",
        name: "otp",
        component: () => import("@/views/auth/otp/index.vue"),
      },
    ],
  },
  {
    path: "/",
    component: () => import("@/layouts/main.vue"),
    children: [
      {
        path: "/main",
        name: "main",
        component: () => import("@/views/main/index.vue"),
      },
    ],
  },
];

export default routes;
