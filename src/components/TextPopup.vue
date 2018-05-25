<template lang="pug">
  .text-popup
    p {{text}}
</template>

<script>

export default {
  name: 'TextPopup',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
};
</script>
