<template lang="pug">
  #landing
    img(src="https://drive.google.com/uc?id=1HvMcB8yYBTbl_fiDTGNJDpRU7mWiRTNI" alt="My former dog and I." class="splash-image")
    .landing-splash-text-container
      p(class="main-text") Web Developer, Author, Traveler, and Pet Lover
      p(class="sub-text") (and fan of the Oxford comma)
    Quotes
</template>

<script>
// @flow

import Quotes from './InspirationalQuotes.vue';

export default {
  name: 'Landing',
  components: {
    Quotes,
  },
};
</script>
