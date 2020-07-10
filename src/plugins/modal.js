export default {
  install(Vue) {
    const modal_list = {
      alert: false,
    };
    Vue.prototype.$modal = Vue.modal = {
      getModals() {
        return modal_list;
      },
      show(name, state = {}) {
        modal_list[name] = state;
      },
      hide(name) {
        modal_list[name] = false;
      },
      hideAll() {
        console.log(modal_list);
        modal_list["alert"] = false;
      },
    };
  },
};
