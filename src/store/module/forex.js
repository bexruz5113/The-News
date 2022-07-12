import axios from "axios";

const state = () => ({
  usd: 0,
  rub: 0,
  eur: 0,
});

const getters = {
  usd(state) {
    return state.usd;
  },
  rub(state) {
    return state.rub;
  },
  eur(state) {
    return state.eur;
  },
};
const mutations = {
  GET_USD(state, payload) {
    state.usd = payload;
  },
  GET_RUB(state, payload) {
    state.rub = payload;
  },
  GET_EUR(state, payload) {
    state.eur = payload;
  },
};
const actions = {
  async getUsd({ commit }) {
    await axios
      .get(
        "https://v6.exchangerate-api.com/v6/85ee0528d0369ff8e0088522/pair/USD/UZS"
      )
      .then((result) => {
        console.log(result);
        commit("GET_USD", result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async getRub({ commit }) {
    await axios
      .get(
        "https://v6.exchangerate-api.com/v6/85ee0528d0369ff8e0088522/pair/RUB/UZS"
      )
      .then((result) => {
        console.log(result);
        commit("GET_RUB", result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  async getEur({ commit }) {
    await axios
      .get(
        "https://v6.exchangerate-api.com/v6/85ee0528d0369ff8e0088522/pair/EUR/UZS"
      )
      .then((result) => {
        console.log(result);
        commit("GET_EUR", result.data);
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
