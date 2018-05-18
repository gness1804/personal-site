<template lang="pug">
  #app
    Header
    StickyHeader
    router-view
</template>

<script>
import Header from './Header.vue';
import StickyHeader from './StickyHeader.vue';

export default {
  name: 'app',
  components: {
    Header,
    StickyHeader,
  },
};
</script>
