<template lang="pug">
  .wrp
    v-row.head( align="center" justify="space-between" no-gutters)
      v-subheader.subheader Участники
      v-btn.delete(color="#FF6600" @click="addUser()" ) Создать
    Slaves
</template>

<script>
import Nav from '../components/Nav-Buttons.vue';
import Profile from '../components/AvatarBox.vue';
import Footer from '../components/Footer.vue';
import Slaves from '../components/Slaves.vue';

export default {
  components: {
    Nav,
    Profile,
    Footer,
    Slaves,
  },
  data() {
    return {
      segments: [],
    };
  },
  methods: {
    addUser() {
      this.$root.$emit('toggleAddUserDialog');
    },
  },
};
</script>

<style lang="stylus" scoped>
.subheader{
  font-size 2em
  width 50%
}
.size{
  wight 50%
}
.delete{
  margin-right 25px
}

.head {
  margin 20px
}
</style>
