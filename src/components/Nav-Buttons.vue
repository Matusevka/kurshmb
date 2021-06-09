<template lang="pug">
  .wrp
    v-row.Desk-Top(align='center' justify='center')
      v-row(align='center' justify='center')
        img.logo-icon(src="../assets/logo.png", :width="50")
    v-list( nav )
      v-list-item(v-for="item in links" link :key="item.route" dark )
        v-list-item-content
          v-list-item-title(@click="route(item.route)") {{item.text}}
</template>
<script>

export default ({
  data() {
    return {
      links: [
        { text: 'Статистика', route: '/dashboard' },
        { text: 'Участники', route: '/options' },
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
