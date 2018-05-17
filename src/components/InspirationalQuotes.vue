<template lang="pug">
  .quotes-main-container
    .quote
      p(class="quote-body" v-if="shownQuote.body") "{{shownQuote.body}}"
      p(v-else class="quote-body") Inspiration sometimes comes from where you least expect it.
      p(class="quote-author" v-if="shownQuote.body") --{{shownQuote.author || ''}}

</template>

<script>
// @flow

import quotes from '../helpers/quotes';
import { InspirationalQuotesI } from '../types/interfaces/';

export default {
  name: 'InspirationalQuotes',
  data(): InspirationalQuotesI {
    return {
      counter: 0,
      quotes,
      shownQuote: '',
    };
  },
  methods: {
    rotateQuotes: function (): void {
      if (this.counter < this.quotes.length - 1) {
        this.counter++;
      } else {
        this.counter = 0;
        [this.shownQuote] = this.quotes;
        return;
      }
      this.shownQuote = this.quotes[this.counter];
    },
  },
  mounted: function (): void {
    setInterval((): void => {
      this.rotateQuotes();
    }, 4000);
  },
};
</script>

