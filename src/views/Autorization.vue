<template lang="pug">
  .auth-container
    v-row.logo(align='center' justify='center')
      img.logo-icon(src="../assets/logo.png", alt="alt")
    v-row.text-field(align='center' justify='center')
      v-row.text-field-center(align='center' justify='center' no-gutters)
        v-text-field.text-field-center-input(
          v-model="username"
          solo hide-details
          label='Username'
          type='text'
          required)
      v-row.text-field-center(align='center' justify='center' no-gutters)
        v-text-field.text-field-center-input(
          v-model="password"
          solo hide-details
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          label='Пароль'
          required)

    v-row.button(align='center' justify='center')
          .button-center
            v-btn.button-center-registration(
              @click="auth()"
              :loading='loading'
              :disabled='loading') Войти

    v-dialog(v-model="dialog" width="500")

      v-card(height="")
        v-card-title(class="text-h5 grey lighten-2") Ошибка
        v-card-text(align='center' justify='center' v-show="error") {{error}}
        v-divider
        v-card-actions
          v-spacer
          v-btn( color="primary" text @click="dialog = false") Ок
</template>

<script>
import axios from 'axios';

export default ({
  name: 'autorization',
  data() {
    return {
      password: null,
      username: null,
      showPassword: false,
      loading: false,
      error: null,
      dialog: false,
    };
  },

  methods: {
    auth() {
      this.loading = true;

      axios.post('http://sopki.space:8080/api/v1/public/signin', {
        username: this.username,
        password: this.password,
      })
        .then((res) => {
          this.loading = false;
          console.log(res);

          if (res.data.status === 'notExist') {
            this.error = 'Невернй логин или пароль';
            this.dialog = true;
          }

          if (res.data.status === 'success') {
            this.$store.commit('setUser', res.data.data);
            this.$router.push({ name: 'main' });
          }
        })
        .catch((err) => {
          this.loading = false;
          console.log(err);
        });
    },
  },
});
</script>

<style lang="stylus" scoped>
  .auth-container {
    width 100%
    height 90%
    padding 0
    text-align: center;
    vertical-align middle
  }
  .logo {
    position relative
    margin-bottom 50px
    margin-right 0
    margin-left 0
    margin-top 3%
    text-align: center;
      &-icon {
        position relative
        vertical-align middle
        width:auto;
        height:100px;
      }
  }
  .text-field {
    width 100%;
    margin 0;
      &-center {
        width 100%;
        padding-right 10px;
        padding-left 10px;
          &-input {
            padding-right 10px;
            padding-left 10px;
            max-width 600px
            margin-top 15px !important
          }
          &-rules-text {
            margin-top 20px
            font-size 13px
            word-break: normal
          }
          &-rules-button {
            font-size 13px
            margin-top 5px
            text-decoration:underline
            word-break: normal
          }
      }
  }
  .button {
    width 100%;
    margin-top 30px;
    &-center {
      width 100%;
      max-width 600px;
        &-registration {
          height 56px !important
          color #FFA967
          font-size: 13px
          background: transparent
          border 1px solid #FFA967
          border-radius 30px
          width 72%
        }
        &-go-to-auth {
          height 56px !important
          margin-top 10px
          color #56D68B
          font-size: 13px
          background: transparent
          border 1px solid #56D68B
          border-radius 30px
          width 72%
        }
    }
    &-icon {
      width 100%

      &-svg-icon{
        width 41px
        height 41px
        margin 5px
      }
    }
  }
</style>
