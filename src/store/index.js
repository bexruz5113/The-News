import Vue from "vue";
import Vuex from "vuex";
import getNewsInfo from "./module/news";
import latest from "./module/latest";
import weather from "./module/weather";
import forex from "./module/forex";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { getNewsInfo, latest, weather, forex },
  strict: true,
});
