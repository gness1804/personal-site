<template lang="pug">
  .quotes-main-container
    p {{shownQuote.body || 'Seeking inspiration...'}}
</template>

<script>
// @flow

import quotes from '../helpers/quotes';
import { InspirationalQuotesI } from '../types/interfaces/';

export default {
  name: 'InspirationalQuotes',
  data (): InspirationalQuotesI {
    return {
      counter: 0,
      quotes,
      shownQuote: ''
    }
  },
  mounted: function (): void {
    setInterval((): void => {
      if (this.counter < this.quotes.length - 1) {
        this.counter++;
      } else {
        this.counter = 0;
        this.shownQuote = this.quotes[0];
        return;
      }
      this.shownQuote = this.quotes[this.counter];
    }, 3000);
  }
}
</script>

