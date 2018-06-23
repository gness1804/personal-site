<template lang="pug">
  include mixins/icons
  .writing
    h2(class="writing-heading") Stuff I Wrote
    .book-container
      a(href="https://www.amazon.com/Islandwide-Struggle-Freedom-Emancipation-Reenslavement-ebook/dp/B015ZTG2UM/ref=sr_1_1?ie=UTF8&qid=1446851797&sr=8-1&keywords=graham+nessler" target="_blank" title="Buy my book!")
        img(src="../assets/book-cover_.jpg" alt="The cover of my book." class="writing-book-cover-image")
      p(class="writing-book-title") An Islandwide Struggle for Freedom: Revolution, Emancipation, and Reenslavement in Hispaniola, 1789-1809
    +icons()
    Medium
</template>

<script>
// @flow
import Medium from './Medium.vue';

export default {
  name: 'Writing',
  components: {
    Medium,
  },
};
</script>

