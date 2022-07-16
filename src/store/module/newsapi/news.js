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
        `/everything?q=sport&from=2022-07-01&page=${payload}&apiKey=e63d199a2cfe4f45bab845e903a87458`
      )
      .then((result) => {
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
