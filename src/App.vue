<template lang="pug">
  #app
    Header
    Landing
</template>


<script>
import Header from './components/Header.vue'
import Landing from './components/Landing.vue'

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
  text-align: center;
  margin-top: 60px;
}
</style>
