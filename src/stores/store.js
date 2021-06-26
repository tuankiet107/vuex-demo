import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    result: 0,
  },
  getters: {
    doubleNumber: (state) => {
      return state.result * 10;
    },
  },
  mutations: {
    incrementStoredNumber(state) {
      state.result++;
    },
    decrementStoredNumber(state) {
      state.result--;
    },
  },
  actions: {
    callIncrementMutation({ commit }) {
      commit("incrementStoredNumber");
    },
    tryAsync({ commit }) {
      setTimeout(() => {
        commit("decrementStoredNumber");
      }, 2000);
    },
  },
});
