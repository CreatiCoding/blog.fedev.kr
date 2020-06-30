import post from "../services/post";
import axios from "axios";

class Service {
  constructor() {
    this.instance = axios;
    this.post = post;
  }
  async get(url, query) {
    return await axios.get(`http://creaticoding.iptime.org:4000${url}`, {
      params: query,
    });
  }
  async post(url, body) {
    return await axios.post(`http://creaticoding.iptime.org:4000${url}`, body);
  }
}
export default {
  install(Vue) {
    const service = new Service();
    Vue.prototype.$service = Vue.service = service;
  },
};
