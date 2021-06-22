<template lang="pug">
v-dialog(v-model="dialog" max-width="600")
  v-card
      v-card-title(class="text-h5 grey lighten-2") Добавить
      v-card-text
        v-container
          v-row( align="center" justify="center")
            v-col( cols="12" sm="6" md="4")
              v-text-field( label="Имя" required v-model="firstname")
            v-col( cols="12" sm="6" md="4")
              v-text-field( label="Фамилия" required v-model="lastname")
            v-col( cols="12" sm="6" md="4")
              v-text-field( label="Логин" required v-model="login")
            v-col( cols="12" sm="6" md="4")
              v-text-field( label="Пароль" required v-model="password")
            v-col( cols="12" sm="6" md="4")
              v-select(:items="['manager', 'developer']" label="Роль" required v-model="role")
      v-card-actions
        v-spacer
        v-btn(color="#FF6600" text @click="close()" :disabled='loading' :loading="loading") Закрыть
        v-btn(
          color="#FF6600"
          text
          @click="createUser()"
          :disabled='loading'
          :loading="loading") Сохранить
      v-row( no-gutters justify="center" ) {{error}}
</template>

<script>
import axios from 'axios';

export default {
  name: 'AddUserDialog',

  data() {
    return {
      dialog: false,
      date: null,
      name: null,
      firstname: null,
      lastname: null,
      login: null,
      password: null,
      role: null,
      email: null,
      error: null,
      loading: false,
    };
  },

  methods: {
    toggle() {
      this.dialog = !this.dialog;
    },

    createUser() {
      this.error = null;
      this.loading = true;

      axios.post('https://sopki.space/api/v1/private/users', {
        method: 'create',
        username: this.login,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
        role: this.role,
      }, { withCredentials: true })
        .then((res) => {
          if (res.data.status === 'notAuth') {
            this.$store.commit('removeUser');
            this.$router.replace({ name: 'login' });
          }

          if (res.data.status === 'invalidFirstname') {
            this.error = 'Имя слишком короткое';
          }
          if (res.data.status === 'invalidLastname') {
            this.error = 'Фамилия слишком короткая';
          }
          if (res.data.status === 'invalidUsername') {
            this.error = 'Попробуйте другой логин';
          }
          if (res.data.status === 'invalidPassword') {
            this.error = 'Пароль слишком короткий';
          }
          if (res.data.status === 'alreadyExist') {
            this.error = 'Данный логин уже существует';
          }

          if (res.data.status === 'success') {
            this.$store.commit('addSlave', res.data.data);
            this.close();
          }

          this.loading = false;
        })
        .catch(() => {
          this.loading = false;
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
    this.$root.$on('toggleAddUserDialog', () => { this.toggle(); });
  },

  watch: {
    dialog() {
      if (!this.dialog) this.close();
    },
  },
};
</script>
