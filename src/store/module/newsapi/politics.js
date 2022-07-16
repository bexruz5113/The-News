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
        `/everything?q=politics&from=2022-07-01&page=${payload}&apiKey=e63d199a2cfe4f45bab845e903a87458`
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
