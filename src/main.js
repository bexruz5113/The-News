import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import VueI18n from "vue-i18n";
Vue.use(VueI18n);

Vue.config.productionTip = false;
Vue.prototype.$https = axios;
axios.defaults.baseURL = "https://newsapi.org/v2";

new Vue({
  mounted() {
    AOS.init();
  },
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
