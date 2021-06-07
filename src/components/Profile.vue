<template lang="pug">
  v-row
    v-col(cols="1")
      v-avatar.ava(color="#FF6600" size="35")
        img(src="https://cdn.vuetifyjs.com/images/john.jpg", alt="John")
    v-col(cols="2")
      span {{user.firstname}} {{user.lastname}}
      <br>
      span {{user.email}}
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
</style>
