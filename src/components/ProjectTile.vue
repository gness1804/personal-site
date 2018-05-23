<template lang="pug">
  .project-tile
    img(class="project-tile-image"
    v-bind:src="source")
    h4(class="project-tile-name") {{project.name}}
    p(class="project-tile-description") {{project.description}}
    a(v-bind:href="url"
    target="_blank"
    class="tag-link") Read More >
</template>

<script>
// @flow
import { ProjectI, ProjectTileI } from '../types/interfaces/';

export default {
  name: 'ProjectTile',
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

