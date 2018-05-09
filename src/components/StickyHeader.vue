<template lang="pug">
  #stickyHeader.hidden
    h1 I am the Sticky Header.
</template>

<script>
export default {
  name: 'StickyHeader',
}
</script>

<style scoped>
  #stickyHeader {
    position: sticky;
    top: -1px;
  }
</style>


