<template lang="pug">
  .wrp
        v-sheet.container( color="white", elevation="5")
          v-col(class="text-center" v-if="loading")
            v-progress-circular(
                size=50
                width=7
                color='#FF6600'
                v-show="loading"
                indeterminate
              )

          v-simple-table(v-else)
            template( v-slot:default )
              thead
                tr
                  th Имя
                  th Почта
                  th Роль
              tbody
                tr(v-for="slave in slaves" :key="slave._id" @click="openSlave(slave)")
                  td {{ slave.firstname }} {{ slave.lastname }}
                  td {{ slave.email }}
                  td {{ slave.role }}

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      loading: false,
    };
  },

  computed: {
    slaves: {
      get() {
        return this.$store.getters.slaves;
      },

      set(data) {
        this.$store.commit('setSlaves', data);
      },
    },
  },

  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      this.loading = true;

      axios.post('http://sopki.space:8080/api/v1/private/users', {
        method: 'receive',
        submethod: 'all',
      })
        .then((res) => {
          if (res.data.status === 'success') this.slaves = res.data.data.reverse();
          this.loading = false;
        })
        .catch(() => { this.loading = false; });
    },

    openSlave(slave) {
      this.$root.$emit('openSlaveDialog', slave);
    },
  },
};
</script>

<style lang="stylus" scoped>
.container{
    marin 0 20px
}
.check{
    margin-left 10px
}
.margin{
    margin-left 20px
}
.indent{
    margin-left 7%
}
</style>
