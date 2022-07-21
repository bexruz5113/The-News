import Vue from "vue";
import Vuex from "vuex";
import forex from "./module/openapi/forex";
import latest from "./module/newsapi/latest";
import popular from "./module/newsapi/popular";
import getTechInfo from "./module/newsapi/tech";
import getNewsInfo from "./module/newsapi/news";
import getSocietyInfo from "./module/newsapi/society";
import getWeatherInfo from "./module/openapi/weather";
import getCultureInfo from "./module/newsapi/culture";
import getPoliticsInfo from "./module/newsapi/politics";
import getBusinessInfo from "./module/newsapi/business";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    forex,
    latest,
    popular,
    getNewsInfo,
    getTechInfo,
    getSocietyInfo,
    getWeatherInfo,
    getCultureInfo,
    getBusinessInfo,
    getPoliticsInfo,
  },
  strict: true,
});
