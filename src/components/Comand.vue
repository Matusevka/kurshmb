<template lang="pug">
  v-card
    v-tabs(show-arrows, color="red")
      v-tabs-slider
      v-tab( v-for="item in slaves" color="black") {{item.name}} {{item.lastname}}
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      slaves: [],
    };
  },
  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.post('http://sopki.space:8080/api/v1/private/users', {
        method: 'receive',
        submethod: 'all',
      })
        .then((res) => {
          if (res.data.status === 'success') this.slaves = res.data.data;
        });
    },
  },
};
</script>

<style lang="stylus" scoped>
.tabs{
    margin-top: 20px
    margin-bottom: 20px
    max-width 95%
    min-width 0
}

.width {
  min-width none !important
}
</style>
