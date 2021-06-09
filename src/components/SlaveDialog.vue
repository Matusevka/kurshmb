<template lang="pug">
  v-dialog(v-model="dialog" max-width="800" max-height="800")
    v-card
      v-divider
      v-list-item-avatar
        v-avatar(color="#FF6600" rounded size="140")
          span {{slave.firstname[0]}}{{slave.lastname[0]}}
      p2 Добавлен(а) 10.12.1999
      <br>
      p {{slave.firstname}} {{slave.lastname}}
      p1 {{slave.role}}, {{slave.username}}, {{slave.email}}
      <br>
      v-divider.dvider
      v-btn.button(color="#FF6600" @click="removeUser(slave._id)" ) Удалить
      v-btn(class="ma-2" color="white")
        v-icon(dark) mdi-wrench
      v-btn.button-right(color="#FF6600" @click="toggle()" ) Закрыть
</template>

<script>
import axios from 'axios';

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
    close() {
      this.login = null;
      this.firstname = null;
      this.lastname = null;
      this.password = null;
      this.role = null;
      this.error = null;
      this.dialog = false;
    },
    removeUser() {
      this.loading = true;
      axios.post('http://sopki.space:8080/api/v1/private/users', {
        method: 'remove',
        // eslint-disable-next-line no-underscore-dangle
        id: this.slave._id,
      })
        .then((res) => {
          console.log(res);

          if (res.data.status === 'success') {
            this.$store.commit('removeUser', res.data.data);
            this.close();
          }

          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
          this.loading = false;
        });
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
