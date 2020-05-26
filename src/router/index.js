import Vue from "vue";
import VueRouter from "vue-router";

import GoodsSizeRouter from "./GoodsSizelRouter";
import GoodsDetailRouter from "./GoodsDetailRouter";
Vue.use(VueRouter);

const routes = [
  GoodsSizeRouter,
  GoodsDetailRouter,
  {
    path: "/shooping",
    name: "Shooping",
    component: () => import("@/views/Shooping")
  }
];

const router = new VueRouter({
  routes
});

export default router;
