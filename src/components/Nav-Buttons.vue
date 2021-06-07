<template lang="pug">
    v-row.Desk-Top(align='center' justify='center')
      v-row(align='center' justify='center')
        img.logo-icon(src="../assets/logo.png", :width="25")
      v-list-item-title.title(v-for="link in links" :key="link.text")
        v-btn.button(outlined plain raised text @click="route(link.route)")
          v-list-item-title {{ link.text }}
</template>
<script>

export default ({
  data() {
    return {
      links: [
        { text: 'Рабочий стол', route: '/main' },
        { text: 'Приборная панель', route: '/dashboard' },
        { text: 'Участники', route: '/options' },
        { text: 'Отчёт', route: '/report' },
      ],
    };
  },

  methods: {
    route(path) {
      this.$router.push({ path });
    },
  },
});
</script>

<style lang="stylus" scoped>
.button{
  width 100%
  transition: all 0.3s ease
}
.title{
  width 100%
}
.Desk-Top{
  margin-top 20px
}
.button:hover{
  background-color #212121
}
.logo-icon{
  margin-bottom 25px
}
</style>
