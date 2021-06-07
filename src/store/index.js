import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: {},
    slaves: [],
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },

    setSlaves(state, slaves) {
      state.slaves = slaves;
    },

    addSlave(state, slave) {
      state.slaves.unshift(slave);
    },
  },
  actions: {
  },
  modules: {
  },
});
