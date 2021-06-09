import Vue from 'vue';
import Vuex from 'vuex';
import timetracker from './timetracker';

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

    updateSlave(state, data) {
      for (let i = 0; i < state.slaves.length; i += 1) {
        if (data._id !== state.slaves[i]._id) continue;

        Object.assign(state.slaves[i], data);
      }
    },

    removeSlave(state, id) {
      const index = state.slaves.findIndex((slave) => slave._id === id);

      if (index !== -1) {
        state.slaves.splice(index, 1);
      }
    },
  },
  getters: {
    slaves: (state) => state.slaves,
  },
  actions: {
  },
  modules: {
    timetracker,
  },
});
