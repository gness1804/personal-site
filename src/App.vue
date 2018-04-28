<template>
  <div id="app">
    <Landing msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Landing from './components/Landing.vue'

export default {
  name: 'app',
  components: {
    Landing
  }
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
