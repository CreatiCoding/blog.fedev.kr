import Vue from "vue";
import App from "./App.vue";
import { VueRouter, Router } from "./router";
import Service from "./services";
import VueLazyLoad from "vue-lazyload";

Vue.config.productionTip = false;
Vue.use(Service);
Vue.use(VueRouter);
Vue.use(VueLazyLoad);

const vue = new Vue({
  render: (h) => h(App),
  router: new Router(),
}).$mount("#app");

window.vue = vue;
