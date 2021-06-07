<template lang="pug">
    v-app(color="#D6D6D6")
      v-app-bar( app white v-if="!$route.meta.public" )
        v-spacer
        Profile
      v-navigation-drawer(app dark v-if="!$route.meta.public" )
        Nav
      v-main
        router-view.router

      AddUserDialog
</template>

<script>
import Nav from './components/Nav-Buttons.vue';
import Profile from './components/Profile.vue';
import AddUserDialog from './components/AddUserDialog.vue';

export default {
  components: {
    Nav,
    Profile,
    AddUserDialog,
  },
};
</script>

<style lang="stylus">
</style>
