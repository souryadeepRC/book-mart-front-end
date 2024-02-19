import axios from "axios";

const authAxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_DATABASE_URL,
  timeout: 10000,
  headers: {},
});

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
