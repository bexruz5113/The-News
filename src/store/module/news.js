import axios from "axios";

const state = () => ({
  getNewsInfo: [],
  // totalResults: 0,
});

const getters = {
  getNewsInfo(state) {
    return state.getNewsInfo;
  },
  // totalResults(state) {
  //   return state.totalResults;
  // },
};
const mutations = {
  GET_NEWS(state, payload) {
    state.getNewsInfo = payload;
  },
  // GET_TOTALRESULTS(state, payload) {
  //   state.totalResults = payload;
  // },
};
const actions = {
  // async getNew({ commit }, payload, query) {
  //   await axios
  //     .get(
  //       `https://newsapi.org/v2/everything?q=${query}&page=${payload}&apiKey=e63d199a2cfe4f45bab845e903a87458`
  //     )
  //     .then((result) => {
  //       console.log(result);
  //       // if (!state.totalResults) {
  //       //   commit("GET_TOTALRESULTS", result.data.totalResults);
  //       // }
  //       commit("GET_NEWS", result.data.articles);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // },
  async getNew({ commit }, payload) {
    await axios
      .get(
        `/everything?q=sport&from=2022-07-01&language=en&pageSize=20&page=${payload}&apiKey=e63d199a2cfe4f45bab845e903a87458`
      )
      .then((result) => {
        console.log(result);
        // if (!state.totalResults) {
        //   commit("GET_TOTALRESULTS", result.data.totalResults);
        // }
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
