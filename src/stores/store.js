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
    countNumber: (state) => {
      return state.result + " times";
    },
  },
});
