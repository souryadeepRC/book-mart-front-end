import axios from "axios";
// utils
import { getItemFromLS } from "src/utils/storage-utils"; 
// constants
import { STORAGE_KEY } from "src/constants/common-constants";

const authAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DATABASE_URL,
  timeout: 10000,
  headers: {},
});
authAxiosInstance.interceptors.request.use(
  (config) => {
    const accessToken: string | null = getItemFromLS(STORAGE_KEY.AUTH_TOKEN);
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default class AuthHTTP {
  static get(url: string, config: any) {
    return authAxiosInstance.get(url, config);
  }
  static post(url: string, data: any, config: any) {
    return authAxiosInstance.post(url, data, config);
  }
  static put(url: string, data: any, config: any) {
    return authAxiosInstance.put(url, data, config);
  }
  static delete(url: string, config: any) {
    return authAxiosInstance.delete(url, config);
  }
}
