import useAxios from "@/composable/useAxios";
import { defineStore } from "pinia";
import { RAuth } from "./auth.type";
import { IForm } from "@/views/auth/login/login.type";
import Cookies from 'js-cookie'

export const useAuthStore = defineStore("auth", {
  state: (): RAuth => {
    return {
      user: null,

      loading: false,
      error: false,
      error_notification: [],
    };
  },
  getters: {},
  actions: {
    async login(params: IForm) {
      this.loading = true;

      const { data, error, status, request } = useAxios();

      await request({
        url: "/api/v1/oauth/sign_in",
        method: "POST",
        params,
        onSuccess: (res) => {
          const token: string = res.user.access_token
          Cookies.set('session', token, { expires: 7, path: '/' })
          this.loading = false;
        },
        onError: (err) => {
          this.error = true;
          this.error_notification = err.message;
          this.loading = false;
        },
      });
    },
  },
});
