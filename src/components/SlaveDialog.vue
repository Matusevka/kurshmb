<template lang="pug">
  v-dialog(v-model="dialog" max-width="800")
    v-card
      span {{slave}}
</template>

<script>
export default {
  name: 'SlaveDialog',
  data() {
    return {
      dialog: false,
      slave: {},
    };
  },

  methods: {
    toggle() {
      this.dialog = !this.dialog;
    },
  },

  created() {
    this.$root.$on('openSlaveDialog', (slave) => {
      this.toggle();
      this.slave = slave;
    });
  },
};
</script>
