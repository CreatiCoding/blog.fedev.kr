import localStorage from 'local-storage';

class LocalStorage {
  constructor(namespace = "") {
    this.namespace = namespace ? `${namespace}/` : "";
  }
  get(key) {
    return localStorage.get(`${this.namespace}${key}`);
  }
  set(key, value) {
    localStorage.set(`${this.namespace}${key}`, value);
  }
  remove(key) {
    localStorage.remove(`${this.namespace}${key}`);
  }
}
export default {
  install(Vue) {
    Vue.prototype.$storage = Vue.storage = {
      get(key) {
        return localStorage.get(`${key}`);
      },
      set(key, value) {
        localStorage.set(`${key}`, value);
      },
      remove(key) {
        localStorage.remove(`${key}`);
      },
      Auth: new LocalStorage("Auth"),
    };
  },
};
