import Vue from "vue";
import Vuex from "vuex";
import getNewsInfo from "./module/newsapi/news";
import latest from "./module/newsapi/latest";
import weather from "./module/openapi/weather";
import forex from "./module/openapi/forex";
import popular from "./module/newsapi/popular";
import getTechInfo from "./module/newsapi/tech";
import getCultureInfo from "./module/newsapi/culture";
import getPoliticsInfo from "./module/newsapi/politics";
import getSocietyInfo from "./module/newsapi/society";
import getBusinessInfo from "./module/newsapi/business";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    latest,
    weather,
    forex,
    popular,
    getNewsInfo,
    getTechInfo,
    getBusinessInfo,
    getCultureInfo,
    getPoliticsInfo,
    getSocietyInfo,
  },
  strict: true,
});
