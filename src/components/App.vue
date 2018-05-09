<template lang="pug">
  #app
    Header
    Landing
</template>

<script>
import Header from './Header.vue'
import Landing from './Landing.vue'

export default {
  name: 'app',
  components: {
    Landing,
    Header,
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
