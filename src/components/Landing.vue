<template lang="pug">
  #landing
    img(src="../assets/graham-puck-splash.jpg" alt="My former dog and I." class="splash-image")
    .landing-splash-text-container
      p(class="main-text") Web Developer, Author, Traveler, and Pet Lover
      p(class="sub-text") (and fan of the Oxford comma)
    Quotes
</template>


<script>
import Quotes from './InspirationalQuotes.vue';

export default {
  name: 'Landing',
  components: {
    Quotes,
  },
}
</script>
