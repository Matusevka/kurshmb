<template lang="pug">
  .registration-container
    v-row.logo(align='center' justify='center')
      img.logo-icon(src="../assets/logo.png", alt="alt")
    v-row.text-field(align='center' justify='center')
      .text-field-center
        v-text-field.text-field-center-input(
          v-model="email"
          solo hide-details
          label='E-mail'
          type='email'
          required)
        v-text-field.text-field-center-input(
          v-model="name"
          solo hide-details
          label='Имя'
          type='name'
          required)
        v-text-field.text-field-center-input(
          v-model="lname"
          solo hide-details
          label='Фамилия'
          type='lname'
          required)
        v-text-field.text-field-center-input(
          v-model="password"
          solo hide-details
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          :type="showPassword ? 'text' : 'password'"
          @click:append="showPassword = !showPassword"
          label='Пароль'
          required)
        .text-field-center-rules-text(
          v-show="!isFocus") Нажимая зарегистрироваться вы принимаете:
        .text-field-center-rules-button(
          v-show="!isFocus"
          text color="normal"
          @click='open()') Правила и условия политики конфиденциальности
    v-row.button(align='center' justify='center')
      .button-center
        v-btn.button-center-registration(
          @click="checkForm()"
          :loading='loading'
          dark
          :disabled='loading') Зарегистрироваться
        v-btn.button-center-go-to-auth(
          @click="route('auth')"
          dark
          v-show="!isFocus") Уже есть аккаунт
</template>

<script>
export default ({
  name: 'registration',
  methods: {
    route(routeName) {
      this.$route.push(routeName);
    },
  },
});
</script>

<style lang="stylus" scoped>
  .registration-container {
    width 100%
    height 100%
    padding 0
    text-align: center;
    vertical-align middle
  }
  .logo {
    position relative
    margin-bottom 3%
    margin-right 0
    margin-left 0
    margin-top 3%
    text-align: center;
      &-icon {
        position relative
        vertical-align middle
        width:auto;
        height:100%;
      }
  }
  .text-field {
    width 100%;
    height 33vh;
    margin 0;
      &-center {
        width 100%;
        padding-right 10px;
        padding-left 10px;
          &-input {
            padding-right 10px;
            padding-left 10px;
            margin-top 10px
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
    height 34vh;
    margin 0;
    &-center {
      width 100%;
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
