<script>
import { Bar, mixins } from 'vue-chartjs';

const { reactiveProp } = mixins;

export default {
  extends: Bar,
  mixins: [reactiveProp],
  props: ['options'],
  mounted() {
    this.renderChart(this.chartData, {
      maintainAspectRatio: false,
      relative: true,
    });
  },

  watch: {
    chartData() {
      this.$data._chart.destroy();
      this.renderChart(this.chartData, {
        maintainAspectRatio: false,
        relative: true,
      });
    },
  },
};
</script>
