// library
import axios from "axios";
// store
/* import { rootStore } from "src/store/root-store"; */
// utils
import { getItemFromLS } from "src/utils/storage-utils";
// constants
import { STATUS_CODES } from "src/constants/common-constants";

const appAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  timeout: 0,
});

appAxiosInstance.interceptors.request.use(
  (config) => {
    const accessToken: string | null = getItemFromLS("accessToken");
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

appAxiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === STATUS_CODES.UNAUTHORIZED) {
      //store.dispatch(logoutUser());
      window.location.href = "/products";
    }
    const Regex5XX = /^5\d{2}$/;
    if (Regex5XX.test(error?.response?.status)) {
      // store.dispatch(showNotification())
    }
    return Promise.reject(error);
  }
);

export default class AppHTTP {
  static get(url: string, config?: any) {
    return appAxiosInstance.get(url, config);
  }
  static post(url: string, data: any, config: any) {
    return appAxiosInstance.post(url, data, config);
  }
  static patch(url: string, data: any, config: any) {
    return appAxiosInstance.patch(url, data, config);
  }
  static put(url: string, data: any, config: any) {
    return appAxiosInstance.put(url, data, config);
  }
  static delete(url: string, config: any) {
    return appAxiosInstance.delete(url, config);
  }
}
