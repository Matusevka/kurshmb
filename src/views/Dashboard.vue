<template lang="pug">
  .wrp
    Command.margin
    v-subheader.total-time(v-if="graphData  && graphData.datasets.length") Общее время:
      span {{formatSec(totalTime)}}
    v-select.select-range(
      v-model="range"
      :items="rangeItems"
      item-text="name"
      item-value="value"
      v-if="graphData  && graphData.datasets.length"
      outlined
    )
    bar( v-if="graphData && graphData.datasets.length" :chart-data="graphData" :width="300" :height="300")
    v-row.loading-wrp( justify="center" no-gutters v-if="!graphData" )
      v-progress-circular(
        size=50
        width=7
        color='#FF6600'
        indeterminate
      )
    v-row.no-info-wrp( no-gutters v-if="graphData && !graphData.datasets.length")
      span Отсутствуют данные о рабочем времени.
      span Возможно следует обновить Wakatime Id.
      span
        router-link( to="/options" tag="a") Подробнее
</template>

<script>
import Bar from '../components/Bar.vue';
import Command from '../components/Comand.vue';

export default {
  components: {
    Command,
    Bar,
  },

  data() {
    return {
      datacollection: null,
      totalTime: 0,
      range: {
        name: 'Неделя',
        value: 'Last 7 Days',
      },
      rangeItems: [
        {
          name: 'Сегодня',
          value: 'Today',
        },
        {
          name: 'Вчера',
          value: 'Yesterday',
        },
        {
          name: 'Неделя',
          value: 'Last 7 Days',
        },
        {
          name: 'Две недели',
          value: 'Last 14 Days',
        },
        {
          name: 'Месяц',
          value: 'Last 30 Days',
        },
      ],
    };
  },

  computed: {
    timeData() {
      return this.$store.state.timetracker.timeRangeData;
    },

    sortedItem() {
      return this.$store.state.timetracker.sortedItem;
    },

    graphData() {
      if (this.timeData) {
        // eslint-disable-next-line vue/no-side-effects-in-computed-properties
        this.totalTime = 0;

        const labels = this.timeData.dates;
        const days = [];

        for (let i = 0; i < this.timeData.data.length; i += 1) {
          const userInfo = this.timeData.data[i];

          if (this.sortedItem && this.sortedItem !== userInfo._id) {
            continue;
          }

          const dayObj = {
            label: userInfo.firstname,
            backgroundColor: `#${(Math.random() * 0xFFFFFF << 0).toString(16)}`,
            data: [],
          };
          days.push(dayObj);

          // eslint-disable-next-line vue/no-side-effects-in-computed-properties
          this.totalTime += userInfo.duration;

          for (let j = 0; j < userInfo.days.length; j += 1) {
            const day = userInfo.days[j];
            days[days.length - 1].data.push((day.total / 60 / 60).toFixed(2));
          }
        }

        return {
          labels,
          datasets: days,
        };
      }

      return null;
    },
  },

  methods: {
    formatSec(secs) {
      let minutes = Math.floor(secs / 60);
      const hours = Math.floor(minutes / 60);
      minutes %= 60;
      return `${(`0${hours}`).slice(-2)}:${(`0${minutes}`).slice(-2)}`;
    },

    getRandomInt() {
      return Math.floor(Math.random() * (50 - 5 + 1)) + 5;
    },
  },

  watch: {
    range() {
      this.$store.dispatch('getAllRange', this.range);
    },
  },

  created() {
    this.$store.commit('sortedItem', null);
    this.$store.dispatch('getAllRange', this.range.value);
  },
};
</script>

<style lang="stylus">
  .total-time {
    font-size 20px

    span {
      margin-left 10px
      color #f87979
    }
  }

  .margin{
    margin-bottom 5px
  }

  .loading-wrp {
    margin-top 30px !important
  }

  .no-info-wrp {
    margin 30px !important

    span {
      margin-right 10px
    }
  }

  .select-range {
    max-width 150px
    margin-left 16px !important
  }
</style>
