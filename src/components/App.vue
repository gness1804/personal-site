<template lang="pug">
  #app
    Header
    StickyHeader
    Landing
</template>

<script>
import Header from './Header.vue'
import Landing from './Landing.vue'
import StickyHeader from './StickyHeader.vue';

export default {
  name: 'app',
  components: {
    Landing,
    Header,
    StickyHeader,
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
