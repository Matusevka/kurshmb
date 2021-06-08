<template lang="pug">
  v-dialog(v-model="dialog" max-width="800")
    v-card
      v-list-item-avatar
        v-avatar(color="#FF6600" size="40")
          span {{slave.firstname[0]}}{{slave.lastname[0]}}
      <br>
      p {{slave.firstname}} {{slave.lastname}}
      p1 {{slave.role}}, {{slave.username}}, {{slave.email}}
      <br>
      v-divider.dvider
      v-btn.button(color="#FF6600" @click="addUser()" ) Удалить
      v-btn(class="ma-2" color="white")
        v-icon(dark) mdi-wrench
      v-btn.button-right(color="#FF6600" @click="toggle()" ) Закрыть
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

<style lang='stylus' scoped>
p{
  font-size 1.5em
  margin-left 10px
  margin-bottom 0px
}
.divider{
  margin-top 5px
  margin-bottom 5px
}
.button-right{
  margin-right 10px
}
p1{
  margin-left 10px
}
.button{
  margin-left 10px
}
</style>
