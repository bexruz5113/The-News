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
        `/everything?q=society&page=${payload}&apiKey=adb60e2e376e4fa39fa45a80a1f9fbfd`
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
