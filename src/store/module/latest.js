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
        `https://newsapi.org/v2/everything?q=bitcoin&from=${payload}&pageSize=20&apiKey=e63d199a2cfe4f45bab845e903a87458`
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
