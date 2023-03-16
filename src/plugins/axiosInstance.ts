import axios from "axios";

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Modify the request config if needed
    return config;
  },
  (error) => {
    // Do something with the request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Modify the response data if needed
    return response;
  },
  (error) => {
    // Do something with the response error
    return Promise.reject(error);
  }
);

export default axios;
