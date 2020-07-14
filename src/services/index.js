import Auth from "../services/auth";
import Document from "../services/document";
import axios from "axios";

class Service {
  constructor() {
    this.instance = axios.create({
      baseURL: "https://api.fedev.kr",
      timeout: 1000 * 30,
      // headers: { "X-Custom-Header": "foobar" },
    });
    this.instance.interceptors.response.use(
      this.responseSuccessHandler,
      this.responseFailureHandler
    );
    this.instance.interceptors.request.use(
      this.requestSuccessHandler,
      this.requestFailureHandler
    );

    this.Document = Document;
    this.Auth = Auth;
  }
  async get(url, query) {
    return await this.instance.get(url, { params: query });
  }
  async post(url, body) {
    return await this.instance.post(url, body);
  }
  async requestSuccessHandler(config) {
    const cookie = document.cookie.match(
      new RegExp(`\\b(^|;)\\s*${"user/token"}\\s*=\\s*([^;]+)\\b`)
    );
    const token = (cookie && cookie.pop()) || null;
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  }
  async requestFailureHandler(error) {
    return Promise.reject(error);
  }
  async responseSuccessHandler(response) {
    return response;
  }
  async responseFailureHandler(error) {
    // console.log({ error });
    // if (error.response && error.response.data && error.response.data.message) {
    //   error.hint = error.message;
    //   error.message = error.response.data.message;
    // }
    return Promise.reject(error);
  }
}
export default {
  install(Vue) {
    const service = new Service();
    Vue.prototype.$service = Vue.service = service;
  },
};
