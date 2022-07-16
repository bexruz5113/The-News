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
        `/everything?q=culture&from=2022-07-01&page=${payload}&apiKey=e63d199a2cfe4f45bab845e903a87458`
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
