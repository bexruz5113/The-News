import axios from "axios";

const state = () => ({
  getPoliticsInfo: [],
});

const getters = {
  getPoliticsInfo(state) {
    return state.getPoliticsInfo;
  },
};
const mutations = {
  GET_POLITICSS(state, payload) {
    state.getPoliticsInfo = payload;
  },
};
const actions = {
  async getPolitics({ commit }, payload) {
    await axios
      .get(
        `/everything?q=politics&page=${payload}&apiKey=adb60e2e376e4fa39fa45a80a1f9fbfd`
      )
      .then((result) => {
        console.log(result);
        commit("GET_POLITICSS", result.data.articles);
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
