<template lang="pug">
  .wrp
    v-list-item.profile-item
      v-list-item-content
        v-list-item-title {{user.firstname}} {{user.lastname}}
        v-list-item-subtitle {{user.email}}
      v-list-item-action
        v-btn( @click="logout()" icon )
          v-icon mdi-exit-to-app
</template>

<script>
import axios from 'axios';

export default {
  name: 'Profile',

  computed: {
    user() {
      return this.$store.state.user;
    },
  },

  methods: {
    logout() {
      axios.post('http://sopki.space:8080/api/v1/private/logout', {}, { withCredentials: true })
        .then(() => this.$router.replace({ name: 'login' }));
    },
  },

};
</script>

<style lang='stylus' scoped>
  .profile-item {
    padding-right 0
    padding-left 0
  }

  .v-list-item__content {
    display block
  }
</style>
