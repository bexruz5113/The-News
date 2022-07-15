import Vue from "vue";
import Vuex from "vuex";
import getNewsInfo from "./module/news";
import latest from "./module/latest";
import weather from "./module/weather";
import forex from "./module/forex";
import popular from "./module/popular";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: { getNewsInfo, latest, weather, forex, popular },
  strict: true,
});
