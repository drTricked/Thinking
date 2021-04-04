import { createRouter, createWebHistory } from "@ionic/vue-router";
// import Home from "../views/Home.vue";
import Main from "../views/Main.vue";

const routes = [
  {
    path: "/",
    redirect: "/main",
  },
  {
    path: "/main",
    name: "Main",
    component: Main,
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },
  {
    path: "/new",
    name: "NewItem",
    component: () => import("@/components/NewItem.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
