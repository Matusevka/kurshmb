<template lang="pug">
            v-sheet(
            class="v-sheet--offset mx-auto",
            color="white",
            elevation="12")
                v-sparkline(:labels="labels",
                :value="value",
                color="#ff6600",
                line-width="1",
                padding="16",
                elevation="5"
                :smooth="10"
                auto-draw,)
</template>

<script>
export default ({
  data: () => ({
    labels: [
      '12am',
      '3am',
      '6am',
      '9am',
      '12pm',
      '3pm',
      '6pm',
      '9pm',
    ],
    value: [
      200,
      675,
      200,
      500,
      100,
      460,
      150,
      240,
    ],
  }),
});
</script>
