import Vue from "vue";

export default {
  login({ id, password }) {
    return Vue.service.post(`/auth/login`, { id, password });
  },
};
