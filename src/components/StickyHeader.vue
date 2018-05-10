<template lang="pug">
  #stickyHeader.hidden
    a(href="/")
      h1 GTN
    HeaderLinks
</template>

<script>
import HeaderLinks from './HeaderLinks.vue';

export default {
  name: 'StickyHeader',
  components: {
    HeaderLinks,
  },
}
</script>

