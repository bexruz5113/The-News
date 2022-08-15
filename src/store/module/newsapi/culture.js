import axios from "axios";

const state = () => ({
  getCultureInfo: [],
});

const getters = {
  getCultureInfo(state) {
    return state.getCultureInfo;
  },
};
const mutations = {
  GET_CULTURES(state, payload) {
    state.getCultureInfo = payload;
  },
};
const actions = {
  async getCulture({ commit }, payload) {
    await axios
      .get(
        `/everything?q=culture&page=${payload}&apiKey=adb60e2e376e4fa39fa45a80a1f9fbfd`
      )
      .then((result) => {
        console.log(result);
        commit("GET_CULTURES", result.data.articles);
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
