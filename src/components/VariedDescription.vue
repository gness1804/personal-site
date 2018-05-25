<template lang="pug">
  .varied-description
    p(class="varied-description-text") {{truncatedText}}
</template>

<script>
// @flow
import truncate from '../helpers/truncate';

export default {
  name: 'VariedDescription',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  computed: {
    truncatedText: function (): string {
      return truncate(this.text);
    },
  },
};
</script>
