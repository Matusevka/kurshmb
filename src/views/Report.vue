<template lang="pug">
  v-app
      v-subheader.subheader Отчёт
      v-row
        v-col.wight(align="start")
          v-text Какой-то отчёт
          Diagram
        v-col.wight(align="end")
          Data
      v-col
        v-sheet.back(color="white", elevation="5", width="800")
          Command
          SparkLine
</template>

<script>
import Nav from '../components/Nav-Buttons.vue';
import Diagram from '../components/Diagram.vue';
import Profile from '../components/AvatarBox.vue';
import Footer from '../components/Footer.vue';
import Data from '../components/DatePicker.vue';
import Command from '../components/Comand.vue';
import SparkLine from '../components/SparkLine.vue';

export default {
  components: {
    Nav,
    Profile,
    Footer,
    Data,
    Command,
    SparkLine,
    Diagram,
  },
};
</script>

<style lang="stylus" scoped>
.subheader{
  font-size 2em
  margin-top 2px
}
.wight{
  width 49%
}
</style>
