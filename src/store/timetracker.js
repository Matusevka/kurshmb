import axios from 'axios';

const actions = {
  getAllRange({ commit }, range = 'Last 7 Days') {
    commit('timeRangeData', null);

    axios.post('http://sopki.space:8080/api/v1/private/timetracker/receive', {
      range,
      method: 'all',
      submethod: 'range',
    }, { withCredentials: true })
      .then((response) => commit('timeRangeData', response.data.data))
      .catch((err) => console.log(err));
  },
};

const mutations = {
  timeRangeData(state, data) {
    state.timeRangeData = data;
  },

  sortedItem(state, item) {
    state.sortedItem = item;
  },
};

const state = {
  timeRangeData: null,
  rangeDuration: 0,
  sortedItem: null,
};

export default {
  state,
  mutations,
  actions,
};
