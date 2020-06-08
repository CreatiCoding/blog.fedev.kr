import post from "../services/post";
import axios from "axios";

class Service {
  constructor() {
    this.instance = axios;
    this.post = post;
  }
  async get(url, query) {
    return await axios.get(url, { params: query });
  }
  async post(url, body) {
    return await axios.post(url, body);
  }
  async getGraphQL(query) {
    const url =
      "https://us-central1-fedev-backend.cloudfunctions.net/api/graphql";
    return await this.get(url, { query });
  }
}
export default {
  install(Vue) {
    const service = new Service();
    Vue.prototype.$service = Vue.service = service;
  },
};
