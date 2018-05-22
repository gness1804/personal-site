<template lang="pug">
  .project-tile
    p {{project.name}}
</template>

<script>
// @flow
import { ProjectI } from '../types/interfaces/';

export default {
  name: 'ProjectTile',
  props: {
    project: {
      type: ProjectI,
      required: true,
    },
  },
};
</script>

