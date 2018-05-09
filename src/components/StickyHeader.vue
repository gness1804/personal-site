<template lang="pug">
  #stickyHeader.hidden
    h1 GTN
</template>

<script>
export default {
  name: 'StickyHeader',
}
</script>

<style scoped>
  #stickyHeader {
    background-color: #fff;
    border-bottom: 1px solid #d1ccbd;
    margin: 0 20vw;
    position: sticky;
    top: -1px;
  }
</style>


