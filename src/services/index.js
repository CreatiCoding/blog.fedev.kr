import Post from "../services/post";
import axios from "axios";

class Service {
  constructor() {
    this.instance = axios;
    this.Post = Post;
  }
  async get(url, query) {
    return await axios.get(`https://api.fedev.kr${url}`, {
      params: query,
    });
  }
  async post(url, body) {
    return await axios.post(`https://api.fedev.kr${url}`, body);
  }
}
export default {
  install(Vue) {
    const service = new Service();
    Vue.prototype.$service = Vue.service = service;
  },
};
