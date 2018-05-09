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

<style scoped>
  #stickyHeader {
    background-color: #fff;
    border-bottom: 1px solid #d1ccbd;
    margin: 0 20vw;
    position: sticky;
    text-align: center;
    top: -1px;
  }

  #stickyHeader h1 {
    margin-bottom: 30px;
  }
</style>


