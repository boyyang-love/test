import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
 {
   path : '/',
   name : 'Shooping',
   component : ()=> import("@/views/Shooping")
 }
  
];

const router = new VueRouter({
  routes
});

export default router;
