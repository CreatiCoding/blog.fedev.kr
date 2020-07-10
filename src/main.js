import Vue from "vue";
import App from "./App.vue";
import { VueRouter, Router } from "./router";
import Service from "./services";
import VueLazyLoad from "vue-lazyload";
import StackeditPlugin from "./plugins/stackedit";
import StoragePlugin from "./plugins/storage";
import ModalPlugin from "./plugins/modal";

Vue.config.productionTip = false;

Vue.use(Service);
Vue.use(VueRouter);
Vue.use(VueLazyLoad);
Vue.use(StackeditPlugin);
Vue.use(StoragePlugin);
Vue.use(ModalPlugin);

const vue = new Vue({
  render: (h) => h(App),
  router: new Router(),
}).$mount("#app");

window.vue = vue;
