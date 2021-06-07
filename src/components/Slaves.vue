<template lang="pug">
  v-app
        v-sheet.container( color="white", elevation="5")
            v-row
                v-col.margin(class="text-left" cols="1.5") Имя
                v-col(class="text-center" cols="1.5") Почта
                v-col.margin(class="text-right" cols="1.5") Роль
            v-divider
            <br>
            v-row(v-for="slave in slaves", :key="slave")
                v-checkbox.check(v-model="checkbox", class="text-xs-center")
                v-col.margin(class="text-left"
                cols="1.5") {{ slave.firstname }} {{ slave.lastname }}
                v-col(class="text-center") {{ slave.email }}
                v-col.margin(class="text-right" cols="1.5") {{ slave.role }}
                b-divider
            v-col(class="text-center")
                v-btn(class="mx-2", fab, dark, color="#FF6600", v-on:click="isShow = !isShow"
                @click="addUser()")
                    v-icon mdi-plus

        v-dialog(v-model="dialog" max-width="600")
          v-card
            v-card-title(class="text-h5 grey lighten-2") Добавить
            v-card-text
              v-conteiner
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
              v-row(color="#FF6600") {{error}}
              v-btn(color="#FF6600" text @click="close()") Закрыть
              v-btn(color="#FF6600" text @click="createUser()") Сохранить

</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      date: null,
      name: null,
      firstname: null,
      lastname: null,
      login: null,
      password: null,
      role: null,
      email: null,
      slaves: [],
      dialog: false,
      error: null,
    };
  },

  created() {
    this.getUsers();
  },
  methods: {
    getUsers() {
      axios.post('http://sopki.space:8080/api/v1/private/users', {
        method: 'receive',
        submethod: 'all',
      })
        .then((res) => {
          if (res.data.status === 'success') this.slaves = res.data.data;
        });
    },
    addUser() {
      this.dialog = true;
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
    createUser() {
      axios.post('http://sopki.space:8080/api/v1/private/users', {
        method: 'create',
        username: this.login,
        firstname: this.firstname,
        lastname: this.lastname,
        password: this.password,
        role: this.role,
        error: null,
      })
        .then((res) => {
          console.log(res);

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
            this.$store.commit('User', res.data.data);
            this.$router.push({ name: 'options' });
            this.login = null;
            this.firstname = null;
            this.lastname = null;
            this.password = null;
            this.role = null;
            this.error = null;
            this.dialog = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style lang="stylus" scoped>
.container{
    width 95%
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
