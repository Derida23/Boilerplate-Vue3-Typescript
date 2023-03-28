import useAxios from "@/composable/useAxios";
import { defineStore } from "pinia";
import { IAuth, IAuthRes, IUser, ILogin } from "@/types/auth";
import { IForm } from "@/views/auth/login/login.type";
import Cookies from "js-cookie";
import { API } from "@/utils/api";

export const useAuthStore = defineStore("auth", {
  state: (): IAuth => {
    return {
      user: null,
      fetcher: false,
      loading: false,
      error: false,
      error_notification: [],
    };
  },
  getters: {
    isAuthenticated: (state) => !!state.user
  },
  actions: {
    async login(params: IForm): Promise<void> {
      this.loading = true;

      const { request } = useAxios();

      await request({
        url: API.login,
        method: "POST",
        params,
        onSuccess: async (res: IAuthRes<ILogin>): Promise<boolean> => {
          const token: string = res.user.access_token;
          Cookies.set("session", token, { expires: 7, path: "/" });

          await this.credential();
          this.loading = false;

          return true
        },
        onError: (err) => {
          this.error = true;
          this.error_notification = err.message;
          this.loading = false;
        },
      });
    },
    async credential() {
      this.loading = true;

      const { request } = useAxios();

      await request({
        url: API.credential,
        method: "GET",
        params: { access_token: Cookies.get("session") },
        onSuccess: (res: IAuthRes<IUser>) => {
          this.user = res.user;
          this.fetcher = true
          this.loading = false;
        },
        onError: (err) => {
          this.fetcher = false
          this.error = true;
          this.error_notification = err.message;
          this.loading = false;
        },
      });
    },
  },
});
