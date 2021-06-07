<template lang="pug">
  v-app
    v-subheader.subheader Участники
    v-col.size(class="text-right" cols="12")
      v-btn.delete(color="#D9534F") Удалить
    Slaves
</template>

<script>
import axios from 'axios';

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
  created() {
    this.showUsers();
  },
  methods: {
    showUsers() {
      axios.post('http://sopki.space:8080/api/v1/private/users', {
        method: 'receive',
        submethod: 'all',
      });
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
</style>
