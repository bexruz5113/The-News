import axios from "axios";

const state = () => ({
  getSocietyInfo: [],
});

const getters = {
  getSocietyInfo(state) {
    return state.getSocietyInfo;
  },
};
const mutations = {
  GET_SOCIETYS(state, payload) {
    state.getSocietyInfo = payload;
  },
};
const actions = {
  async getSociety({ commit }, payload) {
    await axios
      .get(
        `/everything?q=society&from=2022-07-01&page=${payload}&apiKey=e63d199a2cfe4f45bab845e903a87458`
      )
      .then((result) => {
        console.log(result);
        commit("GET_SOCIETYS", result.data.articles);
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
