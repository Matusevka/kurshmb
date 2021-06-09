<template lang="pug">
  .wrp
    v-row.head( align="center" justify="space-between" no-gutters)
      v-subheader.subheader Участники
      v-btn.create(color="#FF6600" @click="addUser()" ) Создать
    Slaves
</template>

<script>
import Footer from '../components/Footer.vue';
import Slaves from '../components/Slaves.vue';

export default {
  components: {
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
.create{
  margin-right 25px
}

.head {
  margin 20px
}
</style>
