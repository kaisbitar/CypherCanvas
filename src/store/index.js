import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiItems: []
  },
  getter: {
    apiItems: state => state.apiItems
  },
  mutations: {},
  actions: {},
  modules: {}
});
