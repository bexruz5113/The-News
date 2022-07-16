import axios from "axios";

const state = () => ({
  getBusinessInfo: [],
});

const getters = {
  getBusinessInfo(state) {
    return state.getBusinessInfo;
  },
};
const mutations = {
  GET_BUSINESSS(state, payload) {
    state.getBusinessInfo = payload;
  },
};
const actions = {
  async getBusiness({ commit }, payload) {
    await axios
      .get(
        `/everything?q=business&from=2022-07-01&page=${payload}&apiKey=e63d199a2cfe4f45bab845e903a87458`
      )
      .then((result) => {
        console.log(result);
        commit("GET_BUSINESSS", result.data.articles);
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
