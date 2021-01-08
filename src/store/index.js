import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiItems: [],
    records: []
  },
  getter: {
    apiItems: state => state.apiItems
  },
  mutations: {
    setRecordsResults(state, records) {
      state.records = records;
    }
  },
  actions: {},
  modules: {}
});
