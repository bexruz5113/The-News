import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/views/Home.vue";
import Tech from "@/views/Tech.vue";
import Politics from "@/views/Politics.vue";
import Society from "@/views/Society.vue";
import Culture from "@/views/Culture.vue";
import Business from "@/views/Business.vue";
import Error from "@/components/error.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/sport",
    name: "Sport",
    component: () =>
      import(/* webpackChunkName: "sport" */ "../views/Sport.vue"),
  },
  {
    path: "/tech",
    name: "Tech",
    component: Tech,
  },
  {
    path: "/business",
    name: "Business",
    component: Business,
  },
  {
    path: "/politics",
    name: "Politics",
    component: Politics,
  },
  {
    path: "/society",
    name: "Society",
    component: Society,
  },
  {
    path: "/culture",
    name: "Culture",
    component: Culture,
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
