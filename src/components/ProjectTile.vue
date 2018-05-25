<template lang="pug">
  .project-tile
    img(class="project-tile-image"
    v-bind:src="source")
    h4(class="project-tile-name") {{project.name}}
    VariedDescription(v-bind:text="project.description")
    a(v-bind:href="url"
    target="_blank"
    class="tag-link") View Code >
</template>

<script>
// @flow
import { ProjectI, ProjectTileI } from '../types/interfaces/';
import VariedDescription from './VariedDescription.vue';

export default {
  name: 'ProjectTile',
  components: {
    VariedDescription,
  },
  props: {
    project: {
      type: ProjectI,
      required: true,
    },
  },
  data(): ProjectTileI {
    return {
      url: this.project.href,
      source: this.project.image,
    };
  },
};
</script>

