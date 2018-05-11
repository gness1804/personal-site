<template lang="pug">
  .quotes-main-container

</template>

<script>
// @flow

import quotes from '../helpers/quotes'
import { InspirationalQuotesI } from '../types/interfaces/'

export default {
  name: 'InspirationalQuotes',
  data (): InspirationalQuotesI {
    return {
      quotes,
      shownQuote: ''
    }
  },
  methods: {
    selectQuote: function (): void {
      // for (const quote of this.quotes) {

      // }
    }
  },
  mounted: {

  }
}
</script>

