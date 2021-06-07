<template lang="pug">
  .wrp
    v-list-item.profile-item
      v-list-item-avatar
        v-avatar.ava(color="#FF6600" size="35")
          img(src="https://cdn.vuetifyjs.com/images/john.jpg", alt="John")
      v-list-item-content
        v-list-item-title {{user.firstname}} {{user.lastname}}
        v-list-item-subtitle {{user.email}}
</template>

<script>
export default {
  name: 'Profile',
  computed: {
    user() {
      return this.$store.state.user;
    },
  },

};
</script>

<style lang='stylus' scoped>
  .profile-item {
    padding-right 0
    padding-left 0
  }
</style>
