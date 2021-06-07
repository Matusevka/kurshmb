<template lang="pug">
    v-app(color="#D6D6D6")
      v-app-bar( app white )
        v-col(class="text-center" cols="12")
          Profile
      v-navigation-drawer(app dark)
        Nav
      v-main
        router-view.router
</template>

<script>
import Nav from './components/Nav-Buttons.vue';
import Profile from './components/Profile.vue';

export default {
  components: {
    Nav,
    Profile,
  },
};
</script>

<style lang="stylus">
</style>
