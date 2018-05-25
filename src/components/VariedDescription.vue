<template lang="pug">
  .varied-description
    p(class="varied-description-text") {{revisedText}}
</template>

<script>
// @flow
import truncate from '../helpers/truncate';
import { VariedDescriptionI } from '../types/interfaces/';

export default {
  name: 'VariedDescription',
  props: {
    text: {
      type: String,
      required: true,
    },
  },
  data(): VariedDescriptionI {
    return {
      isTruncated: true,
    };
  },
  computed: {
    revisedText: function (): string {
      if (this.isTruncated) {
        return truncate(this.text);
      }
      return this.text;
    },
  },
};
</script>
