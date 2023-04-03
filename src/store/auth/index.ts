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
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async login(params: IForm): Promise<boolean> {
      this.loading = true;

      const { fetch } = useAxios();

      const result = await fetch({
        url: API.login,
        method: "POST",
        params,
        onSuccess: async (res: IAuthRes<ILogin>): Promise<void> => {
          const token = res.user.access_token;
          Cookies.set("session", token, { expires: 7, path: "/" });

          await this.credential();
          this.loading = false;
        },
        onError: (err): void => {
          this.error = true;
          this.error_notification = err.message;
          this.loading = false;
        },
      });

      return result
    },
    async credential() {
      this.loading = true;

      const { fetch } = useAxios();

      await fetch({
        url: API.credential,
        method: "GET",
        params: { access_token: Cookies.get("session") },
        onSuccess: (res: IAuthRes<IUser>): void => {
          this.user = res.user;
          this.fetcher = true;
          this.loading = false;
        },
        onError: (err): void => {
          this.fetcher = false;
          this.error = true;
          this.error_notification = err.message;
          this.loading = false;
        },
      });
    },
  },
});
