class LocalStorage {
  constructor(namespace = "") {
    this.namespace = namespace ? `${namespace}/` : "";
  }
  get(key) {
    return localStorage.getItem(`${this.namespace}${key}`);
  }
  set(key, value) {
    localStorage.setItem(`${this.namespace}${key}`, value);
  }
  remove(key) {
    localStorage.removeItem(`${this.namespace}${key}`);
  }
}
export default {
  install(Vue) {
    Vue.prototype.$storage = Vue.storage = {
      get(key) {
        return localStorage.getItem(`${key}`);
      },
      set(key, value) {
        localStorage.setItem(`${key}`, value);
      },
      remove(key) {
        localStorage.removeItem(`${key}`);
      },
      Auth: new LocalStorage("Auth"),
    };
  },
};
