import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Slide from "@/components/slide.vue";
import Error from "@/components/error.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/slide",
    name: "Slide",
    component: Slide,
  },
  {
    path: "**",
    name: "Error",
    component: Error,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
