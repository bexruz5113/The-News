import axios from "axios";

const state = () => ({
  getTechInfo: [],
});

const getters = {
  getTechInfo(state) {
    return state.getTechInfo;
  },
};
const mutations = {
  GET_TECHS(state, payload) {
    state.getTechInfo = payload;
  },
};
const actions = {
  async getTech({ commit }, payload) {
    await axios
      .get(
        `/everything?q=tech&page=${payload}&apiKey=adb60e2e376e4fa39fa45a80a1f9fbfd`
      )
      .then((result) => {
        console.log(result);
        commit("GET_TECHS", result.data.articles);
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
