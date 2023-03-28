import useAxios from "@/composable/useAxios";
import { defineStore } from "pinia";
import { RAuth } from "./auth.type";
import { IForm } from "@/views/auth/login/login.type";

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
        data: params,
        onSuccess: (response) => console.log("Request succeeded!", response),
        onError: (error) => console.log("Request failed!", error),
      });

      this.loading = false;
    },
  },
});
