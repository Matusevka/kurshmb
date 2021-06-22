<template lang="pug">
  v-dialog(v-model="dialog" max-width="800" max-height="800")
    v-card
      v-btn.float(color="#FF6600" icon @click="toggle()" )
          img.picture(src="../assets/close.svg")
      v-card-title.wight {{slave.firstname}} {{slave.lastname}}
      v-card-text
        v-list
          v-subheader Информация
          v-list-item
            v-list-item-content
              v-list-item-subtitle Почта
              v-list-item-title {{slave.email}}
          v-list-item
            v-list-item-content
              v-list-item-subtitle Логин
              v-list-item-title {{slave.username}}
          v-list-item
            v-list-item-content
              v-list-item-subtitle Роль
              v-list-item-title {{slave.role}}
          v-list-item
            v-list-item-content
              v-list-item-subtitle Дата создания
              v-list-item-title {{slave.create_at}}
          v-list-item
            v-list-item-content
              v-list-item-subtitle Jira Id
              v-list-item-title {{slave.jiraId}}
          v-list-item
            v-list-item-content
              v-list-item-subtitle Wakatime Id
              v-list-item-title {{slave.wakatimeId}}

      v-row( v-if="mainError" no-gutters justify="center" ) {{mainError}}

      v-divider.dvider

      v-card-actions
        v-flex
          v-btn(color="#FFF" :loading="isLoading" @click="removeSlave()" )
            img.picture(src="../assets/delete.svg")
          v-btn(color="white" @click="isEdit = !isEdit") Редактировать

    v-dialog(v-model="isEdit" max-width="500")
      v-card
        v-card-title Редактирование
        v-card-text
          v-list
            v-list-item
              v-list-item-content
                v-text-field( v-model="updUser.firstname" color="#FF6600" hide-details label="Имя" )
            v-list-item
              v-list-item-content
                v-text-field( v-model="updUser.lastname" color="#FF6600"  hide-details label="Фамилия" )
            v-list-item
              v-list-item-content
                v-text-field( v-model="updUser.role" color="#FF6600"  hide-details label="Роль" )
            v-list-item
              v-list-item-content
                v-text-field( v-model="updUser.email" color="#FF6600"  hide-details label="Почта" )

        v-row( v-if="error" no-gutters justify="center" ) {{error}}

        v-divider.dvider

        v-card-actions
          v-row( no-gutters justify="center" )
            v-btn(color="#FF6600" :loading="isLoadingUpt" @click="updateSlave()" ) Обновить
</template>

<script>
import axios from 'axios';

export default {
  name: 'SlaveDialog',
  data() {
    return {
      dialog: false,
      slave: {},
      isEdit: false,
      updUser: {},
      error: null,
      mainError: null,
      isLoadingUpt: false,
      isLoading: false,
    };
  },

  methods: {
    toggle() {
      this.dialog = !this.dialog;
      this.slave = {};
      this.updUser = {};
      this.isEdit = false;
      this.error = null;
      this.isLoadingUpt = false;
      this.isLoading = false;
    },

    updateSlave() {
      this.isLoadingUpt = true;

      axios.post('https://sopki.space/api/v1/private/users', Object.assign(this.updUser, { method: 'update', id: this.slave._id }), { withCredentials: true })
        .then((response) => {
          if (response.data.status === 'notAuth') {
            this.$store.commit('removeUser');
            this.$router.replace({ name: 'login' });
          }

          if (response.data.status === 'invalidFirstname') {
            this.error = 'Имя слишком короткое';
          }

          if (response.data.status === 'invalidLastname') {
            this.error = 'Фамилия слишком короткая';
          }

          if (response.data.status === 'notSuccess') {
            this.error = 'Ошибка сервера';
          }

          if (response.data.status === 'success') {
            this.slave = response.data.data;
            this.$store.commit('updateSlave', this.updUser);
            this.isEdit = false;
          }

          this.isLoadingUpt = false;
        })
        .catch(() => {
          this.isLoadingUpt = false;
        });
    },

    removeSlave() {
      this.isLoading = true;

      axios.post('https://sopki.space/api/v1/private/users', {
        id: this.slave._id,
        method: 'remove',
      }, { withCredentials: true })
        .then((response) => {
          if (response.data.status === 'notAuth') {
            this.$store.commit('removeUser');
            this.$router.replace({ name: 'login' });
          }

          if (response.data.status === 'notSuccess') {
            this.mainError = 'Ошибка сервера';
          }

          if (response.data.status === 'success') {
            this.$store.commit('removeSlave', this.slave._id);
            this.toggle();
          }

          this.isLoading = false;
        })
        .catch(() => {
          this.isLoading = false;
        });
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
  },

  created() {
    this.$root.$on('openSlaveDialog', (slave) => {
      this.toggle();
      this.slave = slave;

      this.updUser = {
        email: this.slave?.email,
        role: this.slave?.role,
        firstname: this.slave?.firstname,
        lastname: this.slave?.lastname,
        _id: this.slave._id,
      };
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
.wight{
  wight 85%
}
.float{
  float right
  margin-top 8px
}
.picture{
  height 25px
  weught auto
}
.button{
  margin-left 10px
}
</style>
