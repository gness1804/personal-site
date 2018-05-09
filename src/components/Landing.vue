<template lang="pug">
  #landing
    img(src="../assets/graham-puck-splash.jpg" alt="My former dog and I." class="splash-image")
    img(src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/LeBron_James_going_for_slamdunk.jpg/200px-LeBron_James_going_for_slamdunk.jpg")
    img(src="https://mk0slamonlinensgt39k.kinstacdn.com/wp-content/uploads/2018/01/GettyImages-873815870.jpg")
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
