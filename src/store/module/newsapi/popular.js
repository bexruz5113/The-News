import axios from "axios";

const state = () => ({
  popular: [],
});

const getters = {
  popular(state) {
    return state.popular;
  },
};
const mutations = {
  GET_POPULAR(state, payload) {
    state.popular = payload;
  },
};
const actions = {
  async getPopular({ commit }, payload) {
    await axios
      .get(
        `/everything?q=world&from=${payload}&sortBy=popularity&pageSize=16&apiKey=adb60e2e376e4fa39fa45a80a1f9fbfd`
      )
      .then((result) => {
        console.log(result);
        commit("GET_POPULAR", result.data.articles);
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
