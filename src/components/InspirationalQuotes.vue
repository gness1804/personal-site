<template lang="pug">
  .quotes-main-container

</template>

<script>
// @flow

import quotes from '../helpers/quotes'

interface DataI {
  quotes: string,
  shownQuote: string,
}

export default {
  name: 'InspirationalQuotes',
  data (): DataI {
    return {
      quotes,
      shownQuote: ''
    }
  },
  methods: {
    selectQuote: function (): void {

    }
  },
  mounted: {

  }
}
</script>

