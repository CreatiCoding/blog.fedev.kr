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
      path: "/login",
      components: {
        default: () => import("../pages/LoginPage"),
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
    {
      path: "/post/edit",
      components: {
        default: () => import("../pages/PostEditorPage"),
        ...Main,
      },
      meta: { auth: true },
    },
  ],
};
class Router extends VueRouter {
  constructor() {
    super(router);
    this.addEventAuthGuards();
    if (this.currentRoute.meta && this.currentRoute.meta.auth) {
      console.log("is created");
      this.replace("/login");
    }
  }
  addEventAuthGuards() {
    this.beforeEach((to, from, next) => {
      if (to.meta.auth) {
        console.log("is created22");
        to.meta.next = from.fullPath;
        this.replace("/login");
      } else {
        next();
      }
    });
  }
}
export { VueRouter, Router };
