<template lang="pug">
  .varied-description
    p(class="varied-description-text") {{truncatedText}}
    TextPopup(v-bind:text="text")
</template>

<script>
// @flow
import truncate from '../helpers/truncate';
import TextPopup from './TextPopup.vue';

export default {
  name: 'VariedDescription',
  components: {
    TextPopup,
  },
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
