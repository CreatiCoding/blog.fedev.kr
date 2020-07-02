import VueRouter from "vue-router";

const MainHeader = () => import("../components/MainHeader");
const MainFooter = () => import("../components/MainFooter");
const Main = { MainHeader, MainFooter };
const router = {
  mode: "history",
  routes: [
    {
      path: "/",
      components: {
        default: () => import("../pages/HomePage"),
        ...Main,
      },
    },
    {
      path: "/home",
      components: {
        default: () => import("../pages/HomePage"),
        ...Main,
      },
    },
    {
      path: "/post/list",
      components: {
        default: () => import("../pages/PostListPage"),
        ...Main,
      },
    },
    {
      path: "/post/detail/:id",
      components: {
        default: () => import("../pages/PostDetailPage"),
        ...Main,
      },
    },
  ],
};
class Router extends VueRouter {
  constructor() {
    super(router);
  }
}
export { VueRouter, Router };
