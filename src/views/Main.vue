<template lang="pug">
    .align
      v-row( align="center", no-gutters)
        v-subheader.subheader Рабочий стол
        v-conteiner
          v-row( no-gutters, align="center", justify="center")
            v-list-title(v-for="segment in segments" :key="slave" )
              v-col
                v-sheet.field( color="white", elevation="5", height="170", width="390" )
                  v-subheader {{ segment.heading }}
                  .value(class="red--text lighten-1--text") {{ segment.quantity }}
            v-list-title(v-for="segment in segments1" :key="none" )
              v-col.bottom
                v-sheet.field( color="white", elevation="10", height="500", width="390" )
                  v-subheader {{ segment.heading }}
                  v-divider
                  v-col
                    v-divider
                    v-btn.list( class="ma-2", outlined, color="indigo", x-small) Посмотреть все
</template>

<script>
import Nav from '../components/Nav-Buttons.vue';
import Profile from '../components/AvatarBox.vue';

export default {
  components: {
    Nav,
    Profile,
  },
  data() {
    return {
      segments: [
        { heading: 'Рабочее время', quantity: '48ч 24м' },
        { heading: 'Продуктвное время', quantity: '23ч 40м' },
        { heading: 'Времени онлайн', quantity: '78ч 25м' },
        { heading: 'Место по времени', quantity: '2' },
        { heading: 'Продуктивность', quantity: '21%' },
        { heading: 'Эффективность', quantity: '17%' },
      ],
      segments1: [
        { heading: 'Продуктивные приложения' },
        { heading: 'Непродуктивные пиложения' },
      ],
    };
  },
};
</script>
<style lang="stylus" scoped>
.stroke{
  height 150px
}
.field{
  margin-bottom 5px
}
.bottom{
  bottom  0px
}
.align{
  align-items center
  width 100%
}
.value{
  text-align center
  font-size 3em
}
.list{
  margin-left 5px
}
.subheader{
  font-size 2em
}
</style>
