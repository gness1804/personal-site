<template lang="pug">
  .quotes-main-container

</template>

<script>
import quotes from '../helpers/quotes';

export default {
  name: 'InspirationalQuotes',
  data() {
    return {
      quotes,
      shownQuote: '',
    };
  },
  methods: {
    selectQuote: function () {

    },
  },
  mounted: {

  },
}
</script>

