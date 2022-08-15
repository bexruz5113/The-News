import axios from "axios";

const state = () => ({
  latest: [],
});

const getters = {
  latest(state) {
    return state.latest;
  },
};
const mutations = {
  GET_LATEST(state, payload) {
    state.latest = payload;
  },
};
const actions = {
  async getLatest({ commit }, payload) {
    await axios
      .get(
        `/everything?q=bitcoin&from=${payload}&pageSize=9&apiKey=adb60e2e376e4fa39fa45a80a1f9fbfd`
      )
      .then((result) => {
        console.log(result);
        commit("GET_LATEST", result.data.articles);
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
