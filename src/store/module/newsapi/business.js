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
        `/everything?q=business&page=${payload}&apiKey=adb60e2e376e4fa39fa45a80a1f9fbfd`
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
