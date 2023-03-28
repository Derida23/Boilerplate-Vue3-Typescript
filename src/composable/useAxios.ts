/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { reactive, toRefs } from "vue";
import { AxiosRequestConfig, AxiosError, AxiosResponse } from "axios";
import axios from "@/plugins/axiosInstance";

export enum Status {
  IDLE = "idle",
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

export interface ErrorType {
  message: Array<string>;
  code: number;
}

interface Result<K> {
  status: Status;
  data: AxiosRequestConfig["data"];
  error: ErrorType | null
}

interface Options {
  url: string;
  method?: AxiosRequestConfig["method"];
  data?: AxiosRequestConfig["data"];
  params?: AxiosRequestConfig["params"];
  headers?: AxiosRequestConfig["headers"];
  onSuccess?: (response: AxiosResponse) => void;
  onError?: (error: ErrorType) => void;
}
export default function useAxios<T>() {
  const result = reactive<Result<T>>({
    status: Status.IDLE,
    data: null,
    error: null
  });

  async function request({
    url,
    method = "GET",
    data = null,
    params,
    onSuccess = () => {},
    onError = () => {},
  }: Options) {

    result.status = Status.LOADING;

    try {
      const axiosResponse = await axios.request({
        url,
        method,
        data,
        params,
      });

      result.status = Status.SUCCESS;
      result.data = axiosResponse.data.data;

      onSuccess(result.data);
    } catch (err) {
      result.status = Status.ERROR;

      const { response } = err as AxiosError | any;

      const error: ErrorType = {
        message: response?.data.error.errors,
        code: response.status,
      };

      onError(error);
    } finally {
      result.status = Status.SUCCESS;
    }
  }

  return { ...toRefs(result), request };
}
