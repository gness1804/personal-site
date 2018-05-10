<template lang="pug">
  #stickyHeader.hidden
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

