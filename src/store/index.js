import Vue from "vue";
import Vuex from "vuex";
import getNewsInfo from "./module/news";
import latest from "./module/latest";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { getNewsInfo, latest },
  strict: true,
});
