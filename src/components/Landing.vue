<template lang="pug">
  #landing
    img(src="../assets/graham-puck-splash.jpg" alt="My former dog and I." class="splash-image")
</template>


<script>
export default {
  name: 'Landing',
}
</script>

<style scoped>
  #landing {
    margin: 0 20vw;
  }

  .splash-image {
    height: 35rem;
    margin-top: 60px;
    width: 100%;
  }
</style>
