<template lang="pug">
  .varied-description
    p(class="varied-description-text" v-on:click="expandText" v-bind:class="{ clickable: isLongEnough }") {{revisedText}}
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
      isLongEnough: false,
    };
  },
  methods: {
    expandText: function (): void {
      this.isTruncated = !this.isTruncated;
    },
  },
  computed: {
    revisedText: function (): string {
      if (this.isTruncated) {
        return truncate(this.text);
      }
      return this.text;
    },
  },
  mounted: function (): void {
    if (this.text.split(' ').length > 50) {
      this.isLongEnough = true;
    }
  },
};
</script>
