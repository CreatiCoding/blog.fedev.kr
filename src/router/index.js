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
      meta: {},
    },
    {
      path: "/home",
      components: {
        default: () => import("../pages/HomePage"),
        ...Main,
      },
    },
    {
      path: "/document/list",
      components: {
        default: () => import("../pages/DocumentListPage"),
        ...Main,
      },
    },
    {
      path: "/document/detail/:id",
      components: {
        default: () => import("../pages/DocumentDetailPage"),
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
    // this.addScrollBehavior();
    if (this.currentRoute.meta && this.currentRoute.meta.auth) {
      this.replace("/login");
    }
  }
  goNext() {
    const loginRoute = this.options.routes.find((e) => e.path === "/login");
    this.push(loginRoute.meta.next);
  }
  getNext() {
    const loginRoute = this.options.routes.find((e) => e.path === "/login");
    return loginRoute.meta.next;
  }
  updateNext(next) {
    const loginRoute = this.options.routes.find((e) => e.path === "/login");
    loginRoute.meta.next = next;
  }

  addEventAuthGuards() {
    this.beforeEach((to, from, next) => {
      if (to.meta.auth && document.cookie.indexOf("user/token") === -1) {
        this.updateNext(to.fullPath);
        next({
          path: "/login",
        });
      } else {
        next();
      }
    });
  }

  // addScrollBehavior() {
  //   this.scrollBehavior = (to, from, savedPosition) => {
  //     if (savedPosition) {
  //       return savedPosition;
  //     } else {
  //       return { x: 0, y: 0 };
  //     }
  //   };
  // }
}
export { VueRouter, Router };
