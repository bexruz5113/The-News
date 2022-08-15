import axios from "axios";

const state = () => ({
  getNewsInfo: [],
});

const getters = {
  getNewsInfo(state) {
    return state.getNewsInfo;
  },
};
const mutations = {
  GET_NEWS(state, payload) {
    state.getNewsInfo = payload;
  },
};
const actions = {
  async getNew({ commit }, payload) {
    await axios
      .get(
        `/everything?q=sport&page=${payload}&apiKey=adb60e2e376e4fa39fa45a80a1f9fbfd`
      )
      .then((result) => {
        console.log("xaxaxa");
        console.log(result);
        commit("GET_NEWS", result.data.articles);
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
