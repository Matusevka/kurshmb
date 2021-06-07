<template lang="pug">
      .wrp
          Command.margin
          v-row.position(justify="space-around" align="center")
            v-col(cols="12" md="8")
              SparkLine
            v-col(cols="8" md="3")
                v-sheet.field( color="white", elevation="5" )
                    v-subheader gffghfdvd
                    .value(class="red--text lighten-1--text") 21%
                v-sheet.field( color="white", elevation="5" )
                    v-subheader gffghfdvd
                    .value(class="red--text lighten-1--text") 21%
                v-sheet.field( color="white", elevation="5" )
                      v-subheader gffghfdvd
                      .value(class="red--text lighten-1--text") 21%
                v-sheet.field( color="white", elevation="5" )
                      v-subheader gffghfdvd
                      .value(class="red--text lighten-1--text") 21%
                v-sheet.field( color="white", elevation="5" )
                      v-subheader gffghfdvd
                      .value(class="red--text lighten-1--text") 21%
</template>

<script>
import Nav from '../components/Nav-Buttons.vue';
import Profile from '../components/AvatarBox.vue';
import Footer from '../components/Footer.vue';
import Command from '../components/Comand.vue';
import SparkLine from '../components/SparkLine.vue';

export default {
  components: {
    Nav,
    Profile,
    Footer,
    Command,
    SparkLine,
  },
  data() {
    return {
      segments: [
        { heading: 'Продуктивность', quantity: '21%' },
        { heading: 'Эффективность', quantity: '17%' },
      ],
      stats: [
        { heading: 'Продуктивные работники', quantity: 'Никита Савчук' },
        { heading: 'Непродуктивные сотрудники', quantity: 'Алексей Матусевич' },
        { heading: 'Наибольший оффлайн', quantity: 'Андрей Насонкин' },
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.subheader{
  font-size 2em
}
.margin{
  margin-bottom 5px
}
.spread{
  display flex
  flex-wrap wrap
  flex-direction row
  min-width 200px
}
.field{
  width 100%
  margin-bottom 5px
}
.value{
  text-align center
  font-size 3em
}
.ava{
  margin-left 15px
  margin-right 5px
  width 20%
}
.name{
  width 75%
}
</style>
