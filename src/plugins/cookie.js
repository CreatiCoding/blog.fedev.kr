import VueCookie from "vue-cookie";

class Cookie {
  constructor(namespace = "") {
    this.namespace = namespace ? `${namespace}/` : "";
  }
  get(key) {
    return VueCookie.get(`${this.namespace}${key}`);
  }
  set(key, value, ...args) {
    VueCookie.set(`${this.namespace}${key}`, value, ...args);
  }
  remove(key) {
    VueCookie.delete(`${this.namespace}${key}`);
  }
}
export default {
  install(Vue) {
    Vue.prototype.$cookie = Vue.cookie = {
      get(key) {
        return VueCookie.get(`${key}`);
      },
      set(key, value, ...args) {
        VueCookie.set(`${key}`, value, ...args);
      },
      remove(key) {
        VueCookie.delete(`${key}`);
      },
      User: new Cookie("user"),
    };
  },
};
