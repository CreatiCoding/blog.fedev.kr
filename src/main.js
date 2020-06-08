import Vue from "vue";
import App from "./App.vue";
import Service from "./services";
import VueRouter from "vue-router";

Vue.config.productionTip = false;

Vue.use(Service);
Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [{ path: "/", component: () => import("./components/HelloWorld") }],
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
