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
        `/everything?q=tech&from=2022-07-01&page=${payload}&apiKey=e63d199a2cfe4f45bab845e903a87458`
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
