<template lang="pug">
  .project-tile
    p I am the project tile.
</template>

<script>
// @flow
import { ProjectI } from '../types/interfaces/';

export default {
  name: 'ProjectTile',
  props: {
    Project: {
      type: ProjectI,
      required: true,
    },
  },
};
</script>

