import axios from "axios";

const state = () => ({
  weather: [],
});

const getters = {
  weather(state) {
    return state.weather;
  },
};
const mutations = {
  GET_WEATHER(state, payload) {
    state.weather = payload;
  },
};
const actions = {
  async getWeather({ commit }, payload) {
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=824f6d1f4890c8ecc1b79b4d70735360`
      )
      .then((result) => {
        console.log(result);
        commit("GET_WEATHER", result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
